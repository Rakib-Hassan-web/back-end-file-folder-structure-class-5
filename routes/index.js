const express =require( 'express')
const { registration, login } = require('../Controllers/authController')

const routee = express.Router()


routee.get('/' ,(req,res)=>{
    res.send("hello world")
})




routee.post('/register' , registration )


routee.post('/login' , login )








module.exports =routee