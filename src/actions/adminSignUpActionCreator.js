import axios from 'axios'
//import { request } from 'http';
import {AuthSuccess,AuthError} from './typeAuth'


         

export  async function AdminSignUpActionCreator(values,cb){

//const contactUpload = values.contactUpload
let formData = new FormData()
//const formData = new FormData();
console.log('fomrdatapa ',values.copyOfId)

formData.append('copyOfId',values.copyOfId)
formData.append('copyOfCertificateOfPractice',values.copyOfCertificateOfPractice)
console.log('fomrdatar ',formData);
console.log('fomrdatapareeerrr ',JSON.stringify(values))

formData.append('value',JSON.stringify(values))
//console.log('fomrdata ',formData)
// const obj = {values,formData};
formData.append('value',values)

axios.defaults.headers = {
    
//data: values,

        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      
}





    try{

    console.log('SignUp Action Creator ', values)
    const request = await axios.post('http://localhost:5000/createNewAdminRecord',formData);

    // const request = await axios.post('https://glacial-wave-31511.herokuapp.com/createNewAdminRecord',formData);
    console.log('token is', request.data)
    localStorage.setItem('token',request.data)
      cb();
    return{

        type:AuthSuccess,
        payload:request.data
    }
 
}catch(e){

    return{

        type:AuthError,
        payload:'Oops! Something Went Wrong'
    }
}
}