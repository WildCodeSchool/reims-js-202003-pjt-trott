const User = require('../models/User');

const getAllUsers = (req, res, next) => {
    User.getAll((err, results, fields) => {
        if (err) return res.json({ error: err });

        res.json({ users: results });
    });
}

module.exports = { getAllUsers }
