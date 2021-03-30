const mongoose = require('mongoose');


const IndividualUserSchema = mongoose.Schema;



const realIndividualUserSchema = new IndividualUserSchema({
     
    firstname:{
        type:String,
        required:true
    },
    middlename:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    physicalAddress:{
        type:String,
        required:true
    },
    copyOfId:{
       type:Buffer,
       required:true
    },
    
     password:{
        type:String,
        required:true,
        trim:true
     },
    //  gender:{
    //      type:String,
    //      required:true
    //  },
     dateOfBirth:{
        type:Date,
        required:true,
        trim:true
     },
     userCategory:{
         type:String,
         default:'P',
         required:true
     },
     
      tokens:[{
      
        token:{

              type:String,
              //required:true
        }
  }]
     
},{
    timestamps:true
});


realIndividualUserSchema.index({ firstname: 'text', lastname: 'text' }); // schema level



module.exports = realIndividualUserSchema;