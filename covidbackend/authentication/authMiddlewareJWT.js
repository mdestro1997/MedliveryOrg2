const jwt = require('jsonwebtoken');
const particularUser=require('../models/individualModel')

const authMiddlewareJWT = async (req,res,next) =>{

    console.log('require bppdud ',req);

    try{

          const token = req.header('Authorization').replace('Bearer ','');
         console.log('Tokenee : ', token);

          //check to use _id to verify like you did in the user model
          const decoded = jwt.verify(token,'ThisIsASecretKEY');
          console.log('Decoded ', decoded)
         
           const user = await particularUser.findOne({ _id: decoded._id, 'tokens.token':token })
           console.log('User found on auth',user)
       if(!user){

          throw new Error();
       }
       //delete user.password;
             
      // req.token = token;
       req.user = user
       req.token = token      
       next();

    }catch(e){

        res.status(401).send('Please authenticate')
    }
    

}

module.exports = authMiddlewareJWT;