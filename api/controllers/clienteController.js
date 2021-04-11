const database = require('../models')
const bcrypt = require('bcrypt')
const authConfig = require('../config/auth');
const generationToken =  require('../config/token')
const crypto = require('crypto')
const mailer = require('../modules/mailer')


class ClienteController {

    static async cadastroCliente(req, res) {
        let senha = bcrypt.hashSync(req.body.senha, Number.parseInt(authConfig.rounds))
        const cadastro = { ...req.body, senha: senha }

        try{
            if ( await  database.Clientes.findOne ({ 
                email: String(email)
            }))
                return res.status(400).send({ error: 'Email já está cadastrado' })

            const novoCliente = await database.Clientes.create(cadastro)
            cadastro.senha = undefined;

            return res.status(200).json({
                token: generationToken ({ id: cadastro.id })
            })

        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    






}


module.exports = ClienteController