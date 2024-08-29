const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.MYSQL_DATABASE);
// conexão com o banco de dados
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

// depuração da conexão
db.connect(err => {
    if (err){
        console.log('Erro ao conectar ao banco de dados MySQL.');
        process.exit(1);
    }
    console.log('Conectado ao banco de dados MySQL.');
});

module.exports = db;