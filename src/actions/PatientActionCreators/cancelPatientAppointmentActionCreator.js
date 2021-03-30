import axios from 'axios'
import {AppointmentCancellationSuccessful,AppointmentCancellationError} from '../typeAuth'


export  async function cancelPatientAppointmentActionCreator(values,cb){
  
     try{

        axios.defaults.headers={

            'Authorization':`Bearer ${values.token}`
        }        
    console.log('Cancellation Details', values)


    const request = await axios.delete(`http://localhost:5000/patientAppointmentCancellation/${values.id}`)

//     const request = await axios.post('https://glacial-wave-31511.herokuapp.com/user/login',values)
    console.log('token is', request.data.token)
    console.log('tokencc is', request.data)

     localStorage.setItem('token',request.data.token)
    cb();
//     localStorage.setItem('token',request.data)

   return{  

        type:AppointmentCancellationSuccessful,
        payload:request.data
   }
   

}catch(e){
     


      return{
             type:AppointmentCancellationError,
             payload: 'Unsuccessful Appointment Cancellation'
      }
}

}