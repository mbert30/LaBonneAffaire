const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const typecompte = sequelize.define('typecompte',
    {
    ID_TypeCompte: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    libelleTypeCompte: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'typecompte',
    timestamps: false,
    indexes: [
      {
        name: "pk_ID_TypeCompte",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_TypeCompte" },
        ]
      },
    ]
  });
module.exports = typecompte
