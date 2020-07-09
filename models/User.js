const connection = require('../conf');
const User = {};

const cleanUser = (user) => {
    return user ?
        {
            ...user,
            password: 'hidden'
        } :
        undefined;
};
 
 
User.findByUsername = (username, callback) => {
    connection.query(
        `SELECT * FROM user WHERE username = ?`,
        [username],
        (err, results, fields) => callback(err, results[0], fields)
    )
}

User.getAll = (callback) => {
    connection.query(
        `SELECT id, email FROM user`,
        (err, results, fields) => callback(err, results, fields)
    )
}
 
module.exports = User;
