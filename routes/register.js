const express = require('express');
const connection = require('../conf');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
  const postUser = req.body;
  console.log(`hello`,req.body);
  if (postUser.username == null || postUser.username == ''){
    res.status(400).send("le nom de l'utilisateur a été mal renseigné")
  } else {
    bcrypt.hash(postUser.password, 10, function(err, hash) {
      postUser.password = hash
      connection.query('INSERT INTO user SET ?', postUser, (err, results) => {
        if (err) {
          return (
            res.status(500).send("Erreur lors de la sauvegarde d'un utilisateur")
          )
        } else {
        res.status(201).json({ ...postUser, id: results.insertId })
        }
      });
    });
  }
});
  

module.exports = router
