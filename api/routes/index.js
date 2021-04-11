const bodyParser = require('body-parser')
const session = require('express-session')
const empresas = require('./empresaRouter')
const clientes = require('./clienteRouter')
const servicos = require('./servicoRouter')

module.exports = app => {
    app.use(bodyParser.json(),
    empresas,
    clientes,
    servicos
    )
    

}