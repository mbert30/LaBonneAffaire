const uuid = require('uuid');
const { generateHashedPassword } = require('../security/crypto.js');
const utilisateur = require('./utilisateur.js');
const { sequelize } = require('../models/sqlite.db')

exports.getUsers = async () => await utilisateur.findAll();

exports.getUserForConnection  = async (adresseEmail) => {
    return await utilisateur.findOne({ where: { adresseEmail } });
};

exports.getInfoUser = async (body) => {
    let ID_Utilisateur = body.ID_Utilisateur
    return await utilisateur.findOne({ 
        attributes: [
            [sequelize.fn('COALESCE', sequelize.col('Ntel'), 'Non renseigné'), 'Ntel'],
            [sequelize.fn('COALESCE', sequelize.col('adressePostal'), 'Non renseigné'), 'adressePostal'],
            [sequelize.fn('COALESCE', sequelize.col('complementAdresse'), 'Non renseigné'), 'complementAdresse'],
            [sequelize.fn('COALESCE', sequelize.col('ID_Ville'), 'Non renseigné'), 'ID_Ville'],
            [sequelize.fn('COALESCE', sequelize.col('nom'), 'Non renseigné'), 'nom'],
            [sequelize.fn('COALESCE', sequelize.col('prenom'), 'Non renseigné'), 'prenom'],
            [sequelize.fn('COALESCE', sequelize.col('adresseEmail'), 'Non renseigné'), 'adresseEmail']
        ],
        where: { ID_Utilisateur } });
};

exports.createUser = async (body) => {
    console.log("user")
    console.log(body)
    let hashedMDP = generateHashedPassword(body.mdp)
    await utilisateur.create({
        nom: body.nom,
        prenom: body.prenom,
        adresseEmail: body.email,
        Mdp: hashedMDP,
        ID_TypeCompte: "1"
    })
}

exports.updateUser = async (body) => {
    let ID_Utilisateur = body.ID_Utilisateur
    let nom = body.nom
    let prenom = body.prenom
    let adresseMail = body.adresseMail
    let adressePostal = body.adressePostal
    let complementAdresse = body.complementAdresse
    let Ntel = body.Ntel
    return await utilisateur.update({ nom: nom, prenom: prenom, adresseMail: adresseMail, adressePostal: adressePostal, complementAdresse: complementAdresse, Ntel: Ntel}, {
        where: {
            ID_Utilisateur: ID_Utilisateur
        }
      });
}