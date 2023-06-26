const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const categorie = sequelize.define('categorie',
    {
    ID_Categorie: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    libelleCategorie: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'categorie',
    timestamps: false,
    indexes: [
      {
        name: "pk_ID_Categorie",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Categorie" },
        ]
      },
    ]
})

module.exports = categorie