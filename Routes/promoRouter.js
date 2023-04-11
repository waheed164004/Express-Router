const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
        res.end('Will send all promotions to you!');
})

.post((req, res, next) => {
        res.end('Will send the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })

.put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })

.delete((req, res, next) => {
        res.end('Deleting all promotions');
    });


promoRouter.route('/:promoId')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
        res.end('Will send all promotions to you!');
})

.post((req, res, next) => {
    res.end('POST operation not supported on /promotions'); 
    })

.put((req, res, next) => {
    res.statusCode = 403;
        res.write(`Updating the promotions ${req.params.promoId} \n`);
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
       
    })

.delete((req, res, next) => {
        res.end('Deleting promotion ' + req.params.promoId);
    });

    module.exports = promoRouter;