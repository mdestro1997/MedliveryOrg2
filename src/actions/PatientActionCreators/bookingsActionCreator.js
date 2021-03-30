import axios from 'axios'
import {BookingSuccess,BookingError} from '../typeAuth'


export  async function bookingsActionCreator(values,cb){
  
     try{

        axios.defaults.headers={

            'Authorization':`Bearer ${values.token}`
        }        
    console.log('Booking Details', values)


    const request = await axios.post('http://localhost:5000/patientBookings',values)

//     const request = await axios.post('https://glacial-wave-31511.herokuapp.com/user/login',values)
    console.log('token is', request.data.token)
    console.log('tokencc is', request.data)

     localStorage.setItem('token',request.data.token)
    cb();
//     localStorage.setItem('token',request.data)

   return{  

        type:BookingSuccess,
        payload:request.data
   }
   

}catch(e){
     


      return{
             type:BookingError,
             payload: 'Unsuccessful Booking'
      }
}

}