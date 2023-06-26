const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const ville = sequelize.define('ville',
    {
    ID_Ville: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    libelleVille: {
      type: DataTypes.STRING(38),
      allowNull: false
    },
    codePostal: {
      type: DataTypes.STRING(8),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ville',
    timestamps: false,
    indexes: [
      {
        name: "pk_ID_Ville",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_Ville" },
        ]
      },
    ]
  });
module.exports = ville
