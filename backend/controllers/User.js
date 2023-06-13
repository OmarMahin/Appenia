const { emailVerification, verifyLength } = require("../handler/verfication")
const Usermodel = require("../models/usermodel")
const bcrypt = require('bcrypt')

exports.signup = async (req, res)=>{
    try{

        const{

            first_name,
            last_name,
            username,
            email,
            password,
            gender,
            birth_day,
            birth_month,
            birth_year,
            verified,

        } = req.body

        if (!emailVerification(email)){
            return res.status(400).json({
                message: "Invalid Email Address"
            })
        }

        const checkEmail = await Usermodel.findOne({email})

        if (checkEmail){
            return res.status(400).json({
                message: "Email Already Exists"
            })
        }

        if (!verifyLength(first_name, 4, 15)){
            return res.status(400).json({
                message: "First Name should minimum 4 and maximum 15 characters long."
            })
        }

        if (!verifyLength(last_name, 4, 15)){
            return res.status(400).json({
                message: "Last Name should minimum 4 and maximum 15 characters long."
            })
        }
        
        if (!verifyLength(password, 8, 30)){
            return res.status(400).json({
                message: "Password should minimum 8 and maximum 30 characters long."
            })
        }

        //bcrypt password

        const encrypt = await bcrypt.hash(password, 10)

        const User = await new Usermodel({
            first_name,
            last_name,
            username,
            email,
            password: encrypt,
            gender,
            birth_day,
            birth_month,
            birth_year,
            verified,
            
        }).save()

        res.send({
            id: User._id,
            first_name: User.first_name,
            last_name: User.last_name,
            username: User.username,
            email: User.email,
            password: User.password,
            gender: User.gender,
            birth_day: User.birth_day,
            birth_year: User.birth_year,
            verified: User.verified,

        })

    } catch(error){
        console.log(error)
    }

}