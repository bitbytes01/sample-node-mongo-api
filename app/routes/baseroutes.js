var express = require('express');
var bearsRoutes = require('./bearsroutes');
var baseRouter = express.Router();


// middleware to use for all requests
baseRouter.use(function (req, res, next) {
    // do logging
    console.log('request came to base route..');
    next(); // make sure we go to the next routes and don't stop here
});

baseRouter.get('/', function (req, res) {
    res.json({
        message: 'node api'
    });
});


baseRouter.use("/bears", bearsRoutes);

module.exports = baseRouter;