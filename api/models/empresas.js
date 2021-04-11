'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresas extends Model {

    static associate(models) {
      Empresas.hasOne(models.Servicos, {
        foreignKey: 'empresa_id'
      }),
      Empresas.belongsTo(models.TipoUsuario,{
        foreignKey: 'TipoUsuario'
      })
    }

  };
  Empresas.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    resetSenha: DataTypes.STRING,
    DataExpiracaoSenha: DataTypes.DATE,
    local: DataTypes.STRING,
    empresa: DataTypes.STRING,
    nomeficticio: DataTypes.STRING,
    descricao: DataTypes.STRING,
    TipoUsuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresas',
  });
  return Empresas;
};