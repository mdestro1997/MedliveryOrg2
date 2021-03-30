const mongoose = require('mongoose');

const doctorSignUpSchema = mongoose.Schema;

const realDoctorSignSchema = new doctorSignUpSchema(
  {
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
    category: {
      type: String,
      required: true,
    },
    userType:{
        type:String,
        default:'D',
        required:true
    },
    nationality: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
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
    copyOfCertificateOfPractice: {
      type: Buffer,
      required: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },
    //  gender:{
    //      type:String,
    //      required:true
    //  },
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },

    //       tokens:[{

    //         token:{

    //               type:String,
    //               //required:true
    //         }
    //   }]
  },
  {
    timestamps: true,
  }
);

module.exports = realDoctorSignSchema;
