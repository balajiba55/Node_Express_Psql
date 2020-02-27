'use strict';
//import all required modules
var express = require('express');
var controller = require('./controller');
var router = express.Router();


//Routes for employee table

//to get all users
router.get('/', controller.getusers)
//create new user
router.post('/', controller.addUser)
//update user
router.put('/:id', controller.updateUser)
//delete user
router.delete('/:id', controller.removeUser)

//Exporting the router.
module.exports = router;