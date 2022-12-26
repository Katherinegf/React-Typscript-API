const express = require('express')
const controller = express.Router()

controller.route('/')
    .post((req, res) => {
        
        res.status(200).json()


    })

module.exports = controller

