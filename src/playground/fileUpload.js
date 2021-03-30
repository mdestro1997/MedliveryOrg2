import axios from 'axios'

export const CHECKING = 'checking_form_data_on_app_server'


export async function checkingIfItWorks(values,callback){

    //const contactUpload = values.contactUpload
    let formData = new FormData()
    //const formData = new FormData();
    //console.log('fomrdatapa ',values)

    formData.append('contactUpload',values.contactUpload)
    console.log('fomrdatapareeerrr ',JSON.stringify(values))

    formData.append('value',JSON.stringify(values))
    console.log('fomrdata ',formData)
   // const obj = {values,formData};
    formData.append('value',values)
    axios.defaults.headers = {
        
  //data: values,

            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          
    }

    try{

     console.log('hello from message action creator');
   
     const request = await axios.post('http://localhost:5000/individualSignUpInfo',formData,{values} );
     console.log('Request ',request)

     return{

         type:CHECKING,
         payload:request
     }


    }catch(e){

         console.log('error',e)
    }
}