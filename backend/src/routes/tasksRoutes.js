const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da tarefa
 *         nome:
 *           type: string
 *           description: Nome da tarefa
 *         descricao:
 *           type: string
 *           description: Descrição da tarefa
 *         ID_Usuario:
 *           type: integer
 *           description: ID do usuário associado à tarefa
 *       example:
 *         id: 1
 *         nome: Cortar o cabelo
 *         descricao: Cortar o cabelo no salão X às 12h
 *         ID_Usuario: 1
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gerenciamento de tarefas
 */

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Listar todas as tarefas de um usuário
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Lista de tarefas do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao conectar ao banco de dados
 */
router.get('/tasks/:id', tasksController.getUserTasks);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Criar uma nova tarefa
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               ID_Usuario:
 *                 type: integer
 *             example:
 *               nome: Cortar o cabelo
 *               descricao: Cortar o cabelo no salão X às 12h
 *               ID_Usuario: 1
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Erro ao conectar ao banco de dados
 */
router.post('/tasks', tasksController.createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualizar uma tarefa existente
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *             example:
 *               nome: Cortar o cabelo
 *               descricao: Cortar o cabelo no salão X às 12h
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro ao conectar ao banco de dados
 */
router.put('/tasks/:id', tasksController.updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Deletar uma tarefa existente
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro ao conectar ao banco de dados
 */
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;
