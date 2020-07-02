const User = require('../models/User');
const { createToken } = require('../services/jwt');

const loginUser = (req, res, next) => {
    User.findByEmailAndPassword(req.body.email, req.body.password, (err, user, fields) => {
        if (err) return res.json({ error: err });

        if (!user) return res.json({ error: 'email or password incorrect'});

        const token = createToken(user);
        res.json({ user, token });
    })
}

module.exports = { loginUser };
