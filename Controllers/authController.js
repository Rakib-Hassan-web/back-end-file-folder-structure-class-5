const User = require("../models/UserSchema")

const bcrypt = require("bcrypt");
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

        // Hash password properly
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).send("registration successful");

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
};




const login = async (req, res) => {

    const {
        email,
        password
    } = req.body;


    if (!email) return res.status(400).send('email is required');
    if (!password) return res.status(400).send('password is required');


    const existingUser = await User.findOne({
        email
    });

    if (!existingUser) return res.send('user dose not exist')

    if (existingUser.password !== password) return res.send('password does not match')




    res.send({
        success: "login successful",
        existingUser
    })
}



module.exports = {
    registration,
    login
}