const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/auth-controller');
const connection = require('../conf');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM login', (err, results) => {
        if (err) {
            return res.status(500).send('Error')
        }
        res.json(results)
    })
})

router.post('/login', loginUser);

module.exports = router;
