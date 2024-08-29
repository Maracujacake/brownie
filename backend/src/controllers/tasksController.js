const db = require('../config/db');

exports.getUserTasks = (req, res) => {
    db.query('SELECT * FROM Tarefa WHERE ID_Usuario = ?', [req.params.id], (err, rows) => {
        if (err) {
            res.status(500).send('Erro ao acessar o banco de dados.');
            return;
        }
        res.json(rows);
    });
};

exports.createTask = (req, res) => {
    const { ID_Usuario, descricao, Nome } = req.body;
    db.query('INSERT INTO Tarefa (ID_Usuario, Descricao, Nome) VALUES (?, ?, ?)', [ID_Usuario, descricao, Nome], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao acessar o banco de dados.');
            return;
        }
        res.status(201).json({ message: 'Tarefa criada com sucesso!', id: results.insertId });
    });
};

exports.updateTask = (req, res) => {
    const { descricao, Nome } = req.body;
    db.query('UPDATE Tarefa SET Descricao = ?, Nome = ? WHERE ID = ?', [descricao, Nome, req.params.id], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao acessar o banco de dados.');
            return;
        }
        if (results.affectedRows === 0) return res.status(404).send('Tarefa não encontrada.');
        res.status(200).send('Tarefa atualizada com sucesso!');
    });
};

exports.deleteTask = (req, res) => {
    db.query('DELETE FROM Tarefa WHERE ID = ?', [req.params.id], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao acessar o banco de dados.');
            return;
        }
        if (results.affectedRows === 0) return res.status(404).send('Tarefa não encontrada.');
        res.status(200).send('Tarefa deletada com sucesso!');
    });
};
