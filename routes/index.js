const express = require('express');
const users = require('./user')
const register = require('./register')

const router = express.Router();

router.use('/users', users);
router.use('/register', register);

module.exports = router;