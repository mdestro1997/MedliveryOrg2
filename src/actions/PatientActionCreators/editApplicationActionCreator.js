import axios from 'axios'
import {EDITAPPLICATION} from '../typeAuth'


export async function editApplicationActionCreator(values,id,cb){
  const token = localStorage.getItem('token')
  axios.defaults.headers = {
    
    //data: values,
     
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          
    }

//const contactUpload = values.contactUpload
let formData = new FormData()
//const formData = new FormData();
console.log('fomrdatapa ',values.copyOfMedicalHistory)

formData.append('copyOfMedicalHistory',values.copyOfMedicalHistory)
console.log('fomrdatar ',formData);
console.log('fomrdatapareeerrr ',JSON.stringify(values))
// delete values.copyOfMedicalHistory;

formData.append('value',JSON.stringify(values))
//console.log('fomrdata ',formData)
// const obj = {values,formData};

formData.append('value',values)





    try{
 
        const request = await axios.patch(`http://localhost:5000/editUserApplication/${id}`,formData)

        // const request = await axios.patch(`https://glacial-wave-31511.herokuapp.com/editUserApplication/${id}`,formData)

        console.log('requestFROMEDIT',request)
        //console.log('requestFROMEDITing',request.data)

        cb();
        return{
   
             type:EDITAPPLICATION,
             payload:request
        }

    }catch(e){

           console.log(e)
    }
}