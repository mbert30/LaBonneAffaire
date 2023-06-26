const annonce = require('./annonce.js');
const categorie = require('./categorie.js');
const commentaireutilisateur = require('./commentaireutilisateur.js');
const commentaireannonce = require('./commentaireannonce.js');
const typecompte = require('./typecompte.js');
const ville = require('./ville.js');
const utilisateur = require('./utilisateur.js');
const { Op } = require("sequelize");

exports.derniereAnnonce = async (nbAnnonce) => {
    return await annonce.findAll({ order:[['ID_Annonce', 'DESC']], limit: nbAnnonce })
}

exports.nouvelleAnnonce = async (body) => {
    return await annonce.create({
        libelleAnnonce: body.libelleAnnonce,
        descriptionAnnonce: body.descriptionAnnonce,
        ID_Utilisateur: body.ID_Utilisateur,
        prix: body.prix,
        PossibleNego: body.PossibleNego,
        ID_Categorie: body.ID_Categorie
    })
}

exports.recupererInfoAnnonce = async (body) => {
    return await annonce.findAll({ 
        include: [categorie, utilisateur],
        where : { ID_Annonce: body.ID_Annonce}
    })
}

exports.rechercheAnnonceAvecCategorie = async (body) => {
    return await annonce.findAll({ 
        include: [categorie, utilisateur],
        where : {
            [Op.and]: [
                { ID_Categorie: body.categorie},
                { libelleAnnonce: {[Op.like] : `%${body.recherche}%`}}
                // ovgftywszap
            ]
        } 
    })
}

exports.rechercheAnnonceSansCategorie = async (body) => {
    return await annonce.findAll({ 
        include: [categorie, utilisateur],
        where : {
            [Op.and]: [
                { libelleAnnonce: {[Op.like] : `%${body.recherche}%`}}
            ]
        } 
    })
}


exports.listeCategorie = async () => {
    return await categorie.findAll({})
}

exports.nouvelleCategorie = async (body) => {
    return await categorie.create({
        libelleCategorie: body.libelleCategorie
    })
}