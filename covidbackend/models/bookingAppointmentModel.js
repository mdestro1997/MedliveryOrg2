const mongoose = require('mongoose')

const realbookingAppointmentSchema = require('./schema/bookingAppointmentSchema')

const BookingAppointmentModel = mongoose.model('BookingAppointment',realbookingAppointmentSchema)

module.exports=BookingAppointmentModel; 