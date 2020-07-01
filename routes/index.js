const express = require('express');
const users = require('./user')
const login = require('./login')

const router = express.Router();

const { getAllUsers } = require('../controllers/users-controller');
const { authenticateWithJwt } = require('../services/jwt');

router.get('/login', authenticateWithJwt, getAllUsers);
router.use('/users', users);
router.use('/auth', login);

module.exports = router;