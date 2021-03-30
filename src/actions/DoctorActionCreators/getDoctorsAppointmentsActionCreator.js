import axios from 'axios'
import {DoctorAppointmentsSuccess,DoctorAppointmentsError} from '../typeAuth'


export  async function getDoctorAppointmentsActionCreator(values,cb){
  
     try{

        axios.defaults.headers={

            'Authorization':`Bearer ${values.token}`
        }        
    console.log('Patient Details', values)


    const request = await axios.get('http://localhost:5000/getDoctorBookingsAppointments')

//     const request = await axios.post('https://glacial-wave-31511.herokuapp.com/user/login',values)
    console.log('token is', request.data.token)
    console.log('tokencc is', request.data)

     localStorage.setItem('token',request.data.token)
    cb();
//     localStorage.setItem('token',request.data)

   return{  

        type:DoctorAppointmentsSuccess,
        payload:request.data
   }
   

}catch(e){
     


      return{
             type:DoctorAppointmentsError,
             payload: 'Unsuccessful Appointments Retrival'
      }
}

}