const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API de Gerenciamento de Usuários e Tarefas',
        version: '1.0.0',
        description: 'API para gerenciamento de usuários e suas tarefas',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor local',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerApp = express();
swaggerApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = swaggerApp;
