import axios from 'axios'
import {FoundSearch,SearchNotFount} from '../typeAuth'


export  async function searchAndUpdateActionCreator(values){
  
     try{

            
    console.log('Values Submitted', values)
    const email= values.email
    
    const request = await axios.get(`http://localhost:5000/searchAndUpdate?email=${email}`)
//     const request = await axios.get(`https://glacial-wave-31511.herokuapp.com/searchAndUpdate?email=${email}`)
    console.log('user gottt', request.data)
     localStorage.setItem('token',request.data)
    // cb();
//     localStorage.setItem('token',request.data)

   return{  
    

        type:FoundSearch,
        payload:request.data
   }
   

}catch(e){
     


      return{
             type:SearchNotFount,
             payload: 'Unsuccessful Login'
      }
}

}