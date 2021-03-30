const mongoose = require('mongoose')

const changeManagementSchema = require('./schema/changeManagementSchema')

const changeManagementModel = mongoose.model('changeManagementModel',changeManagementSchema)

module.exports = changeManagementModel