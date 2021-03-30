/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getDoctorAppointmentsActionCreator} from '../../actions/DoctorActionCreators/getDoctorsAppointmentsActionCreator'
import {updatePatientAppointmentStatusActionCreator} from '../../actions/PatientActionCreators/updatePatientAppointmentStatusActionCreator'
import {Table,Button,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import _ from 'lodash';

var isApproved='';

class GetDoctorsBookingsAppointments extends Component {

    componentDidMount(){
        console.log('authenticatedUser',this.props.authenticatedUser)
        const values={};
        values.token = this.props.authenticatedUser.token
        values._id = this.props.authenticatedUser._id
        console.log('valuesTobe',values)
        this.props.getDoctorAppointmentsActionCreator(values,() =>{

        })
      
    }

    approveAppointment= (appointmentId)=>{
      const id = this.props.match.params.id;
console.log('thsi',this.props)
      const values={}
      // values._id =appointmentId
      // values.AppointmentStatus='Confirmed'
      values.token = this.props.authenticatedUser.token


      this.props.updatePatientAppointmentStatusActionCreator(values,appointmentId,()=>{
        values._id = this.props.authenticatedUser._id

        this.props.getDoctorAppointmentsActionCreator(values,() =>{

        })
      })
            
    }

    isConfirmAppointment = (status) => {
      console.log('status', status);
  
      if (status === 'Pending') {
        isApproved='Approve'
        return false;
      } else if (status === 'Confirmed') {
        isApproved='Approved'

        return true;
      } 
      
    };

    showLinkAddress=(zoomMeetingUrl) =>{

      if(zoomMeetingUrl){

          return  <a href={zoomMeetingUrl} target="_blank">Zoom Click</a>

      }
  }

    statusOfAppointment = (status) => {
        console.log('status', status);
    
        if (status === 'Pending') {
          return 'warning';
        } else if (status === 'Confirmed') {
          return 'success';
        } else {
          return 'info';
        }
      };


    render(){
    console.log('authenticatedUser',this.props.authenticatedUser)
    console.log('PatientAppointmentsBookings',this.props.PatientAppointmentsBookings)

    
        return (
            <Container className=' mt-5'>
            <div>
                <h1 className=' mt-5 mb-4 text-secondary'>Your Appointments!</h1>
                <Table striped bordered hover>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Doctor Speciality</th>
                <th>Patient Name</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Appointment Status</th>
                <th>Confirm Appointment</th>
                <th>Cancel Appointment</th>
                <th>Zoom Appointment Link</th>


              </tr>
            </thead>

            <tbody>
              {_.map(this.props.DoctorsAppointmentsBookings, (appointment) => {
                return (
                  <tr key={appointment._id}>
                
                    <td>{appointment.doctorFirstName.concat(
                        ' ',
                        appointment.doctorLastName
                      )}</td>
                    <td>{appointment.doctorSpeciality}</td>
                    <td>
                      {appointment.Patientfirstname.concat(
                        ' ',
                        appointment.Patientlastname
                      )}
                    </td>
                    <td>{appointment.AppointmentDate}</td>
                    <td>{appointment.AppointmentTime}</td>
                    <td><Button
                        variant={this.statusOfAppointment(
                            appointment.AppointmentStatus
                        )}
                      >
                        {appointment.AppointmentStatus}
                      </Button>
                      </td>

                      <td>
                      <Button
                        // as={Link}
                        // to={`/reschedulePatientAppointment/${appointment._id}`}
                         variant='primary'
                        disabled={this.isConfirmAppointment(appointment.AppointmentStatus)}
                        onClick={()=>{this.approveAppointment(appointment._id)}}
                      >
                                {isApproved}

                      </Button>
                    </td>
                
                    <td>
                      <Button
                        as={Link}
                        to={`/cancelPatientAppointment/${appointment._id}`}
                        variant='danger'
                      >
                        Cancel
                      </Button>
                    </td>

                    <td>
                    {/* <a href={appointment.meeting_url} target="_blank">Zoom Link</a> */}
                    {this.showLinkAddress(appointment.meeting_url)}

                    </td>
           
                  </tr>
                );
              })}
            </tbody> 
          </Table>
            </div>
            </Container>
        )
    }
  
}

function mapStateToProps(state){

    return{
        authenticatedUser:state.authReducer.authenticated,
        DoctorsAppointmentsBookings:state.DoctorsAppointmentsBookings.DoctorsAppointments
     }

}


export default (connect(mapStateToProps, { getDoctorAppointmentsActionCreator,updatePatientAppointmentStatusActionCreator })(GetDoctorsBookingsAppointments))

