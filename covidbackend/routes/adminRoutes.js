const express = require('express')
const multer = require('multer')

const IndividualUser = require('../models/individualModel');


const router = new express.Router()

//SignUp Patient
const uploadCopyOfId = multer({
    limits: {
      fieldSize: '1000000',
    }
  });
const fileUploads = uploadCopyOfId.fields([
  { name: 'copyOfId', maxCount: 1 },
  { name: 'copyOfCertificateOfPractice', maxCount: 1 },
]);

  
  router.post(
    '/createNewAdminRecord',
    fileUploads,
    async (req, res) => {
        console.log('signU ', req.body);
        console.log('signUrew ', req.files['copyOfId'][0]);
        console.log('signUe ', req.files['copyOfCertificateOfPractice'][0]);
      
        const userCategory = 'A';
        const signUpFormData = JSON.parse(req.body.value[0]);
        signUpFormData.copyOfId = req.files['copyOfId'][0].buffer;
        signUpFormData.copyOfCertificateOfPractice =
          req.files['copyOfCertificateOfPractice'][0].buffer;
        delete signUpFormData.confirmPassword;
        signUpFormData.userCategory = userCategory;
      //console.log('signUpFormData ',signUpFormData);
  
      try {
        // console.log('tooookeeeeen ' );
  
        const newAdminUser = new IndividualUser(signUpFormData);
        // console.log('tooookeeeeen ');
  
        const token = await newAdminUser.generateAuthenticationToken();
        //  console.log('tooookeeeeen ' ,token);
        const user = await newAdminUser.save();
  
        res.status(200).send(token);
      } catch (e) {
        res.status(400).send('Could not Sign INDIVIDUAL UP');
      }
    }
  );

//   async

  router.get('/searchAndUpdate', async (req,res) =>{

    console.log('bwksks',req.query)
  const {email} =  req.query
 

      try{

          const getSpecificUser = await IndividualUser.findOne({email})
        //   console.log('ZOOOOSSSSKKKKIIIIIEEEE!!!',getSpecificUser)

          res.status(200).send(getSpecificUser)

      }catch(e){

        console.log(e)
      }

  })



module.exports=router