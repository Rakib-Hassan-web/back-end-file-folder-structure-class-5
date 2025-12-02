

const registration  = async (req,res)=>{

    const{ name ,email ,password} = req.body


if(!name) return res.send('name is required')
if(!email) return res.send('email is required')
if(!password) return res.send('password is required')


        const newUser =new userschema({
            name,
            email,
            password
        })

        await newUser.save()



    res.send("registration successful")
}


const login  = (req,res)=>{
    res.send("login successful")
}



module.exports ={registration, login}