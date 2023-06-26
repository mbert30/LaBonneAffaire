const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
var _categorie = require("./categorie");
var _utilisateur = require("./utilisateur");
const annonce = sequelize.define('annonce',
    {
    ID_Annonce: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    libelleAnnonce: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descriptionAnnonce: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ID_Utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prix: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    PossibleNego: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ID_Categorie: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'annonce',
    timestamps: false,
    indexes: [
      {
        name: "pk_ID_Annonce",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Annonce" },
        ]
      },
      {
        name: "fk_ID_Utilisateur_Annonce",
        using: "BTREE",
        fields: [
          { name: "ID_Utilisateur" },
        ]
      },
      {
        name: "fk_ID_Categorie_Annonce",
        using: "BTREE",
        fields: [
          { name: "ID_Categorie" },
        ]
      },
    ]
})
annonce.belongsTo(_utilisateur, {
  foreignKey: 'ID_Utilisateur'
});

annonce.belongsTo(_categorie, {
  foreignKey: 'ID_Categorie'
});

module.exports = annonce

