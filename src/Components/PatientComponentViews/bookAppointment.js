/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Form, Button,Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm,formValueSelector } from 'redux-form';
import { load } from '../../actions/PatientActionCreators/getAllDoctors';
import {bookingsActionCreator} from '../../actions/PatientActionCreators/bookingsActionCreator'
import _ from 'lodash';
import DoctorRefferalNote from '../DoctorComponentViews/doctorsRefferalDocument'

const data = {
  // used to populate "account" reducer when "Load" is clicked
  firstName: 'Jane',
  email: 'mathubar@stanbic.com',
};
var min =''

class BookAppointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
       refferals: this.props.refferals
    }
 }

  componentDidMount() {
    var anotherHolding = JSON.stringify(this.props.initialValues);
    // console.log('holding' + holding)
    console.log('anotherHolding' + anotherHolding);

    // console.log('holding' + this.props.dataFill)
    console.log('anotherHolding' + this.props.initialValues);

    // console.log('holding' + JSON.parse(holding))
    console.log('anotherHolding' + JSON.parse(anotherHolding));

    //   const dataa = {  // used to populate "account" reducer when "Load" is clicked
    //   firstName: 'Jane',
    //   email:'mathubar@stanbic.com',

    // }

    // this.props.load(dataa)
   min= this.renderDateHelper()
   console.log('ming ',min)
   console.log('componentDid',this.props)
  }

  componentDidUpdate(){
    console.log(this.props)
    console.log('didUpdate',this.props.refferals)

  }


  onSubmit(values){
    values.token = localStorage.getItem('token');
    console.log('values ', values)
    values.doctorsId=this.props.location.state.fromSelectedDoctor.owner._id
    values.doctorSpeciality =this.props.location.state.fromSelectedDoctor.speciality
    values.patientId=this.props.initialValues._id
  this.props.bookingsActionCreator(values,()=>{

      this.props.history.push('/getPatientAppointments');
  })

} 

onRrefferalsChange =(e) =>{

  console.log('oncChange', e)
}

