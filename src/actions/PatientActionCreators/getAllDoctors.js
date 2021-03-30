import axios from 'axios';
import { GetAllDoctors, GetAllDoctorsError } from '../typeAuth';

export async function getAllDoctorsActionCreator(values) {
  try {
    console.log('Values Submitted', values);

    axios.defaults.headers = {
      Authorization: `Bearer ${values}`,
    };
    const request = await axios.get(
      'http://localhost:5000/getAllDoctors'
      
    );
       
    // const request = await axios.get(
    //   'https://glacial-wave-31511.herokuapp.com/getAllDoctors',
    //   values
    // );
    console.log('token is', request.data);
    //  localStorage.setItem('token',request.data)
    // cb();
    //     localStorage.setItem('token',request.data)

    return {
      type: GetAllDoctors,
      payload: request.data,
    };
  } catch (e) {
    //   return{
    //          type:AuthError,
    //          payload: 'Unsuccessful Login'
    //   }
  }
}
    

export async function load(values){
    console.log('token is', values);

    return {
        type: GetAllDoctors, 
        payload:values
    }
}
