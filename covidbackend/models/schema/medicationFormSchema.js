const mongoose = require('mongoose');

const medicationFormSchema = mongoose.Schema;

const realMedicationFormSchema = new medicationFormSchema(
  {
    nearestMedicalFacility: {
      type: String,
      required: true,
    },
    imageUrl:{
      type:String,
      required:true
    },
    Address: {
      type: String,
      required: true,
    },
    briefMedicalHistory: {
      type: String,
      required: true,
    },
    copyOfMedicalHistory: {
      type: Buffer,
      required: true,
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: 'IndividualUser',
    },
    assignedMedicalPractitioner: {
      type: String,
      default: 'InProgress',
    },
  },
  {
    timestamps: true,
  }
);

realMedicationFormSchema.index({ briefMedicalHistory: 'text', nearestMedicalFacility: 'text',assignedMedicalPractitioner:'text' }); // schema level

// realMedicationFormSchema.path('briefMedicalHistory').index({text:true})
// realMedicationFormSchema.path('nearestMedicalFacility').index({text:true})

module.exports = realMedicationFormSchema;