renderDoctorRefferalNote= (field)=>{
  // <MyStrangeInput 
  // currentValue={{val: field.input.value}}
  // thingsChanged={param => field.input.onChange(param.val)}/>
  // refferals={{val: field.input.value}}
  //   thingsChanged={param => field.input.onChange(param.val)}
  console.log('oncChjjjjjange', this.state.refferals)

    return <DoctorRefferalNote refferals={this.state.refferals} />

  
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
  optionOne,
  optionTwo,
  disabled,
  hidden
}) => {
  console.log('meta ', meta);

  return (
    <div 
    hidden={hidden}
    className={className}
    >
      <Form.Group controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          required
          {...input}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          as={as}
          
          //  max={maxDate}
        >
          <option>{optionOne} </option>

<option>{optionTwo}</option>
        </Form.Control>

        {this.renderError(meta)}
      </Form.Group>
    </div>
  );
};

  renderHelper = ({
    input,
    type,
    disabled,
    label,
    controlId,
    className,
    placeholder,
    required,
    accept,
    meta,
    error,
    min,
    value
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
            disabled={disabled}
            min={min}
            value={value}
          />
        </Form.Group>
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;
   console.log('render',this.props)
   console.log('render',this.props.refferals)
this.setState={refferals:this.props.refferals}

    return (
      <div className='container mt-5 mb-5'>
        <h3 className='text-center text-secondary mb-5'>Book Appointment</h3>

        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Form.Row>
            <Field
              name='Patientfirstname'
              label='Patient Name'
              component={this.renderHelper}
              type='text'
              disabled='disabled'
              required='required'
              value={this.props.initialValues.firstname}
              placeholder={this.props.initialValues.firstname}
              controlId='formGroupFirstname'
              className='col-md-4'
            />
            <Field
              name='Patientlastname'
              label='Patient Lastname'
              component={this.renderHelper}
              type='text'
              disabled='disabled'
              required='required'
              value={this.props.initialValues.lastname}
              placeholder={this.props.initialValues.lastname}
              controlId='formGroupFirstname'
              className='col-md-4'
            />
            {/* <div className='col-md-6'>
      
               <Form.Group>
                 <Form.Label>Patient Name</Form.Label>
                   <Form.Control 
                   type='text'
                   placeholder='Patient Name'
                   />
                 
               </Form.Group>
               </div> */}
            <Field
              name='Patientemail'
              label='Patient Email'
              component={this.renderHelper}
              disabled='disabled'
              type='text'
              required='required'
              value={this.props.initialValues.email}
              placeholder={this.props.initialValues.email}
              controlId='formGroupPatientEmail'
              className='col-md-4'
            />
          </Form.Row>

          <Form.Row>
            {/* <div className='col-md-4'>
              <Form.Group>
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

            <Field
              name='department'
              label='Doctor Category'
              component={this.renderHelper}
              disabled='disabled'
              type='text'
              value={this.props.location.state.fromSelectedDoctor.speciality}
              required='required'
              placeholder={this.props.location.state.fromSelectedDoctor.speciality}
              controlId='formGroupDoctorCategory'
              className='col-md-4'
            />

            <Field
              name='doctorname'
              label="Doctor's Name"
              component={this.renderHelper}
              disabled='disabled'
              type='text'
              required='required'
              value={this.props.location.state.fromSelectedDoctor.owner.lastname}
              placeholder={this.props.location.state.fromSelectedDoctor.owner.firstname + ' '+ this.props.location.state.fromSelectedDoctor.owner.lastname}
              controlId='formGroupDoctorName'
              className='col-md-4'
            />
            {/* <div className='col-md-4'>
              <Form.Group>
                <Form.Label>Doctor</Form.Label>
                <Form.Control as='select' placeholder='Select Doctor'>
                  <option>Select Doctor</option>

                  <option>Dr Mathuba</option>
                  <option>Dr Mmopiemang</option>
                  <option>Dr Gure</option>
                  <option>Dr Mosepele</option>
                  <option>Dr Kang</option>
                </Form.Control>
              </Form.Group>
            </div> */}

            <div className='col-md-4'>
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
            </div>
          </Form.Row>
          <Form.Row>
            {/* <div className='col-md-6'>
              <Form.Group>
                <Form.Label>Appointment Date</Form.Label> */}
                <Field
                name='AppointmentDate'
              label='Appointment Date'
              type='date'
              min={min}
              component={this.renderHelper}
              required='required'
            
              controlId='formGroupAppointmentDate'
              className='col-md-6'
                 />
              {/* </Form.Group>
            </div> */}

            {/* <div className='col-md-6'> */}
              {/* <Form.Group>
                <Form.Label>Available Appointment Time</Form.Label> */}
                <Field
                name='AppointmentTime'
              label='Appointment Time'
              type='time'
              // min={min}
              component={this.renderHelper}
              required='required'
              placeholder='Appointment Time'
              controlId='formGroupAppointmentTime'
              className='col-md-6'
                />
              {/* </Form.Group> */}
            {/* </div> */}

            {/* <div className='col-md-6'>
      
               <Form.Group>
                 <Form.Label>Patient Email</Form.Label>
                   <Form.Control 
                   type='text'
                   placeholder='Patient Email'
                   />
                 
               </Form.Group>
               </div> */}
          </Form.Row>
          <Form.Row>
          <Field
              name='gender'
              label='Patient Gender'
              component={this.renderHelperGender}
              type='select'
              as='select'
              disabled='disabled'
              required='required'
              placeholder='Have Refferal'
              optionOne='Male'
              optionTwo='Female'
              controlId='formGroupGender'
              className='col-md-4'
              
              /> 
                 <Field
              name='refferals'
              label='Have Refferal?'
              component={this.renderHelperGender}
              type='select'
              as='select'
              required='required'
              placeholder='Have Refferal'
              optionOne='Yes'
              optionTwo='No'
              controlId='formGroupGender'
              // value={this.props.refferals}
              className='col-md-4'
              // onChange={(e)=>this.onRrefferalsChange(e)}
              
              />

              <Field
              name='medicalAid'
              label='Have Medical Aid?'
              component={this.renderHelperGender}
              type='select'
              as='select'
              // hidden={true}
              required='required'
              placeholder='Have Medical Aid?'
              optionOne='Yes'
              optionTwo='No'
              controlId='formGroupGender'
              className='col-md-4'
              // hidden='hidden'
              
              />
          </Form.Row>

          {/* <Form.Row>
          <Field
              name='attachRefferalDocument'
              component={this.renderDoctorRefferalNote}
              // value={this.props.refferals}
              // onChange={value =>{value=this.props.refferals}}
             
              
              />
                  <Field
              name='refferedBy'
              label='Name of Doctor Who(Did The Refferal)'
              component={this.renderHelperGender}
              type='select'
              as='select'
              required='required'
              placeholder='Name of Doctor(Did The Refferal)'
              optionOne='Yes'
              optionTwo='No'
              controlId='formGroupGender'
              className='col-md-6 mt-3'
              
              />
          </Form.Row> */}
          


          <Form.Row>
            <Button
              className='container col-md-4 mt-5'
              type='submit'
              variant='success'
            >
              {' '}
              Book Now{' '}
            </Button>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

// function mapStateToProps(state, props) {
//   return {
//     initialValues: state.getAllDoctorsProfiles.doctorsProfiles,
//     // dataFill:state.getAllDoctorsProfiles.doctorsProfiles
//   };
// }

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
BookAppointment = reduxForm({
  form: 'initializeFromState',
  enableReinitialize: true,
})(BookAppointment);


const selector = formValueSelector('initializeFromState') // <-- same as form name

// now set initialValues using data from your store state
BookAppointment = connect(
  (state) => ({
    initialValues: _.merge(state.authReducer.authenticated, _.pick(state.getAllDoctorsProfiles.doctorsProfiles,'department','owner')),
     refferals :selector(state, 'refferals'),
     medicalAid : selector(state, 'medicalAid')

  }),
  { load,bookingsActionCreator }
)(BookAppointment);

export default BookAppointment;

// export default reduxForm({
//   form: 'initializeFromState',
//   enableReinitialize: true
// })(connect(mapStateToProps,{ load }
// )(BookAppointment));


