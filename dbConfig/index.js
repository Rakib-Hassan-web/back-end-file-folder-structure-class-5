
const mongoose = require('mongoose');




const dbConfig =()=>{
      return mongoose.connect('mongodb://127.0.0.1:27017/test')
        .then(() => console.log('Connected!'));

  }


  module.exports =dbConfig