const mongoose = require('mongoose')

const doctorBiographySchema =  mongoose.Schema;

const realDoctorBiographySchema = new doctorBiographySchema({

    qualification:{
        type:String,
        required:true
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'IndividualUser',
      },
    department:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    consultantIn:{
        type:String,
        required:true  
    },
    language:{
        type:String
    }
},{
    timestamps:true
})

module.exports= realDoctorBiographySchema