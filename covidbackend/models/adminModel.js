const mongoose = require('mongoose')
const realAdminSchema = require('./schema/adminSchema')

const realAdminModel =  mongoose.model('AdminUsers',realAdminSchema)

module.exports=realAdminModel