const express = require('express')
const router = express.Router()
const userRepository = require('../models/user-repository')
const { validateBody } = require('./validation/route.validator')
const { body } = require('express-validator')
const guard = require('express-jwt-permissions')({requestProperty: 'auth',})

router.get('/getUserForConnection', async (req, res) => {
    res.send(await userRepository.getUserForConnection(req.body))
});

router.post('/createUser', async (req, res) => {
    res.send(await userRepository.createUser(req.body))
});

router.post('/getInfoUser', async (req, res) => {
    res.send(await userRepository.getInfoUser(req.body))
});

router.put('/updateUser', async (req, res) => {
    res.send(await userRepository.updateUser(req.body))
});

exports.initializeRoutes = () => router