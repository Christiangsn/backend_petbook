const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth');
const database = require('../models')


    async function empresaAuth (req, res, next) {

        const authHeader = req.headers.authorization;
        idUser = decoded.id

        const user = await database.Empresas.findOne({ where: { 
              id: String(idUser)
            } 
        });

        if (!user)
          return res.status(401).json({ error: 'Você não tem acesso a esta rota!' });

        if (!authHeader)
          return res.status(401).send({ error: 'No token provided' });

        return next();
      
    }

module.exports = empresaAuth;