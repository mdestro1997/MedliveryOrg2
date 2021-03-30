const mongoose = require('mongoose')

const changeManagement = mongoose.Schema;

const changeManagementSchema = new changeManagement({


    changeNumber:{
        type:String,
        required:true
    },
    changeName:{
        type:String,
        required:true
    },
    summaryOfChange:{
        type:String,
        required:true
    },
    postImplementationReview:{
        type:String,
        required:true
    },
    reasonForChange:{
        type:String,
        required:true
    },
    dateOfChange:{
        type:Date,
        required:true
    },
    impactedAreas:{
        type:String,
        required:true
    }

})


module.exports =changeManagementSchema