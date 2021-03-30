import axios from 'axios'
import {RescheduledAppointmentSuccessfully,ErrorReschedulingAppointment} from '../typeAuth'


export  async function reschedulePatientAppointmentActionCreator(values,cb){
  
     try{

        axios.defaults.headers={

            'Authorization':`Bearer ${values.token}`
        }        
    console.log('reschedule Details', values)


    const request = await axios.patch(`http://localhost:5000/rescheduleAppointment/${values.id}`)

//     const request = await axios.post('https://glacial-wave-31511.herokuapp.com/user/login',values)
    console.log('token is', request.data.token)
    console.log('tokencc is', request.data)

     localStorage.setItem('token',request.data.token)
    cb();
//     localStorage.setItem('token',request.data)

   return{  

        type:RescheduledAppointmentSuccessfully,
        payload:request.data
   }
   

}catch(e){
     


      return{
             type:ErrorReschedulingAppointment,
             payload: 'Rescheduling Appointment Unsuccessful'
      }
}

}