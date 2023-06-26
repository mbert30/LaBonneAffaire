const express = require('express');
const router = express.Router();
const annonceRepository = require('../models/annonce-repository')
const { body } = require('express-validator');
const { validateBody } = require('./validation/route.validator');

router.get('/derniereAnnonce', async (req, res) => {
    res.send(await annonceRepository.derniereAnnonce(5))
});

router.post('/nouvelleAnnonce', async (req, res) => {
    res.send(await annonceRepository.nouvelleAnnonce(req.body))
})

router.post('/rechercheAnnonce', async (req, res) => {
    console.log(req.body)
    let annonces
    if(req.body.categorie === 0)
    {
        annonces = await annonceRepository.rechercheAnnonceSansCategorie(req.body)
    }
    else
    {
        annonces = await annonceRepository.rechercheAnnonceAvecCategorie(req.body)
    }
    res.send(annonces)
})

router.post('/nouvelleCategorie', async (req, res) => {
    res.send(await annonceRepository.nouvelleCategorie(req.body))
})

router.get('/afficherCategorie', async (req, res) => { 
    res.send(await annonceRepository.listeCategorie(req.body))
})

router.post('/recupererInfoAnnonce', async (req, res) => { 
    res.send(await annonceRepository.recupererInfoAnnonce(req.body))
})

exports.initializeRoutes = () => router;