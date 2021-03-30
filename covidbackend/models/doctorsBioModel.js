const mongoose = require('mongoose')

const realDoctorBiographySchema = require('./schema/doctorBio')

const doctorsBioModel = mongoose.model('DoctorsBio',realDoctorBiographySchema)

module.exports=doctorsBioModel 