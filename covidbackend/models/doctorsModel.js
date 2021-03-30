const mongoose =  require('mongoose')
const bcrypt = require('bcryptjs')

const realDoctorSignSchema = require('./schema/doctorSchema')

realDoctorSignSchema.pre('save', async function (next){

    const particularDoctor = this;
    
    if(particularDoctor.isModified('password')){
    
        particularDoctor.password = await bcrypt.hash(particularDoctor.password,8);
    }
    
    next;
     
    })

 const doctorsSignUpModel = mongoose.model('DoctorSignUp',realDoctorSignSchema)

 module.exports=doctorsSignUpModel   