const { Router } = require ('express')
const ServicoController = require('../controllers/servicoController')

const router = Router()

router.get('/servicos', ServicoController.servicosAll)
router.post('/servicos/novoServico', ServicoController.cadastroServico)

module.exports = router