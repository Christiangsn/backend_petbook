module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('clientes', [
        {
          nome: 'Christian Guimarães',
          email: 'christian@onpets.com.br',
          senha: '123456',
          local: 'São Paulo',
          createdAt: new Date(),
          updatedAt: new Date()
       },
       {
        nome: 'Luiz Gonçalves',
        email: 'l.goncalves@ptsilvers.com.br',
        senha: '123456',
        local: 'Santo André',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Carlos Antonio',
        email: 'carlosa@bichinhoshow.com.br',
        senha: '123456',
        local: 'São Bernardo do Campo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro Silva',
        email: 'pedros@gmail.com.br',
        senha: '123456',
        local: 'São Paulo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkDelete('People', null, {});
    
  }
};
