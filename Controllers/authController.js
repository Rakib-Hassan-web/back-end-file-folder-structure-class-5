const User = require("../models/UserSchema")


const registration = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) return res.status(400).send('name is required');
        if (!email) return res.status(400).send('email is required');
        if (!password) return res.status(400).send('password is required');

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save(); 

        res.status(201).send("registration successful");

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
};



const login  = (req,res)=>{
    res.send("login successful")
}



module.exports ={registration, login}