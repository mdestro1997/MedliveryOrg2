/* eslint-disable react/jsx-no-target-blank */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getPatientAppointmentsActionCreator} from '../../actions/PatientActionCreators/getPatientAppointmentsActionCreator'
import {Table,Button,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import _ from 'lodash';


class GetPatientBookingsAppointments extends Component {

    componentDidMount(){
        console.log('authenticatedUser',this.props.authenticatedUser)
        const values={};
        values.token = this.props.authenticatedUser.token
        values._id = this.props.authenticatedUser._id
        console.log('valuesTobe',values)
        this.props.getPatientAppointmentsActionCreator(values,() =>{

        })
      
    }

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
                <th>Patient Name</th>
                <th>Doctor</th>
                <th>Doctor Speciality</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Appointment Status</th>
                <th>Reschedule Appointment</th>
                <th>Cancel Appointment</th>
                <th>Zoom Appointment Link</th>


              </tr>
            </thead>

            <tbody>
              {_.map(this.props.PatientAppointmentsBookings, (appointment) => {
                return (
                  <tr key={appointment._id}>
                    <td>
                      {appointment.Patientfirstname.concat(
                        ' ',
                        appointment.Patientlastname
                      )}
                    </td>
                    <td>{appointment.doctorFirstName.concat(
                        ' ',
                        appointment.doctorLastName
                      )}</td>
                    <td>{appointment.doctorSpeciality}</td>
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
                        as={Link}
                        to={`/reschedulePatientAppointment/${appointment._id}`}
                        variant='primary'
                      >
                        Reschedule
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
        PatientAppointmentsBookings:state.PatientAppointmentsBookings.PatientAppointments
    }

}


export default (connect(mapStateToProps, { getPatientAppointmentsActionCreator })(GetPatientBookingsAppointments))

