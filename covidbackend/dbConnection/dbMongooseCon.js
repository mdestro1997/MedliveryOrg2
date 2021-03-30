const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/botsrich',{

  useUnifiedTopology:true,
  useNewUrlParser:true,
  


});

//Try using a try catch for this below code 
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));

db.once('open', ()=> {

    console.log('We are connected');
})