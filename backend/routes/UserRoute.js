const express = require('express')
const { signup } = require('../controllers/user')
const UserRouter = express.Router()

UserRouter.post('/signup',signup)

module.exports = UserRouter