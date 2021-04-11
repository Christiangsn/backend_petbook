const database = require('../models')
const bcrypt = require('bcrypt')
const authConfig = require('../config/auth');
const generationToken =  require('../config/token')
const crypto = require('crypto')
const mailer = require('../modules/mailer')

class EmpresaController {

    
    static async autenticacao (req, res) {
        const { email, senha} = req.body
        
        const user = await database.Empresas.findOne({ where: { 
               email: String(email)
            } 
        });

        if (!user) {
          return res.status(401).json({ error: 'User nor found' });
        }

        if(!await bcrypt.compare(senha, user.senha))
            return res.status(400).send({ error: 'Invalid password' });
        
        user.senha = undefined;
        
        res.send({ 
            user, 
            token: generationToken ({ id: user.id })
        })
    }

    static async cadastroEmpresa(req, res) {
        const { email } = req.body
        let senha = bcrypt.hashSync(req.body.senha, Number.parseInt(authConfig.rounds))
        const cadastro = { ...req.body, senha: senha }

        try{
            if ( await  database.Empresas.findOne ({ 
                email: String(email)
            }))
                return res.status(400).send({ error: 'User already exists' })

            const novaEmpresa = await database.Empresas.create(cadastro)
            cadastro.senha = undefined;

            return res.status(200).json({
                token: generationToken ({ id: cadastro.id })
            })

        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async recuperarSenha(req, res){
        const { email } = req.body

        try {

            const user = await database.Empresas.findOne({ where: { 
                email: String(email)
                } 
            });

            if (!user) {
                return res.status(401).json({ error: 'User nor found' });
            }

            const token = crypto.randomBytes(20).toString('hex');
            const now = new Date();
            now.setHours(now.getHours() + 1);
            const id = user.id

            const values = { resetSenha: token , DataExpiracaoSenha: now };
            const condition = { where :{ id: Number(id) } }; 
        
            try {
                 await database.Empresas.update( values, condition)
              } catch (err) { 
               
              }

            mailer.sendMail({
                to: email,
                from:'christian@petbooksoftware.com.br',
                template: 'auth/recuperaSenha',
                context:  { token }
            }, (err) => {
                if(err){
                    console.log(err)
                    return res.status(400).send({ error: 'Erro Desconhecido!' });
                }
                return res.send();
            })
            

        } catch (err) {
            console.log(err)
            return res.status(400).send({ error: 'Não foi possível encontrar este' });
        }

    }

    static async resetSenha(req, res){
        const { email, token, Novasenha} = req.body
        const senha = bcrypt.hashSync(req.body.Novasenha, Number.parseInt(authConfig.rounds))

        try {
            const user = await database.Empresas.findOne({
                where: {
                    email: String(email),
                },
                attributes: ['id', 'resetSenha', 'DataExpiracaoSenha']
            })
            
            


            if (!user) {
                return res.status(400).json({ error: 'User nor found' });
            }
            if(token !== user.resetSenha){
                console.log(user)
                return res.status(400).json({ error: 'Token invalid' });
            }

            const now = new Date();

            if(now > user.DataExpiracaoSenha){
                return res.status(400).json({ error: 'Token expired' });
            }

            user.senha = senha
            await user.save();

            res.send();

        } catch (error) {
            console.log(error)
            return res.status(400).send({ error: 'Não foi possível resetar sua senha!' });
        }
    }

    static async cadastroServico(req, res) {
        var decode = req.userId
        const novoServico = { ...req.body, empresa_id: decode }
        try{
            const novoServicoCadastro = await database.Servicos.create(novoServico)
            return res.status(200).json(novoServicoCadastro)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}



module.exports = EmpresaController