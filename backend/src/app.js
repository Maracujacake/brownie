const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200' // URL do frontend
  }));


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
