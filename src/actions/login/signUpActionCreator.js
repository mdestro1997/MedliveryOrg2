/* eslint-disable no-unused-vars */
import axios from 'axios'
import moment from 'moment';

//import { request } from 'http';
import {AuthSuccess,AuthError} from '../typeAuth'


         

export  async function signUpActionCreator(values,cb){

//const contactUpload = values.contactUpload
let formData = new FormData()
//const formData = new FormData();
console.log('fomrdatapa ',values.copyOfId)

formData.append('copyOfId',values.copyOfId)
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
    const request = await axios.post('http://localhost:5000/individualSignUpInfo',formData);
    // const request = await axios.post('https://glacial-wave-31511.herokuapp.com/individualSignUpInfo',formData);
    console.log('token is', request.data)

const date = new Date(request.data.dateOfBirth);
// const t = date.getDay();
console.log('DATING ND', date.getDay())

var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

const formattedDate = moment(date).format('YYYY-MM-DD'); //04-05-2017
var n = weekday[date.getDay()];

console.log('DATING ND', n)

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