const mongoose = require('mongoose')

const newAdminSchema = new mongoose.Schema;


const realAdminSchema = new newAdminSchema({

    firstname: {
        type: String,
        required: true,
      },
      middlename: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      userType:{
          type:string,
          default:'A',
          required:true
      },
    //   nationality: {
    //     type: String,
    //     required: true,
    //   },
    //   gender: {
    //     type: String,
    //     required: true,
    //   },
      mobileNumber: {
        type: String,
        required: true,
      },
      physicalAddress: {
        type: String,
        required: true,
      },
      copyOfId: {
        type: Buffer,
        required: true,
      },
  
      password: {
        type: String,
        required: true,
        trim: true,
      },
    
      dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
      }
  
      //       tokens:[{
  
      //         token:{
  
      //               type:String,
      //               //required:true
      //         }
      //   }]
    
})


module.exports=realAdminSchema;