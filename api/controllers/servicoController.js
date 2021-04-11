const database = require('../models')

class ServicoController {

    static async servicosAll (req, res) {
        try {
            const servicosAll = await database.Servicos.findAll()
            return res.status(200).json(servicosAll)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async cadastroServico(req, res) {
        const cadastro = req.body
        try{
            const cadastroServico = await database.Servicos.create(cadastro)
            return res.status(200).json(cadastroServico)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}


module.exports = ServicoController