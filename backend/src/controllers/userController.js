const db = require('../config/db');

// Retorna o nome do usuário
exports.getUser = (req, res) => {
    db.query('SELECT Nome FROM Usuario WHERE ID = ?', [req.params.id], (err, rows) => {
        if (err) {
            res.status(500).send('Erro ao acessar o banco de dados.');
            return;
        }
        if (rows.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
        res.json({ nome: rows[0].Nome });
    });
};

exports.login = (req, res) => {
    const { id, senha } = req.body;
    db.query('SELECT * FROM Usuario WHERE ID = ? AND Senha = ?', [id, senha], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao acessar o banco de dados.');
            return;
        }
        if (results.length === 0) return res.status(401).json({ message: 'Nome ou senha incorretos' });
        res.json({ id: results[0].ID });
    });
};

exports.createUser = (req, res) => {
    const { nome, senha } = req.body;
    db.query('INSERT INTO Usuario (Nome, Senha) VALUES (?, ?)', [nome, senha], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao acessar o banco de dados.');
            return;
        }
        res.status(201).send('Usuário criado com sucesso!');
    });
};
