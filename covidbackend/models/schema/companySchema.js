const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const CompanySchema = mongoose.Schema;

const realCompanySchema = new CompanySchema;({

     companyName:{
         type:String,
         required:true,
         trim:true
     },
     tradeName:{
         type:String,
         required:true,
         trim:true
     },
     registrationNumber:{

     },
     city:{
         type:String,
         required:true,
         trim:true
     },
     companyEmail:{

        type:String,
        required:true,
        trim:true

     },
     websiteURL:{
         type:String,
         required:true,
         trim:true
     },
     companyPhoneNumber:{
         type:Number,
         required:true,
         trim:true
     },
     SMS_CREDIT:{
          type:Number,
          required:true,
          //default
          trim:true

     },
     PACKAGE_SUBCRITPTION:{
         type:String,
         required:true,
         //default:
         trim:true
     },
     ACTIVE:{
         type:Boolean,
         required:true
         //default:
     },

     //Create a sub-document for person(Secretary) who is registaring the company so we capture their information.
     /*
       firstname:{
           type:String,
           required:true,
           trim:true
       },
       lastname:{
            type:String,
           required:true,
           trim:true
       },
       position:{
            type:String,
           required:true,
           trim:true
       },
       emailAddress:{
            type:String,
           required:true,
           trim:true
       },
       mobileNumber:{ 
           type:Number,
           required:true,
           trim:true
        }  

     */

     certificateOfIncorporation:{
         type:Buffer
     },
     directorCopyOfIdORPassport:{
         type:Buffer
     },
     companyTermsAndConditions:{
         type:Buffer
     }

})

realCompanySchema.methods.generateAuthenticationToken = async function(){

     const particularCompany = this;

     try{

      const token = await jwt.sign( {_id:'toBeReplacedWithActualID'}, 'thisIsTheSecretAndItwillbeHere');

      if(token){

          particularCompany.token =token;
          await particularCompany.save();
          return particularCompany;

      }else{

           throw new Error('UNABLE TO GENERATE AUTHENTICATION TOKEN');
      }
    }catch(e){

        console.log('ERROR OCCURED');
        return e;
    }
    
}

realCompanySchema.statics.findByCredentials = (email,password) =>{

    try{

        //Company as in the model, hence we are saying look through the whole database and find this entry!
        const particularCompany = await Company.findOne({email});

        if(particularCompany){

            const isMatch = await bcrypt.compare(password,particularCompany.password);
            
            if(isMatch){

                return particularCompany;
            }else{

                throw new Error('Unable to authenticate');
            }
        }else{

            throw new Error('Unable to authenticate');
        }

    }catch(e){
             console.log('ERROR OCCURED');
             return e;
    }
}

realCompanySchema.pre('save',async function(next){

    const particularCompany = this;

    try{
          if(particularCompany.isModified('password')){

              particularCompany.password = await bcrypt.hash(particularCompany.password,8);
          }

    }catch(e){

      console.log('sth error occured during password encryption')
      return e;
    }

})

module.exports = realCompanySchema;