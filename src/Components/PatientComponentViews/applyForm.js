/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { Container, Button, Form, Col, Alert } from 'react-bootstrap';
import FieldInputUpload from '../uploaderMed';
import validator from 'validator';
import bsCustomFileInput from 'bs-custom-file-input';

class ApplyForm extends Component {
  componentDidMount() {
    bsCustomFileInput.init();
  }

  renderTextArea = ({
    input,
    type,
    label,
    controlId,
    placeholder,
    required,
    rows,
    cols,
    accept,
    meta,
  }) => {
    return (
      <div>
        
            <Form.Group  as={Col} controlId={controlId}>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                {...input}
                as={type}
                rows={rows}
                cols={cols}
                placeholder={placeholder}
                disabled={this.props.disabled}
                accept={accept}
                required
              />

              {this.renderError(meta)}
            </Form.Group>
          
      </div>
    );
  };

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
    placeholder,
    required,
    accept,
    meta,
    error,
    className,
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

  onSubmit = (formValues) => {
    // formValues.token = localStorage.getItem('token');
    //     console.log(formValues);
    //     console.log('localStorage ', localStorage.getItem('token'))

    this.props.onSubmit(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Container>
          <Form
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
            encType='multipart/form-data'
          >
            <br />
            <Form.Row>
              <Field
                name='Address'
                type='text'
                component={this.renderHelper}
                label='Name'
                placeholder='Name'
                className='col-md-6'
              />
                 <Field
                name='Address'
                type='text'
                component={this.renderHelper}
                label='Surname'
                placeholder='Surname'
                className='col-md-6'
              />
            </Form.Row>
          <Form.Row>
          <Field
                name='Address'
                type='text'
                component={this.renderHelper}
                label='Name Of Medication'
                placeholder='Name Of Medication'
                className='col-md-6'
              />
          <Field
                name='nearestMedicalFacility'
                type='text'
                component={this.renderHelper}
                label='Nearest Clinic/Hospital'
                placeholder='Nearest Clinic/Hospital'
                className='col-md-6'
              />
             
          </Form.Row>
          <br />
            <Form.Row>
            <Field 

            name='copyOfMedicalHistory' component={FieldInputUpload} />

            
            </Form.Row>
            <br />
            <Form.Row>
            <Field
                name='briefMedicalHistory'
                type='textarea'
                placeholder='Tell us more about your Past and Present Medical History'
                label='Brief Medical History'
                rows='8'
                cols='70'
                component={this.renderTextArea}
               
              />              <br />
            </Form.Row>
            <br />
            <div>
              <Button
                className='mr-3'
                type='submit'
                disabled={this.props.disabled}
                variant={this.props.variant}
              >
                {' '}
                {this.props.message}
              </Button>
              <Button
                as={Link}
                to={this.props.to}
                type='submit'
                variant={this.props.variant1}
              >
                {' '}
                {this.props.message1}
              </Button>
            </div>

            <br />
            <br />
          </Form>
        </Container>
       
      </div>
    );
  }
}

function validate(values) {
  const error = {};

  if (!values.nearestMedicalFacility) {
    error.nearestMedicalFacility = 'Field is Required';
  } else if (values.nearestMedicalFacility) {
    // if(!validator.isAlpha(values.nearestMedicalFacility)){
    //     error.nearestMedicalFacility="Name Cannot Contain numbers,symbols or special Characters"
    // }
  }
  if (!values.briefMedicalHistory) {
    error.briefMedicalHistory = 'Field is Required';
  }
  if (!values.copyOfMedicalHistory) {
    error.copyOfMedicalHistory = 'Field is Required';
  }
  if (!values.Address) {
    error.Address = 'Field is Required';
  }

  return error;
}

export default reduxForm({
  form: 'applyForm',
  validate,
})(ApplyForm);
