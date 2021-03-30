import axios from 'axios'
import {DELETE_APPLICATION} from '../typeAuth'



export async function deleteApplicationActionCreator(id,cb){
const token = localStorage.getItem('token')
console.log('indkdhlueue action ',id)
   axios.defaults.headers={

        'Authorization': `Bearer ${token}`
   }

    try{
        const request = await axios.delete(`http://localhost:5000/deleteUserApplication/${id}`)

    //    const request = await axios.delete(`https://glacial-wave-31511.herokuapp.com/deleteUserApplication/${id}`)
       cb();

       return{

            type:DELETE_APPLICATION,
            payload:request
       
        }

    }catch(e){
    

    }


}
