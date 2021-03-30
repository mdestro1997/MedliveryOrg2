/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Form, Button,Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validator from 'validator'

import DoctorCertUpload from '../uploadCertOfPractice'
import CopyOfIdUploader from './doctorCopyId'
import bsCustomFileInput from 'bs-custom-file-input';

import { doctorSignUpActionCreator } from '../../actions/DoctorActionCreators/doctorSignUpActionCreator';

class DoctorBiography extends Component {


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

    this.props.doctorSignUpActionCreator(formValues, () => {
      this.props.history.push('/selectGroup');
    });
  }

  render() {
    const { handleSubmit } = this.props;


    return (
      <div className='container mt-5 mb-5'>
        <h3 className='text-center text-secondary mb-5'>Doctor's Profile</h3>
        <Form
          encType='multipart/form-data'
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Form.Row>
            <Field
              name='qualification'
              label='Qualification'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='e.g MBBS,DNB(Neurology)'
              controlId='formGroupQualification'
              className='col-md-4'
              
              />
            
            <Field
              name='department'
              label='Department'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='e.g Neurosurgeon'
              controlId='formGroupDepartment'
              className='col-md-4'
              
              />
             
            <Field
              name='speciality'
              label='Speciality'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='e.g Neurosurgery'
              controlId='formGroupSpeciality'
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
              name='locality'
              label='Locality'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='e.g Gaborone,Botswana'
              controlId='formGroupLocality'
              className='col-md-4'
              
              />
              

            <Field
              name='consultantIn'
              label='Consultant In'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='e.g Kalafhi Private Hospital'
              controlId='formGroupConsultantIn'
              className='col-md-4'
              
              />
              
            {/* <div className='col-md-4'> */}
            <Field
              name='category'
              label='Category'
              component={this.renderHelperCategory}
              type='select'
              as='select'
              required='required'
              placeholder='Category'
              controlId='formGroupCategory'
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
            {/* <div className='col-md-4'> */}
            <Field
              name='experience'
              label='Years Of Experience'
              component={this.renderHelper}
              type='text'
              required='required'
              placeholder='e.g 6 years'
              controlId='formGroupExperience'
              className='col-md-4'
              
              />
              {/* <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Control as='select' placeholder='Gender'>
                  <option>Male </option>

                  <option>Female</option>
                </Form.Control>
              </Form.Group>
            </div> */}
{/* 
            <Field
              name='mobileNumber'
              label='Mobile Number'
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
              
              /> */}
             
          </Form.Row>
{/* 
          <Form.Row>
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
            <Field
              name='password'
              label='Password'
              component={this.renderHelper}
              type='password'
              required='required'
              placeholder='Password'
              controlId='formGroupPassword'
              className='col-md-4'
              
              />
            

            <Field
              name='confirmPassword'
              label='Password'
              component={this.renderHelper}
              type='password'
              required='required'
              placeholder='Confirm Password'
              controlId='formGroupConfirmPassword'
              className='col-md-4'
              
              />
            
          </Form.Row> */}

          <Form.Row>
            {/* <div className='col-md-6'> */}
            {/* <Field
              name='copyOfId'
              component={CopyOfIdUploader}
           
              
              /> */}
              {/* <Form.Group>
                <Form.Label>Copy of ID</Form.Label>
                <Form.Control type='file' placeholder='Copy of ID' />
              </Form.Group>
            </div> */}

            {/* <div className='col-md-6'> */}
            {/* <Field
              name='copyOfCertificateOfPractice'
              component={DoctorCertUpload}
             
              
              /> */}
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
  form: 'doctorSignUpForm',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  validate,
})(connect(null, { doctorSignUpActionCreator })(DoctorBiography));
