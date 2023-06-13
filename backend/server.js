const express = require('express')
const cors = require('cors')
const {readdirSync} = require("fs")
const { db_connect } = require('./database/dbconnect')
require("dotenv").config()
const app = express()

//database connection
db_connect()


//Middleware 
app.use(cors())
app.use(express.json())


//Routes
readdirSync('./routes').map((r)=>app.use('/',require('./routes/'+r)))


//Enviroment Variables

const port = process.env.PORT || 4000

app.listen(port,()=>{
    console.log("App is running")
})