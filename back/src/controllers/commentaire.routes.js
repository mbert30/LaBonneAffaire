const express = require('express');
const router = express.Router();
const commentaireRepository = require('../models/commentaire-repository')
const { DateTime } = require('luxon');
const { body } = require('express-validator');
const { validateBody } = require('./validation/route.validator');


router.post('/recupererCommentaire', async (req, res) => { 
    let retour = await commentaireRepository.recupererCommentaire(req.body)
    console.log(retour);

    res.send(retour)
})

router.post('/creationCommentaire', async (req, res) => { 
    console.log(req.body)
    res.send(await commentaireRepository.creationCommentaire(req.body))
})
exports.initializeRoutes = () => router;
