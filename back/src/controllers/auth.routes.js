const express = require('express');
const router = express.Router();
const userRepository = require('../models/user-repository');
const { passwordsAreEqual } = require('../security/crypto');
const { generateAuthToken } = require('../security/auth');
const { body } = require('express-validator');
const { validateBody } = require('./validation/route.validator');

router.post('/login', body('email').notEmpty(), body('mdp').notEmpty(), async (req, res) => {

  try {
    validateBody(req);
  } catch (e) {
    res.status(500).send(e.message);
    return;
  }
  const { email, mdp } = req.body;
  const user = await userRepository.getUserForConnection(email);

  if (!user || !(user && passwordsAreEqual(mdp, user.Mdp))) {
    res.status(401).send('Unauthorized');
    return;
  }
  const token = generateAuthToken(user.id, user.adresseEmail);
  ID_Utilisateur = user.ID_Utilisateur
  res.json({ "token": token, "ID_Utilisateur": ID_Utilisateur});
});

exports.initializeRoutes = () => router;