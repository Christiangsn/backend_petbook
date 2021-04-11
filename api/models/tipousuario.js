'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoUsuario extends Model {

    static associate(models) {
      TipoUsuario.hasOne(models.Empresas, {
        foreignKey: 'TipoUsuario'
      })
    }
  };
  TipoUsuario.init({
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoUsuario',
  });
  return TipoUsuario;
};