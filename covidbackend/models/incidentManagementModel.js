const mongoose = require('mongoose')

const incidentManagementSchema = require('./schema/incidentManagementSchema')

const incidentManagementModel = mongoose.model('incidentManagementModel',incidentManagementSchema)

module.exports = incidentManagementModel