const express = require('express');
const connection = require('../conf');
const router = express.Router();

router.post('/', (req, res) => {
  const postUser = req.body;
  console.log(`hello`,req.body);
  if (postUser.username == null || postUser.username == ''){
    res.status(400).send("le nom de l'utilisateur a été mal renseigné")
  }
  connection.query('INSERT INTO user SET ?', postUser, (err, results) => {
    if (err) {
      return (
        res.status(500).send("Erreur lors de la sauvegarde d'un utilisateur")
      )
    }
    res.status(201).json({ ...postUser, id: results.insertId })
  });
});

module.exports = router
