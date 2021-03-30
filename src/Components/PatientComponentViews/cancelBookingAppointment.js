/* eslint-disable no-unused-vars */
import React,{Component} from 'react'
import {Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import GetPatientBookingsAppointments from './getPatientBookingsAppointments'
import {cancelPatientAppointmentActionCreator} from '../../actions/PatientActionCreators/cancelPatientAppointmentActionCreator'
import _ from 'lodash'
import Modal from '../Modal'

class CancelBookingAppointment extends Component {
    

    onAgree = () =>{

        console.log('You Agreed,yeiiii!!!',this.props.match.params.id)
        const id =this.props.match.params.id;
        console.log('You Agreed,yeiiii!!!',id)
      
          this.props.cancelPatientAppointmentActionCreator(id,() =>{
      
              this.props.history.push('/getPatientAppointments')
      
          })
       }
      
       onDisagree = () =>{
          console.log('am going back Now')
          this.props.history.push('/getPatientAppointments')
      
       }

    render(){
        return (
            <Container>
            <div>
            <GetPatientBookingsAppointments/>
                {/* <h3>Hello Little Bird</h3> */}
                <Modal
                 onDisagree={this.onDisagree}
                 onAgree={this.onAgree}
                 title="Cancel Appointment"
                 body="Are you sure you want to Cancel this Appointment?"
                 buttonOne='Back'
                 buttonTwo='Delete'
                 />


            </div>
            </Container>
        )

    }
   
}

export default (connect(null,{cancelPatientAppointmentActionCreator})(CancelBookingAppointment))
