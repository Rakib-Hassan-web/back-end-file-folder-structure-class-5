
const mongoose = require('mongoose');




const dbConfig =()=>{
      return mongoose.connect('mongodb+srv://secondwork:tzQJs5WU9fV1tfBw@cluster0.7ooynjm.mongodb.net/?appName=Cluster0')
        .then(() => console.log(' DATA BASE Connected!'));

  }


  module.exports =dbConfig