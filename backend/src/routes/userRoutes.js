const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nome
 *         - senha
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do usuário
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         senha:
 *           type: string
 *           description: Senha do usuário
 *       example:
 *         id: 1
 *         nome: Lara
 *         senha: Lara
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Obter nome do usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Nome do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nome:
 *                   type: string
 *                   description: Nome do usuário
 *               example:
 *                 nome: Lara
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao conectar ao banco de dados
 */
router.get('/user/:id', userController.getUser);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Validar login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               senha:
 *                 type: string
 *             example:
 *               nome: Lara
 *               senha: Lara
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de sucesso
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       401:
 *         description: Nome ou senha inválidos
 *       500:
 *         description: Erro ao conectar ao banco de dados
 */
router.post('/login', userController.login);

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Criar um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de sucesso
 *                 userId:
 *                   type: integer
 *                   description: ID do usuário criado
 *               example:
 *                 message: Usuário criado com sucesso
 *                 userId: 1
 *       500:
 *         description: Erro ao conectar ao banco de dados
 */
router.post('/create', userController.createUser);

module.exports = router;
