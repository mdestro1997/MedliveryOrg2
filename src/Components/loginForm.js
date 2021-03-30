/* eslint-disable no-unused-vars */
import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {Form,Col,Button,Container,Alert} from 'react-bootstrap'

 import validator from 'validator'

import {loginActionCreator} from '../actions/login/loginActionCreator'
//const validator = require('validator');

class LoginForm extends Component{






    onSubmit(values){
        values.token = localStorage.getItem('token');
        console.log('values ', values)

      this.props.loginActionCreator(values,()=>{

          this.props.history.push('/selectGroup');
      })

    }  

renderError({error,touched}){

    if(error && touched){
        return (
            <div className="" >
                <Alert variant="danger">{error}</Alert>
            </div>
        )
    }
}

    renderHelper = ({input,type,label,controlId,placeholder,required,accept,meta,error}) => {
   
        console.log('meta ',meta)
         

        return(
    
       
    
    <div className=' container col-md-4'>
            <Form.Group  controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
           required
           {...input}
            type={type}
             placeholder={placeholder}  />
             {this.renderError(meta)}
          </Form.Group>
          
          
   
          </div>
            
        )
    
    }
    


    render(){

        const {handleSubmit} = this.props;

        return(

            <div>

            <div className=''>
                <div className=''>
                    <div className='home-inner-signUp'>
         
                    <br />
                <br />
                <br />
                <br />
            <div className='container mt-5  col-md-8'>
  
{/* handleSubmit(this.onFormSubmit.bind(this)) */}
             {/* <form  > */}
         

     <br />
     <br />
      <Form className='bg-secondary ' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
    
     <div className='row'>
         <h3 className="container text-center text-dark display-4">Login </h3>

             </div>  
              
              <Form.Row>
              <Field
                 name="email"
                 type="email"
                 label="Email/Phone Number"
                 controlId="formGridEmail"
                 placeholder="Email or Phone Number"
                 component={this.renderHelper}
                 />

                </Form.Row>

                <Form.Row>
                <Field
                 name="password"
                 type="password"
                 controlId="formGridPassword"
                 label="Enter Password"
                 placeholder="Enter Password"
                 component={this.renderHelper}
                 />
                </Form.Row>

                <div><Alert >{this.props.errorMessage}</Alert></div>

<Form.Row>
<Button className='container col-md-4' type ="submit" variant="success"> Login </Button> 
</Form.Row>
<br />  
</Form>
           
  
            </div>
            </div>
                </div>
            </div>
            </div>
        )
    }
}
  
function mapStateToProps(state){
    return{
            errorMessage:state.authReducer.errorMessage
    }
}


const validate = (values) =>{

    const error = {};

// const validEmail = validator.isEmail(values.email);
//console.log('hkahlajhdhfiufa valid',validEmail)

    if(!values.email ){
       error.email = "Field is Required"
    }else if (values.email){
    const validEmail = validator.isEmail(values.email);

         if(!validEmail){
             error.email ="Invalid Email"
         }
}   
    
   
    if(!values.password){
        error.password="Please Enter password"
    }

    return error;

}

export default reduxForm({

    form:'LoginForm',
    validate
})(connect(mapStateToProps,{loginActionCreator})(LoginForm))