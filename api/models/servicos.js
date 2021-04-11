'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicos extends Model 
  {
    static associate(models) {
      Servicos.belongsTo(models.Empresas,{
        foreignKey: 'empresa_id'
      })
      
    }

  };
  Servicos.init({
    local: DataTypes.STRING,
    servico: DataTypes.STRING,
    descricaoserv: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Servicos',
  });
  return Servicos;
};