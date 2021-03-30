const mongoose = require('mongoose');

//Import realCompanySchema
const realCompanySchema = require('./schema/companySchema');

//After importing the realCompany Schema we can then go ahead and create the model based on the schema
const companyModel = mongoose.model('Company',realCompanySchema);

module.exports= companyModel;