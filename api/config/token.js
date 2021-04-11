const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth');

    function generationToken(params) {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: authConfig.expires
        })   
    }

module.exports = generationToken