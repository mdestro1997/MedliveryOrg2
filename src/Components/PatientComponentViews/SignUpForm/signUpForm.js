/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, Container, Alert } from 'react-bootstrap/';
import FieldFileInput from '../../uploader';
import bsCustomFileInput from 'bs-custom-file-input';
import validator from 'validator';
import { signUpActionCreator } from '../../../actions/login/signUpActionCreator';
import _ from 'lodash'

// import '../styles/form-styles';
var max =''

class SignUpForm extends Component {
  parent_container = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // placeholder="Copy Of ID"
  constructor(props) {
    super(props);
    this.onChanger = this.onChanger.bind(this);
  }

  componentDidMount() {
    bsCustomFileInput.init();
    max =   this.renderDateHelper()
  }

  onChanger(e) {
    const {
      input: { onChange },
    } = this.props;
    onChange(e.target.files[0]);
    console.log(e.target.files[0]);
  }


  renderDateHelper(){
   
    var date = new Date()
    var day = date.getDate()
    var month = date.getMonth() +1
    var year = date.getFullYear()

    var fullDate = year + '-' + month + '-' + day
     const stringDate = _.toString(fullDate)
    console.log('fullDate ',fullDate)
    console.log('StringDate ',stringDate)

    
    return stringDate

}

  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className=''>
          <Alert variant='danger'>{error}</Alert>
        </div>
      );
    }
  }

  renderHelper = ({
    input,
    type,
    label,
    controlId,
    className,
    placeholder,
    required,
    accept,
    meta,
    error,
    max,
    min
  }) => {
    console.log('meta ', meta);

    return (
      <div className={className}>
        <Form.Group controlId={controlId}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            required
            {...input}
            type={type}
            placeholder={placeholder}
            max={max}
            min={min}

          />

          {this.renderError(meta)}
        </Form.Group>
      </div>
    );
  };

  // renderHelp({input,type,label,controlId,accept,required,placeholder}){

  //     return (
  //       <div className="container">
  //         <div className="custom-file">
  //           <input {...input} id="inputGroupFile01" onChange={this.onChanger()} accept={accept}placeholder ={placeholder} required={required} type={type} className="custom-file-input" />
  //     <label className="custom-file-label" for="inputGroupFile01">{label}</label>
  //         </div>
  //       </div>
  //     );

  // }

  onSubmit(formValues) {
    console.log(formValues);

    this.props.signUpActionCreator(formValues, () => {
      this.props.history.push('/selectGroup');
    });
  }

  render() {
    // const maxDate = new Date();
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className='  '>
          <div className=''>
            <div className='home-inner-signUp'>
              <br />
              <br />
              <br />
              <br />

              <div className='container   mt-5 col-md-9 bg-secondary text-dark '>
                <div className=''>
                  <div className='row'>
                    <h3 className='container text-center display-4 col-md-8 text-dark'>
                      Sign Up
                    </h3>
                  </div>
                  <br />
                  <br />
                  <Form
                    encType='multipart/form-data'
                    onSubmit={handleSubmit(this.onSubmit.bind(this))}
                  >
                    <Form.Row>
                      <Field
                        name='firstname'
                        label='Firstname'
                        component={this.renderHelper}
                        type='text'
                        required='required'
                        placeholder='Enter Firstname'
                        controlId='formGroupFirstname'
                        className='col-md-4'
                      />
                      <Field
                        name='middlename'
                        type='text'
                        required='required'
                        label='Middlename'
                        component={this.renderHelper}
                        placeholder='Enter Middlename'
                        controlId='formGroupMiddlename'
                        className='col-md-4'
                      />
                      <Field
                        name='lastname'
                        type='text'
                        required='required'
                        label='Lastname'
                        component={this.renderHelper}
                        placeholder='Enter Lastname'
                        controlId='formGroupLastname'
                        className='col-md-4'
                      />
                    </Form.Row>
                    <Form.Row>
                      <Field
                        name='email'
                        component={this.renderHelper}
                        type='email'
                        required='required'
                        label='Email'
                        placeholder='Enter Email'
                        controlId='formGroupEmail'
                        className='col-md-6'
                      />

                      <Field
                        name='dateOfBirth'
                        type='date'
                        required='required'
                        label='Date Of Birth'
                        min='1910-01-30'
                        max={max}
                        component={this.renderHelper}
                        placeholder='Enter DOB'
                        controlId='formGroupDOB'
                        className='col-md-6'
                      />
                    </Form.Row>

                    <Form.Row>
                      <Field
                        name='physicalAddress'
                        type='text'
                        required='required'
                        label='Physical Address'
                        component={this.renderHelper}
                        placeholder='Enter Physical Address'
                        controlId='formGroupPhysicalAddress'
                        className='col-md-4'
                      />

                      <Field
                        name='city'
                        type='text'
                        required='required'
                        label='City'
                        component={this.renderHelper}
                        placeholder='City'
                        controlId='formGroupCountry'
                        className='col-md-4'
                      />

                      <Field
                        name='phoneNumber'
                        type='text'
                        required='required'
                        label='Mobile Number'
                        component={this.renderHelper}
                        placeholder='Enter Mobile Number'
                        controlId='formGroupMobileNumber'
                        className='col-md-4'
                      />
                    </Form.Row>

                    <Form.Row>
                      <Field
                        name='password'
                        type='password'
                        required='required'
                        label='Password'
                        component={this.renderHelper}
                        placeholder='Enter Password'
                        controlId='formGroupPassword'
                        className='col-md-6'
                      />
                      <Field
                        name='passwordConfirm'
                        type='password'
                        required='required'
                        label='Confirm password'
                        component={this.renderHelper}
                        placeholder='Confirm password'
                        controlId='formGrouppasswordConfirm'
                        className='col-md-6'
                      />
                    </Form.Row>

                    <Form.Row>
                      <Field name='copyOfId' component={FieldFileInput} />
                    </Form.Row>
                    <br />

                    <div class='row'>
                      <Button
                        className='container  col-md-2 '
                        type='submit'
                        variant='success'
                      >
                        Sign Up
                      </Button>
                    </div>

                    <br />
                  </Form>

                  {/* <div className='container col-12'> */}

                  {/* </div> */}

                  {/* <form className="center" encType="multipart/form-data" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
               
              <br />

          
             
             
                     <div><Alert >{this.props.errorMessage}</Alert></div>

            
             </form> */}

                  {/* <div className="center col l2" >

               <h3 className="grey-text text-darken-3">Sign up</h3>
             </div> */}
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const error = {};

  if (!values.firstname) {
    error.firstname = 'Field is Required';
  } else if (values.firstname) {
    if (!validator.isAlpha(values.firstname)) {
      error.firstname =
        'Name Cannot Contain numbers,symbols or special Characters';
    }
  }
  if (!values.middlename) {
    error.middlename = 'Field is Required';
  } else if (values.middlename) {
    if (!validator.isAlpha(values.middlename)) {
      error.middlename =
        'Name Cannot Contain numbers,symbols or special Characters';
    }
  }
  if (!values.lastname) {
    error.lastname = 'Field is Required';
  } else if (values.lastname) {
    if (!validator.isAlpha(values.lastname)) {
      error.lastname =
        'Name Cannot Contain numbers,symbols or special Characters';
    }
  }

  if (!values.password) {
    error.password = 'Field is Required';
  } else if (values.password) {
  }
  if (!values.passwordConfirm) {
    error.passwordConfirm = 'Field is Required';
  } else if (values.passwordConfirm) {
    if (!validator.equals(values.passwordConfirm, values.password)) {
      error.passwordConfirm = 'Passwords do not Match';
    }
  }

  if (!values.phoneNumber) {
    error.phoneNumber = 'Field is Required';
  }
  if (!values.dateOfBirth) {
    error.dateOfBirth = 'Field is Required';
  }
  if (!values.copyOfId) {
    error.copyOfId = 'Field is Required';
  }
  if (!values.physicalAddress) {
    error.physicalAdress = 'Field is Required';
  }
  if (!values.email) {
    error.email = 'Field is Required';
  } else if (values.email) {
    const validEmail = validator.isEmail(values.email);

    if (!validEmail) {
      error.email = 'Invalid Email';
    }
  }

  //console.log('Error ', errors)
  return error;
}

export default reduxForm({
  form: 'signUpForm',
  validate,
})(connect(null, { signUpActionCreator })(SignUpForm));
