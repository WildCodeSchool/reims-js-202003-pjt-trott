const express = require('express');
const connection = require('../conf');
const router = express.Router();


router.get('/', (req, res) => {
  connection.query('SELECT * from User', (err, results) => {
    if(err) {
      return(
        res.status(500).send(`We didn't find users `)
      )
    }
    res.json(results)
  })
})

router.get('/:id', (req, res) => {
  const {id} = req.params
  connection.query('SELECT * FROM User WHERE ID = ?', id, (err, results) => {
    if(err) {
      return(
        res.status(500).send('Internal server error')
      )
    }
    if (results.length === 0) {
      return(
        res.status(404).send('UserId is not found')
      )
    }
    res.json(results)
  });
});

module.exports = router

