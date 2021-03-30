/* eslint-disable no-unused-vars */
import { AuthSuccess} from '../typeAuth'
import axios from 'axios'

export async function signOutActionCreator(){
   
    // const token = localStorage.getItem('token')
    // axios.defaults.headers = {   
    
    //     //data: values,
         
    //             'Accept': 'application/json',
            
    //             'Authorization': `Bearer ${token}`
              
    //     }

 try{
    localStorage.removeItem('token');

    // await axios.post('http://localhost:5000/user/logout');

   //console('requieenl',request)
    
    return{
        type:AuthSuccess
        } 

 }catch(e){

    console.log(e)
 }       

    

    
     
}