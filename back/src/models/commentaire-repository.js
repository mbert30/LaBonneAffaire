const annonce = require('./annonce.js');
const categorie = require('./categorie.js');
const commentaireutilisateur = require('./commentaireutilisateur.js');
const commentaireannonce = require('./commentaireannonce.js');
const typecompte = require('./typecompte.js');
const ville = require('./ville.js');
const utilisateur = require('./utilisateur.js');
const { Op } = require("sequelize");
const {sequelize} = require("./sqlite.db.js")

exports.recupererCommentaire = async (body) => {
    return await commentaireannonce.findAll({ 
        attributes: [ 
            'TexteCommentaire',
            'createdAt'
        ],
        include: [{model: utilisateur, attributes: ["nom", "prenom"]}],
        where : { ID_Annonce: body.ID_Annonce } })
}

exports.creationCommentaire = async (body) => {
    return await commentaireannonce.create({
        ID_Annonce: body.ID_Annonce,
        ID_Utilisateur: body.ID_Utilisateur,
        TexteCommentaire: body.TexteCommentaire
    })
}