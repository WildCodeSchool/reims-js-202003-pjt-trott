const express = require('express');
const connection = require('../conf');
const router = express.Router();


router.get('/', (req, res) => {
  connection.query('SELECT * from register', (err, results) => {
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
  connection.query('SELECT * FROM register WHERE ID = ?', id, (err, results) => {
    if(err) {
      return(
        res.status(500).send('Internal server error')
      )
    }
    if (results.length === 0) {
      return(
        res.status(404).send('userId is not found')
      )
    }
    res.json(results)
  });
});

router.post('/', (req, res) => {
  const postUser = req.body;
  console.log(`hello`,req.body);
  if (postUser.username == null || postUser.username == ''){
    res.status(400).send("le nom de l'utilisateur a été mal renseigné")
  }
  connection.query('INSERT INTO register SET ?', postUser, (err, results) => {
    if (err) {
      return (
        res.status(500).send("Erreur lors de la sauvegarde d'un utilisateur")
      )
    }
    res.status(201).json({ ...postUser, id: results.insertId })
  });
});

module.exports = router
