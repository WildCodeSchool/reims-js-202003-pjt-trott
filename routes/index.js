const express = require('express');
const users = require('./user')

const login = require('./login')

const router = express.Router();

const { getAllUsers } = require('../controllers/users-controller');
const { authenticateWithJwt } = require('../services/jwt');

router.get('/users', authenticateWithJwt, getAllUsers);
/*router.use('/users', users);*/
router.use('/login', login);
const register = require('./register')
router.use('/register', register);


module.exports = router;