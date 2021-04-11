'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn(
          'Empresas',
          'TipoUsuario',
          {
            type: Sequelize.STRING,
            select: false,
          }
        )
    },
  
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Empresas', 'TipoUsuario')
        
    }
  };