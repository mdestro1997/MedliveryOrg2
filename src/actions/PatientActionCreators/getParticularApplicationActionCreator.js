import axios from 'axios'
import {GETPARTICULARAPPLICATION} from '../typeAuth'


export async function getParticularApplicationActionCreator(values){
const token = localStorage.getItem('token')
    axios.defaults.headers={

        'Authorization':`Bearer ${token}`
    }

    try{
 
        const request = await axios.get(`http://localhost:5000/getUserApplication/${values.id}`)

        // const request = await axios.get(`https://glacial-wave-31511.herokuapp.com/getUserApplication/${values.id}`)

        console.log('requestFROMEDIT',request)
        console.log('requestFROMEDITing',request.data)

        return{
   
             type:GETPARTICULARAPPLICATION,
             payload:request.data
        }

    }catch(e){

          console.log('ERRRORRR OCCURREDD!!!',e)
    }
}