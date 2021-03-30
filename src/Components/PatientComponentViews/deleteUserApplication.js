import React,{Component} from 'react'
import {Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import _ from 'lodash'
import GetAllUserApplication from './getAllUserApplication'
import {deleteApplicationActionCreator} from '../../actions/PatientActionCreators/deleteApplicationActionCreator'
import Modal from '../Modal'


class DeleteUserApplication extends Component{

componentDidMount(){


}


onAgree = () =>{

  console.log('You Agreed,yeiiii!!!',this.props.match.params.id)
  const id =this.props.match.params.id;
  console.log('You Agreed,yeiiii!!!',id)

    this.props.deleteApplicationActionCreator(id,() =>{

        this.props.history.push('/getAllUserApplication')

    })
 }

 onDisagree = () =>{
    console.log('am going back Now')
    this.props.history.push('/getAllUserApplication')

 }



    render(){

        return(
            <Container>
            <div>
            <GetAllUserApplication/>
                {/* <h3>Hello Little Bird</h3> */}
                <Modal
                 onDisagree={this.onDisagree}
                 onAgree={this.onAgree}
                 title="Delete Application"
                 body="Are you sure you want to remove/delete this Application?"
                 buttonOne='Back'
                 buttonTwo='Delete'

                 />


            </div>
            </Container>
        )
    }
}


function mapStateToProps(state,ownProps){
    return{
        applicationToBeDeleted: _.find(state.getUserApplications.gotApplicationSuccessfully,{'_id': ownProps.match.params.id})
    }
}


export default connect(mapStateToProps,{deleteApplicationActionCreator})(DeleteUserApplication);