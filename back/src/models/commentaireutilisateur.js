const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const comentaireutilisateur = sequelize.define('comentaireutilisateur',
      {
    ID_ComentaireUtilisateur: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ID_UtilisateurDestinataire: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_Utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    horodatage: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TexteCommentaire: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comentaireutilisateur',
    timestamps: false,
    indexes: [
      {
        name: "pk_ID_ComentaireUtilisateur",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_ComentaireUtilisateur" },
        ]
      },
      {
        name: "fk_ID_UtilisateurDestinataire_comentaireutilisateur",
        using: "BTREE",
        fields: [
          { name: "ID_UtilisateurDestinataire" },
        ]
      },
      {
        name: "fk_ID_Utilisateur_comentaireutilisateur",
        using: "BTREE",
        fields: [
          { name: "ID_Utilisateur" },
        ]
      },
    ]
  });
module.exports = comentaireutilisateur
