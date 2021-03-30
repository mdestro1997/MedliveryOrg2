const mongoose = require('mongoose');


const bookingAppointmentSchema = mongoose.Schema;



const realbookingAppointmentSchema = new bookingAppointmentSchema({

    Patientfirstname: {
        type: String,
        required: true
    },
    Patientmiddlename: {
        type: String,
        required: true
    },
    Patientlastname: {
        type: String,
        required: true
    },
    Patientemail: {
        type: String,
        required: true

    },
    PatientdateOfBirth: {
        type: String,
        required: true

    },
    doctorFirstName: {
        type: String,
        required: true

    },
    doctorLastName: {
        type: String,
        required: true

    },
    doctorSpeciality: {
        type: String,
        required: true
    },
    AppointmentDate: {
        type: String,
        required: true
    },
    PatientId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'IndividualUser'
    },
    AppointmentStatus: {
        type: String,
        required: true,
        default: 'Pending'
    },

    AppointmentTime: {
        type: String,
        required: true
    },
    DoctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'IndividualUser'
    },
    medicalAid: {
        type: String,
        required: true
    },
    refferals: {
        type: String,
        required: true
    },
    meeting_url: {
        type: String,
        unique: true
    }


}, {
    timestamps: true
});


// realIndividualUserSchema.index({ firstname: 'text', lastname: 'text' }); // schema level



module.exports = realbookingAppointmentSchema;