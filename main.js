
const express = require('express')
const dbConfig = require('./dbConfig')
const app = express()

dbConfig()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(4000, () => {
  console.log("server is running on port 4000")
})


