const connection = require('../conf');
const User = {};

const cleanUser = (user) => {
    return user ?
        {
            ...user,
            passwordHash: 'hidden'
        } :
        undefined;
};
 
 
User.findByEmailAndPassword = (email, password, callback) => {
    connection.query(
        `SELECT * FROM login WHERE email = ? AND passwordHash = SHA2(?, 256)`,
        [email, password],
        (err, results, fields) => callback(err, cleanUser(results), fields)
    )
}

User.getAll = (callback) => {
    connection.query(
        `SELECT id, email FROM login`,
        (err, results, fields) => callback(err, results, fields)
    )
}
 
module.exports = User;
