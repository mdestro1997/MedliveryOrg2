import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {Form,Col,Button,Container,Alert} from 'react-bootstrap'

 import validator from 'validator'

import {loginActionCreator} from '../actions/login/loginActionCreator'
//const validator = require('validator');

class LoginFormAdmin extends Component{






    onSubmit(values){

        console.log('values ', values)

      this.props.loginActionCreator(values,()=>{

          this.props.history.push('/');
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
    
            <div>
    
    <Form>
    <Form.Row>
    
    <Form.Group  md = "3" as={Col} controlId={controlId}>
        <Form.Label>{label}</Form.Label>
    <Form.Control 
     required
     {...input}
      type={type}
       placeholder={placeholder} 
       
       
    
    />
   
    
   

    {this.renderError(meta)}
    </Form.Group>
    

    </Form.Row>
    
    
    </Form>
            </div>
        )
    
    }
    


    render(){

        const {handleSubmit} = this.props;

        return(


            <div>
                <Container>
{/* handleSubmit(this.onFormSubmit.bind(this)) */}
             <form  onSubmit={handleSubmit(this.onSubmit.bind(this))}>

     <h3 className="center grey-text text-darken-3">LOGIN DETAILS</h3>

     <br />
     <br />
                 <Field
                 name="AdminUsername"
                 type="text"
                 label="Admin Username"
                 placeholder="Admin Username"
                 component={this.renderHelper}
                 />
                 <Field
                 name="Adminpassword"
                 type="password"
                 label="Admin Password"
                 placeholder="Enter Password"
                 component={this.renderHelper}
                 />

        <div><Alert >{this.props.errorMessage}</Alert></div>

<Button type ="submit" variant="danger"> Login </Button>          

   </form>
   </Container>
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

    form:'LoginFormAdmin',
    validate
})(connect(mapStateToProps,{loginActionCreator})(LoginFormAdmin))
















































