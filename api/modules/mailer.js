const path = require('path')
const nodemailer = require('nodemailer');
const { host, port, user, pass } = require('../config/mail.json');
const hbs = require('nodemailer-express-handlebars')

var transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
});

const handlebarOptions = {
    viewEngine: {
        extName: ".html",
        partialsDir: path.resolve('./api/resources/mail/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./api/resources/mail/'),
    extName: ".html",
};

transport.use('compile', hbs(handlebarOptions));

module.exports = transport;