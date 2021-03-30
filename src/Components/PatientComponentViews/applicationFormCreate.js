import React,{Component} from  'react'
import {applyFormActionCreator} from '../../actions/PatientActionCreators/applyFormActionCreator'
import {connect} from 'react-redux'
import ApplyForm from './applyForm'
import requireAuth from '../AuthenticationHOC/authHOC'
import { Container} from 'react-bootstrap'
import Footer from '../footer'
class ApplicationFormCreation extends Component{

onSubmit=(formValues) =>{

    // formValues.token = localStorage.getItem('token');
    // console.log(formValues);
    // formValues.token = localStorage.getItem('token');
    // console.log(formValues);
    // console.log('localStorage ', localStorage.getItem('token'))
  
  this.props.applyFormActionCreator(formValues,()=>{
    
    this.props.history.push('/getAllUserApplication')
  })

    
}  



    render(){

        return(
          <div>
         <Container className=' mt-5'>
            <div>
                <h3 className="text-center text-secondary">Request Medication</h3>

                <ApplyForm 
                variant1="danger"
                message1="Back" 
                variant="success" 
                message="Apply"  
                to="/"
                onSubmit={this.onSubmit}/>

            </div>
            </Container>
            <Footer /> 
            </div>
        )   
    }
}

export default connect(null,{applyFormActionCreator})(requireAuth(ApplicationFormCreation));
