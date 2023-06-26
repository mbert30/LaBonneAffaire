const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const utilisateur = sequelize.define('utilisateur',
    {
    ID_Utilisateur: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING(38),
      allowNull: false
    },
    adresseEmail: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    Mdp: {
      type: DataTypes.CHAR(60),
      allowNull: false
    },
    Ntel: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    adressePostal: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    complementAdresse: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    ID_Ville: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_TypeCompte: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false,
    indexes: [
      {
        name: "pk_ID_Utilisateur",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Utilisateur" },
        ]
      },
      {
        name: "fk_ID_Ville_utilisateur",
        using: "BTREE",
        fields: [
          { name: "ID_Ville" },
        ]
      },
      {
        name: "fk_ID_TypeCompte_utilisateur",
        using: "BTREE",
        fields: [
          { name: "ID_TypeCompte" },
        ]
      },
    ]
})
module.exports = utilisateur