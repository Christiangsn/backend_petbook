const { Router } = require ('express')
const EmpresaController = require('../controllers/empresaController')
const ClienteController = require('../controllers/servicoController')
const authMiddleware = require('../middlewares/auth')
const authMiddlewareEmpresas = require('../middlewares/authEmpresas')

const router = Router()

router.post('/empresa/login', EmpresaController.autenticacao)


router.post('/empresas', EmpresaController.cadastroEmpresa)
router.get('/empresas', EmpresaController.empresasAll)
router.get('/empresas/:id', EmpresaController.empresasOne)
router.get('/empresas/:empresaID/servico/:servicoId', EmpresaController.servicosOne)
router.get('/servicos', ClienteController.servicosAll)
router.post('/empresas/recuperacao', EmpresaController.recuperarSenha)
router.post('/empresas/recuperacao/resetSenha', EmpresaController.resetSenha)


router.use(authMiddleware);
router.use(authMiddlewareEmpresas);

router.post('/empresas/servico', EmpresaController.cadastroServico)
router.put('/empresas/:id', EmpresaController.updateEmpresa)
router.delete('/empresas/:id', EmpresaController.deleteEmpresa)


module.exports = router