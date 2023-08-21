var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 1250,
                height: 500,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });
    res.json(novedades);
});

router .post('/Contacto', async (req, res) => {
    const mail = {
        to: 'estigarribia.l97@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo: 
        ${req.body.email} <br> Ademas, hizo el siguiente comentario : ${req.body.mensaje}`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;