const {Sequelize, DataTypes} = require('sequelize');
const annonce = require('./annonce.js');
const utilisateur = require('./utilisateur.js');
const {sequelize} = require('./sqlite.db');

const commentaireannonce = sequelize.define('commentaireannonce',
    {
    ID_CommentaireAnnonce: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_Annonce: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ID_Utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TexteCommentaire: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'commentaireannonce',
    timestamps: true,
    indexes: [
      {
        name: "pk_ID_CommentaireAnnonce",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_CommentaireAnnonce" },
        ]
      },
      {
        name: "fk_ID_Utilisateur_commentaireAnnonce",
        using: "BTREE",
        fields: [
          { name: "ID_Utilisateur" },
        ]
      },
      {
        name: "fk_ID_Annonce_commentaireAnnonce",
        using: "BTREE",
        fields: [
          { name: "ID_Annonce" },
        ]
      },
    ]
});

commentaireannonce.belongsTo(utilisateur, {
  foreignKey: 'ID_Utilisateur'
});

commentaireannonce.belongsTo(annonce, {
  foreignKey: 'ID_Annonce'
});

module.exports = commentaireannonce