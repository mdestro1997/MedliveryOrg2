import axios from 'axios'
import {updatePatientAppointmentStatusSuccessful,updatePatientAppointmentStatusUnsuccessful} from '../typeAuth'


export  async function updatePatientAppointmentStatusActionCreator(values,id,cb){
  

   

    //const contactUpload = values.contactUpload
// let formData = new FormData()
//const formData = new FormData();

//  delete values.token;

// formData.append('value',JSON.stringify(values))
//console.log('fomrdata ',formData)
// const obj = {values,formData};

// formData.append('value',values)

// console.log('fomrdata ',formData)

     try{

        axios.defaults.headers={

            'Authorization':`Bearer ${values.token}`
        }  
    console.log('reschedule Details', values)


    const request = await axios.patch(`http://localhost:5000/doctorUpdatingPatientAppointmentStatus/${id}`)

//     const request = await axios.post('https://glacial-wave-31511.herokuapp.com/user/login',values)
    // console.log('token is', request.data.token)
    console.log('tokencc is', request)

    //  localStorage.setItem('token',request.data.token)
    cb();
//     localStorage.setItem('token',request.data)

   return{  

        type:updatePatientAppointmentStatusSuccessful,
        payload:request.data
   }
   

}catch(e){
     


      return{
             type:updatePatientAppointmentStatusUnsuccessful,
             payload: 'Updating Patient Appointment Unsuccessful'
      }
}

}