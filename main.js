
const express = require('express')
const dbConfig = require('./dbConfig')


const routee = require('./routes')
const User = require('./models/UserSchema')
const app = express()
app.use(express.json())

dbConfig()
User()

app.use(routee)



app.listen(4000, () => {
  console.log("server is running on port 4000")
})


