import axios from 'axios';
//import { request } from 'http';
import { SuccessfulApplication,ErrorApplication } from '../typeAuth';

export async function applyFormActionCreator(values, cb) {
  const token = localStorage.getItem('token');
  console.log('wE ARE HERE ',values)
  console.log('wE ARE HERE ',token)

  // const formData = new FormData();
  // formData.append('copyOfMedicalHistory', values.copyOfMedicalHistory);

  axios.defaults.headers = {
    //data: values,

    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  };

  const uploadConfig = await axios.get('http://localhost:5000/api/uploads');


  //for PROD
  // const uploadConfig = await axios.get('https://glacial-wave-31511.herokuapp.com/api/uploads');


  // const resizedUpload = await axios.post('http://localhost:5000/api/resizeUploads',formData);
  // console.log('resized img', resizedUpload.data)
  delete axios.defaults.headers['Authorization'];
console.log('moving on!!')
  await axios.put(uploadConfig.data.url, values.copyOfMedicalHistory, {
    headers: {
      'Content-Type': values.copyOfMedicalHistory.type,
    },
  });

  axios.defaults.headers = {
  //data: values,

  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
  Authorization: `Bearer ${token}`,
};
  delete values.token;
  //const contactUpload = values.contactUpload
  const formData = new FormData();
  console.log('fomrdatapa ', values.copyOfMedicalHistory);

  formData.append('copyOfMedicalHistory', values.copyOfMedicalHistory);
  console.log('fomrdatar ', formData);
  console.log('fomrdatapareeerrr ', JSON.stringify(values));
  // delete values.copyOfMedicalHistory;

  formData.append('value', JSON.stringify(values));
  //console.log('fomrdata ',formData)
  // const obj = {values,formData};

  formData.append('value', values);
  formData.append('imageUrl',uploadConfig.data.key)
  try {
    console.log('SignUp Action Creator ', formData);
    // delete formData.token;

    const request = await axios.post(
      'http://localhost:5000/applyMedForm',
      formData
    );
    //for PROD
    // const request = await axios.post(
    //   'https://glacial-wave-31511.herokuapp.com/applyMedForm',
    //   formData
    // );
    cb();
    return {
      type: SuccessfulApplication,
      payload: request.data,
    };
  } catch (e) {
    return {
      type: ErrorApplication,
      payload: 'Oops! Something Went Wrong',
    };
  }
}
