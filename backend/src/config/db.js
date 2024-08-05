const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.DB_NAME);
// conexão com o banco de dados
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
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