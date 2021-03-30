import axios from 'axios'
import {AuthSuccess,AuthError} from '../typeAuth'


export  async function loginActionCreator(values,cb){
  
     try{

            
    console.log('Values Submitted', values)
    const request = await axios.post('http://localhost:5000/user/login',values)

//     const request = await axios.post('https://glacial-wave-31511.herokuapp.com/user/login',values)
    console.log('token is', request.data.token)
    console.log('tokencc is', request.data)

     localStorage.setItem('token',request.data.token)
    cb();
//     localStorage.setItem('token',request.data)

   return{  

        type:AuthSuccess,
        payload:request.data
   }
   

}catch(e){
     


      return{
             type:AuthError,
             payload: 'Unsuccessful Login'
      }
}

}