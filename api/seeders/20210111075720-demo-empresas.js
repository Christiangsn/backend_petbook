module.exports = {
    up: (QueryInterface, Sequelize) => {
        return QueryInterface.bulkInsert('Empresas', [
            {
               nome: 'Christian Guimarães',
               email: 'christian@onpets.com.br',
               senha: '123456',
               local: 'São Paulo',
               empresa: 'Petshows',
               nomeficticio: 'PETSHOWS BANHOS E TOSAS',
               descricao: 'Seu pet cheirosinho',
               createdAt: new Date(),
               updatedAt: new Date()
            },
            {
                nome: 'Luiz Gonçalves',
                email: 'l.goncalves@ptsilvers.com.br',
                senha: '123456',
                local: 'Santo André',
                empresa: 'Luiz Goncalves LTDA',
                nomeficticio: 'PETs SILVERS',
                descricao: 'Checagem do seu Pet em geral',
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                nome: 'Carlos Antonio',
                email: 'carlosa@bichinhoshow.com.br',
                senha: '123456',
                local: 'São Bernardo do Campo',
                empresa: 'Tonhão Silva LTDA',
                nomeficticio: 'BICHINHOS SHOW',
                descricao: 'Comidas e aperitivos de pets',
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                nome: 'Pedro Silva',
                email: 'pedros@gmail.com.br',
                senha: '123456',
                local: 'São Paulo',
                empresa: 'Lucindra Gomes Silva',
                nomeficticio: 'TOSAS E BANHOS ANIMAL',
                descricao: 'Seu pet do jeito que você quer!',
                createdAt: new Date(),
                updatedAt: new Date()
              }
        ], {})
        },

        down: (QueryInterface, Sequelize) => {
            return QueryInterface.bulkDelete('empresas', null, {})

    }
}