const express = require('express');
const users = require('./user')
const login = require('./login')
const register = require('./register')

const router = express.Router();

const { getAllUsers } = require('../controllers/users-controller');
const { authenticateWithJwt } = require('../services/jwt');
const register = require('./routes/register');

router.get('/login', authenticateWithJwt, getAllUsers);
router.use('/users', users);
router.use('/auth', login);
router.use('/register', register);

module.exports = router;