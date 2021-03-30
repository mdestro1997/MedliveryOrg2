const mongoose = require('mongoose');

const sqlScriptsDescriptionSchema = require('./schema/sqlScriptsDescriptionSchema')

const sqlScriptsDescription = mongoose.model('sqlScriptsDescription',sqlScriptsDescriptionSchema)