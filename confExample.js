const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'user_name', // le nom d'utilisateur
password :  'password', // le mot de passe
database :  'database_name', // le nom de la base de données
});
module.exports = connection;
