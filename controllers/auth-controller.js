const User = require('../models/User');
const { createToken } = require('../services/jwt');
const connection = require('../conf');
const bcrypt = require('bcrypt');

const loginUser = (req, res, next) => {
	const { username, password } = req.body;
	User.findByUsername(username, password, (err, user) => {
		console.log(user)
		if (err) {
			res.status(500).send('Erreur')
		}
		if (!user) {
		res.status(404).json({ error: 'Erreur lors de la saisie du nom ou du mot de passe' })
		}
		bcrypt.compare(password, user.password, function(err, results) {
      if (results) {
				const token = createToken(user);
				res.json({ user, token });
      } else {
				res.status(500).json({message: "mot de passe ou nom d'utilisateur invalide"})
      } 
		});
	})
};

module.exports = { loginUser };
