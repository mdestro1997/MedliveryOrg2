import React, { Component } from 'react';
import { Form, Button,Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validator from 'validator'

import DoctorCertUpload from '../uploadCertOfPractice'
import CopyOfIdUploader from './doctorCopyId'
import bsCustomFileInput from 'bs-custom-file-input';

import { doctorSignUpActionCreator } from '../../actions/DoctorActionCreators/doctorSignUpActionCreator';

class DoctorSignUpForm extends Component {


  componentDidMount() {
    bsCustomFileInput.init();
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


  renderHelperCategory = ({
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
    as,
    maxDate,
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
            as={as}
            //  max={maxDate}
          >
               <option>General Physician </option>

<option>Cardiologist</option>
<option>Neurosurgeon</option>
<option>Oncologist</option>
<option>Orthopaedic Surgeon</option>
<option>Neurologist</option>
<option>Gastroenterologist</option>
<option>ENT</option>
<option>Dentist</option>
<option>Psychiatrist</option>
<option>Urologist</option>
<option>Gynecologits</option>
<option>Pediatrician</option>
          </Form.Control>

          {this.renderError(meta)}
        </Form.Group>
      </div>
    );
  };



  renderHelperGender = ({
    input,
    type,
    label,
    controlId,
    className,
    placeholder,
    required,
    accept,
    meta,
    as,
    error,
    maxDate,
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
            as={as}
            //  max={maxDate}
          >
            <option>Male </option>

<option>Female</option>
          </Form.Control>

          {this.renderError(meta)}
        </Form.Group>
      </div>
    );
  };


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
    maxDate,
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
            //  max={maxDate}
          />

          {this.renderError(meta)}
        </Form.Group>
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);

      this.props.history.push('/doctorProfile');
  
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='container mt-5 mb-5'>
        <h3 className='text-center text-secondary mb-5'>Add New Doctor</h3>
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
              placeholder='Firstname'
              controlId='formGroupFirstname'
              className='col-md-4'
              
              />
            
            <Field
              name='middlename'
              label='Middlename'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='Middlename'
              controlId='formGroupMiddlename'
              className='col-md-4'
              
              />
             
            <Field
              name='lastname'
              label='Lastname'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='Lastname'
              controlId='formGroupLastname'
              className='col-md-4'
              
              />
             
            {/* <div className='col-md-6'>
      
               <Form.Group>
                 <Form.Label>Location</Form.Label>
                     <Form.Control as='select' placeholder='Select Hospital'>
                       <option>Select Hospital</option>
      
                       <option>Kalafhi Private Hospital</option>
                       <option>Gaborone Private Hospital</option>
                       <option>Bokamoso Private Hospital</option>
                       <option>Sidilega Private Hospital</option>
                       <option>AO Private Clinic</option>
                     </Form.Control>
                   </Form.Group>
      </div> */}
          </Form.Row>

          <Form.Row>
              <Field
              name='email'
              label='Email'
              component={this.renderHelper}
              type='email'
              required='required'
              placeholder='Email'
              controlId='formGroupEmail'
              className='col-md-4'
              
              />
              

            <Field
              name='nationality'
              label='Nationality'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='Nationality'
              controlId='formGroupNationality'
              className='col-md-4'
              
              />
              
            {/* <div className='col-md-4'> */}
            <Field
              name='gender'
              label='Gender'
              component={this.renderHelperGender}
              type='select'
              as='select'
              required='required'
              placeholder='Gender'
              controlId='formGroupGender'
              className='col-md-4'
              
              />
              {/* <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control as='select' placeholder='Category'>
                  <option>General Physician </option>

                  <option>Cardiologist</option>
                  <option>Neurosurgeon</option>
                  <option>Oncologist</option>
                  <option>Orthopaedic Surgeon</option>
                  <option>Neurologist</option>
                  <option>Gastroenterologist</option>
                  <option>ENT</option>
                  <option>Dentist</option>
                  <option>Psychiatrist</option>
                  <option>Urologist</option>
                  <option>Gynecologits</option>
                  <option>Pediatrician</option>
                </Form.Control>
              </Form.Group>
            </div> */}
          </Form.Row>
          <Form.Row>

            <Field
              name='phoneNumber'
              label='Phone Number'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='Mobile Number'
              controlId='formGroupMobileNumber'
              className='col-md-4'
              
              />
             
            <Field
              name='physicalAddress'
              label='Physical Address'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='Physical Address'
              controlId='formGroupPhysicalAddress'
              className='col-md-4'
              
              />
             
             <Field
                        name='dateOfBirth'
                        type='date'
                        required='required'
                        label='Date Of Birth'
                        max={this.maxDate}
                        min={this.minDate}
                        component={this.renderHelper}
                        placeholder='Enter DOB'
                        controlId='formGroupDOB'
                        className='col-md-4'
                      />
          </Form.Row>

          <Form.Row>
       
            <Field
              name='password'
              label='Password'
              component={this.renderHelper}
              type='password'
              required='required'
              placeholder='Password'
              controlId='formGroupPassword'
              className='col-md-6'
              
              />
            

            <Field
              name='confirmPassword'
              label='Confirm Password'
              component={this.renderHelper}
              type='password'
              required='required'
              placeholder='Confirm Password'
              controlId='formGroupConfirmPassword'
              className='col-md-6'
              
              />
            
          </Form.Row>

          <Form.Row>
            {/* <div className='col-md-6'> */}
            <Field
              name='copyOfId'
              component={CopyOfIdUploader}
           
              
              />
              {/* <Form.Group>
                <Form.Label>Copy of ID</Form.Label>
                <Form.Control type='file' placeholder='Copy of ID' />
              </Form.Group>
            </div> */}

            {/* <div className='col-md-6'> */}
            <Field
              name='copyOfCertificateOfPractice'
              component={DoctorCertUpload}
             
              
              />
              {/* <Form.Group>
                <Form.Label>Copy of Certificate Of Practice</Form.Label>
                <Form.Control
                  type='file'
                  placeholder='Certificate Of Practice'
                />
              </Form.Group>
            </div> */}
          </Form.Row>

          <Form.Row>
            <Button
              className='container col-md-4 mt-5'
              type='submit'
              variant='success'
            >
              {' '}
              Add{' '}
            </Button>
          </Form.Row>
        </Form>
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
  if (!values.confirmPassword) {
    error.confirmPassword = 'Field is Required';
  } else if (values.confirmPassword) {
    if (!validator.equals(values.confirmPassword, values.password)) {
      error.confirmPassword = 'Passwords do not Match';
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
  form: 'doctorSignUpForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(connect(null, { doctorSignUpActionCreator })(DoctorSignUpForm));
