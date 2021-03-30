import React,{Component} from 'react'
import {reduxForm} from 'redux-form'
import{connect} from 'react-redux'
import {Container} from 'react-bootstrap'
import requireAuth from '../AuthenticationHOC/authHOC'
import {getParticularApplicationActionCreator} from '../../actions/PatientActionCreators/getParticularApplicationActionCreator'
import {editApplicationActionCreator} from '../../actions/PatientActionCreators/editApplicationActionCreator'
import ApplyForm from './applyForm'
import _ from 'lodash'

class ViewUserApplication extends Component{

    componentDidMount() {
       console.log('this props checking for params.id ',this.props)
         console.log(' params.id ',this.props.match.params.id)
    //    const token = localStorage.getItem('token')
        const values={
            id:this.props.match.params.id
        }
    //    const values = this.props.match.params.id
    //     values.token = localStorage.getItem('token')
        this.props.getParticularApplicationActionCreator(values)
      }
         
    

      

      
onSubmit = (formValues) =>{
// formValues.token = localStorage.getItem('token');
    console.log(formValues);
  
  this.props.editApplicationActionCreator(formValues,()=>{
  
    this.props.history.push('/getAllUserApplication')
  })
  
  }





    render(){  
        return(
            <Container className=' mt-5'>
              <h3 className="text-center grey-text text-darken-3">View Application</h3>

            <div>
            <ApplyForm
            variant="secondary"
            message="Applied"
            variant1="danger"
            message1="Back" 
            to="/getAllUserApplication"
            disabled="disabled"
            initialValues={this.props.gotApplicationSuccessfully} 
            onSubmit={this.onSubmit}
           />
            </div>
            </Container>
            
        )
    }
}



function mapStateToProps(state,ownProps){

     return{
        gotApplicationSuccessfully:_.find(state.getUserApplications.gotApplicationSuccessfully, {'_id': ownProps.match.params.id}),
         particularApplicationToBeEdited:state.getParticularApplication.getParticularApplication
            
    }
}
//_.find(state.getUserApplications.gotApplicationSuccessfully, {'_id': ownProps.match.params.id})


export default reduxForm({
    form:'applyForm'
})(connect(mapStateToProps,{editApplicationActionCreator,getParticularApplicationActionCreator})(requireAuth(ViewUserApplication)))