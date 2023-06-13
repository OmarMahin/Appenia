const mongoose = require("mongoose")
require("dotenv").config

exports.db_connect = ()=>{
    mongoose.connect(process.env.DATABASE_URL, ()=>{
        console.log("Database is connected")
    })
}