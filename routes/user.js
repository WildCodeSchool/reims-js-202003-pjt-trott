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

/*--- ---  --- ---  PARTIE GET   --- ---   ---  ---

app.get('/api/employees', (req, res) => {
    connection.query('SELECT * from employee', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des employés');
      } else {
        res.json(results);
      }
    });
  });
  
  app.get('/api/movies', (req, res) => {
    connection.query('SELECT * from movie', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des films');
      } else {
        res.json(results);
      }
    });
  });
  
  app.get('/api/movies/names', (req, res) => {
    connection.query('SELECT name from movie', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des noms de films');
      } else {
        res.json(results);
      }
    });
  });
  
  /*--- ---  --- ---  PARTIE GET One  .params --- ---   ---  ---*/
  /*app.get('/api/employees/:id', (req, res) => {
    const idEmployee = req.params.id;
    console.log(req.params)
    connection.query('SELECT * FROM employee WHERE id = ?', [idEmployee] , (err, results) => {
      if (err) {
        res.status(500).send(`Erreur lors de la récupération d'employé`);
      } else if ( results.length === 0 ){
        return res.status(404).send(`Employé non trouvé`);
      } else  {
        res.json(results[0]);
      }
    });
  });
  
  /*--- ---  --- ---  PARTIE GET One  .query --- ---  ---  ---*/
  /*app.get('/api/employees', (req, res) => {
    let sql = 'SELECT * FROM employee';
    const sqlValues = [];
    if (req.query.hired_year) {
      sql += ' WHERE hired_year = ?';
      sqlValues.push(req.query.hired_year);
    }
    // send an SQL query to get all employees
    connection.query(sql, sqlValues, (err, results) => {
      if (err) {
        // If an error has occurred, then the client is informed of the error
        res.status(500).send(`An error occurred: ${err.message}`);
      } else {
        // If everything went well, we send the result of the SQL query as JSON
        res.json(results);
      }
    });
  });
  
  
  /*--- ---  --- ---  PARTIE POST   --- ---   ---  ---*/
  /*
  // écoute de l'url "/api/employees" avec le verbe POST
  app.post('/api/employees', (req, res) => {
  
    // récupération des données envoyées
    const formData = req.body;
  
    // connexion à la base de données, et insertion de l'employé
    connection.query('INSERT INTO employee SET ?', formData, (err, results) => {
  
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur lors de la sauvegarde d'un employé");
      } else {
        // Si tout s'est bien passé, on envoie un statut "ok".
        res.sendStatus(200);
      }
    });
  });
  
  
  app.post('/api/movies', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO movie SET ?', formData, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la sauvegarde d'un film");
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  /*--- ---  --- ---  PARTIE PUT   --- ---   ---  ---*/
  /*
  // écoute de l'url "/api/employees"
  app.put('/api/employees/:id', (req, res) => {
  
    // récupération des données envoyées
    const idEmployee = req.params.id;
    const formData = req.body;
  
    // connection à la base de données, et insertion de l'employé
    connection.query('UPDATE employee SET ? WHERE id = ?', [formData, idEmployee], err => {
  
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'un employé");
      } else {
  
        // Si tout s'est bien passé, on envoie un statut "ok".
        res.sendStatus(200);
      }
    });
  });
  
  
  app.put('/api/movies/:name', (req, res) => {
    const idFilm = req.params.name;
    const formData = req.body;
    connection.query('UPDATE movie SET ? WHERE name = ?', [formData, idFilm], err => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'un film");
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  /*--- ---  --- ---  PARTIE DELETE   --- ---   ---  ---*/
  /*
  // écoute de l'url "/api/employees"
  app.delete('/api/employees/:id', (req, res) => {
  
    // récupération des données envoyées
    const idEmployee = req.params.id;
  
    // connexion à la base de données, et suppression de l'employé
    connection.query('DELETE FROM employee WHERE id = ?', [idEmployee], err => {
  
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'un employé");
      } else {
  
        // Si tout s'est bien passé, on envoie un statut "ok".
        res.sendStatus(200);
      }
    });
  });
  
  
  
  app.delete('/api/movies/:id', (req, res) => {
    const idEmployee = req.params.id;
    connection.query('DELETE FROM movie WHERE id = ?', [idEmployee], err => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'un film");
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  
  
  */