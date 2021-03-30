const express = require('express')

const IndividualUser = require('../models/individualModel');
const authenticationMiddleWare = require('../authentication/authMiddlewareJWT');

const router = new express.Router()

//Route for logging Users Out of the Application
router.post('/user/logout', authenticationMiddleWare, async (req, res) => {
  console.log('req gyuguguyguyhgugg1');
  try {
    req.user.tokens = [];
    user = req.user;
    const usery = await user.save();
    res.status(200).send({ usery, message: 'Logged Out successfully!' });
  } catch (e) {
    res.status(500).send({ e });
  }
});


//Route for logging Users in the Application
router.post('/user/login', async (req, res) => {
    console.log('body IN LOGIN ', req.body);
  
    const email = req.body.email;
    const password = req.body.password;
  
    try {
      const user = await IndividualUser.findByCredentials(email, password);
      //console.log('hhjllhh ', user)
  
      const token = await user.generateAuthenticationToken();
      // console.log('hhjllhh ', token)
  
      res.status(200).send(token);
    } catch (e) {
      throw new Error('Could not Log you IN Unsuccessful Authentication');
  
      console.log('Could not Log you IN Unsuccessful Authentication', e);
  
      res.status(500).send(e);
    }
  });

  module.exports=router
