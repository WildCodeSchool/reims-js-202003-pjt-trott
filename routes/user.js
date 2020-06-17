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

router.post('/', (req, res) => {
  const postUser = req.body;
  if (postUser.lastname == null || postUser.lastname == ''){
    res.status(400).send("le nom de l'utilisateur a été mal renseigné")
  }
  connection.query('INSERT INTO User SET ?', postUser, (err, results) => {
    if (err) {
      return (
        res.status(500).send("Erreur lors de la sauvegarde d'un utilisateur")
      )
    }
    res.status(201).json({ ...postUser, id: results.insertId })
  });
});


router.put('/:id', (req, res) => {

  const putUser = req.params.id;
  const formData = req.body;
  connection.query('UPDATE User SET ? WHERE ID = ?', [formData, putUser], (err, results) => {
    if (err) {
      return (
        res.status(500).send("Erreur lors de la modification des donneés")
      )
    }
    if (results.changedRows === 0) {
      return (
        res.status(404).send('User ID non trouvé')
      )
    }
    res.status(200).send({...formData});
  });
});

router.delete('/:id', (req, res) => {
  const deleteUser = req.params.id;

  connection.query('DELETE FROM User WHERE id = ?', [deleteUser], err => {
    if (err) {
      return (
        res.status(500).send("Internal server error")
      )
    } else {
      res.sendStatus(200);
    }
  });
});


module.exports = router

