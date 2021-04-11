'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn(
          'Empresas',
          'resetSenha',
          {
            type: Sequelize.STRING,
            select: false,
          }
        ),
        queryInterface.addColumn(
          'Empresas',
          'DataExpiracaoSenha',
          {
            type: Sequelize.DATE,
            select: false,
          }
        )
    },
  
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Empresas', 'resetSenha'),
        await queryInterface.removeColumn('Empresas', 'resetSenha')
    }
  };