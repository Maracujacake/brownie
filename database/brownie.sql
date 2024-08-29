-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS brownie;
USE brownie;

-- Criação da Tabela Usuario
CREATE TABLE Usuario (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Senha VARCHAR(100)
);

-- Criação da Tabela Tarefa
CREATE TABLE Tarefa (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    Descricao VARCHAR(255),
    ID_Usuario INT,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID)
);

-- Inserção de Dados
INSERT INTO Usuario (Nome, Senha) VALUES ('Lara', 'Lara');
INSERT INTO Tarefa (Nome, Descricao, ID_Usuario) VALUES ('Cortar o cabelo', 'Cortar o cabelo no salão X às 12h', 1);
