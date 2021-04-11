const { Router } = require ('express')
const ClienteController = require('../controllers/clienteController')

const router = Router()

router.get('/clientes', ClienteController.clientesAll)
router.post('/clientes', ClienteController.cadastroCliente)






module.exports = router