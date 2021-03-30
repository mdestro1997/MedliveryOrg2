const mongoose = require('mongoose')
const realMedicationFormSchema  = require('./schema/medicationFormSchema')

const medicationApplicationForm =  mongoose.model('medicationApplicationForm',realMedicationFormSchema);

module.exports = medicationApplicationForm;  