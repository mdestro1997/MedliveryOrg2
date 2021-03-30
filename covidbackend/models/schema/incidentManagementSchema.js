const mongoose = require('mongoose')

const incidentManagement = mongoose.Schema;

const incidentManagementSchema = new incidentManagement({

    incidentNumber:{
       type: String,
        required:true
    },
    incidentName:{
        type:String,
        required:true
    },
    rootCauseAnalysis:{
        type:String,
        required:true
    },
    summaryOfIncident:{
        type:String,
        required:true
    },
    dateOfIncident:{
        type:Date,
        required:true
    }
})


module.exports= incidentManagementSchema