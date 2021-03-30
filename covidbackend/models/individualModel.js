const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
//Import the IndividualUserSchema
const realIndividualUserSchema = require('./schema/individualUserSchema')



// realIndividualUserSchema.methods.toJSON = function(){

//         const user= this;
      
//         const userObj = user.toObject();
//         delete userObj.password;
//         delete userObj.tokens;

//         return userObj;

// }

realIndividualUserSchema.methods.generateAuthenticationToken = async function() {

    const particularIndividual = this;

    try{

    const token = await jwt.sign({_id : particularIndividual._id.toString()},'ThisIsASecretKEY');
    
    if(token){
       // user.tokens = user.tokens.concat({token:token});
        particularIndividual.tokens =particularIndividual.tokens.concat({token:token});
        await particularIndividual.save();
        const respond={}
        respond.token = token
        respond.userCategory =particularIndividual.userCategory
        respond.firstname =particularIndividual.firstname
        respond.middlename =particularIndividual.middlename
        respond.lastname =particularIndividual.lastname
        respond.email =particularIndividual.email
        respond.dateOfBirth =particularIndividual.dateOfBirth
        respond.physicalAddress =particularIndividual.physicalAddress
        respond.phoneNumber =particularIndividual.phoneNumber
        respond._id =particularIndividual._id
        // respond.userCategory =particularIndividual.userCategory


        return respond;
    }
    else{

         throw new Error('Unable generate AUTHENTICATION TOKEN')
    }

    }
    catch(e){
       console.log('error',e)
        return e;
    }

}

realIndividualUserSchema.statics.findByCredentials = async (email,password) =>{

//const particularIndividual = this;
console.log('email',email)

try{
const particularUser = await IndividualUser.findOne({email:email});
console.log('particularUser',particularUser)
if(!particularUser){
    throw new Error('Unable to login')

}

    const isMatch = await bcrypt.compare(password,particularUser.password)

    if(!isMatch){
       
        throw new Error('Unable to login')

    }

    return particularUser;

}catch(e){

console.log('error',e)
 return e;
}

}

realIndividualUserSchema.virtual('medApplicationForm',{

    ref:'medicationApplicationForm',
    localField:'_id',
    foreignField:'owner'
   

})

realIndividualUserSchema.virtual('DoctorsBio',{

    ref:'DoctorsBio',
    localField:'_id',
    foreignField:'owner'
   

})

realIndividualUserSchema.pre('save', async function (next){

const particularIndividual = this;

if(particularIndividual.isModified('password')){

    particularIndividual.password = await bcrypt.hash(particularIndividual.password,8);
}

next;
 
})




//Now after importing the Schema we can go ahead and Create the Model based on the Schema
const IndividualUser = mongoose.model('IndividualUser',realIndividualUserSchema);


module.exports = IndividualUser;