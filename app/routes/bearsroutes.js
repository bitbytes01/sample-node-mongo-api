var express = require('express');
var bearController = require('../controllers/bearsController');

var bearsRouter = express.Router();

// get all posts
bearsRouter.get('/', bearController.getAllBears);

// get user by id
bearsRouter.get('/:id', bearController.getBearById);

// create user
bearsRouter.post('/', bearController.createBear);

// update user by id
bearsRouter.put('/:id', bearController.updateBear);

// delete user by id
bearsRouter.delete('/:id', bearController.deleteBear);


module.exports = bearsRouter;

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);