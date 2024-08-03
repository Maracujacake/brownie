const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
app.use(express.json());
console.log(process.env.DB_HOST); // Deve imprimir 'localhost'
console.log(process.env.DB_HOST); // Deve imprimir 'localhost'
console.log(process.env.DB_HOST); // Deve imprimir 'localhost'
console.log(process.env.DB_HOST); // Deve imprimir 'localhost'
console.log(process.env.DB_HOST); // Deve imprimir 'localhost'


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// teste de conexão
db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL.');
});

app.get('/', (req, res) => {
    res.send('Servidor Express funcionando!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// node app.js para executar