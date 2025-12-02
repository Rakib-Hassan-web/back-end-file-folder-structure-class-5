
const express = require('express')
const dbConfig = require('./dbConfig')
const UserSchema = require('./models/UserSchema')

const routee = require('./routes')
const app = express()

dbConfig()
UserSchema()

app.use(routee)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(4000, () => {
  console.log("server is running on port 4000")
})


