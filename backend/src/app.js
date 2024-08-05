const express = require('express');
const app = express();
app.use(express.json());

const taskRoutes = require('./routes/tasksRoutes');
const userRoutes = require('./routes/userRoutes');
const configureSwagger = require('./config/swagger');

// Use prefixos diferentes para as rotas
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

// Configure o Swagger
configureSwagger(app);

app.get('/', (req, res) => {
    res.send('Servidor Express funcionando!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
