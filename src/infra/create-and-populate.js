/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//==== Usuários
const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Users" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" varchar(64),
    "email" varchar(64),
    "password" varchar(64)
  );`;

const ADD_USUARIOS_DATA = `
INSERT INTO Users (id, name, email, password)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '*******'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '********'),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '********')
`

function criaTabelaUsr() {
    db.run(USUARIOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populaTabelaUsr() {
    db.run(ADD_USUARIOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


//==== Tarefas
const TAREFAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS Tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    title VARCHAR(64),
    description TEXT,
    status VARCHAR(32),
    date_creation VARCHAR(32),
    id_user INTEGER,
    FOREIGN KEY(id_user) REFERENCES Users(id)
);`;

const ADD_TAREFAS_DATA = `INSERT INTO Tasks (title, description, status, date_creation, id_user)
VALUES 
       ('Yoga', 'Fazer yoga segunda e quarta', 'Continuo', '2021-01-10', 2),
       ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO', '2021-01-13', 1),
       ('Pagar contas', 'Pagar boletos de água e luz', 'DOING', '2021-01-02', 2),
       ('Mercado', 'Pegar lista na geladeira e fazer compras', 'TODO', '2021-01-08', 2),
       ('Dentista', 'Consulta com Dra Andreia sexta', 'TODO', '2021-01-11', 1),
       ('Pagar financiamento carro', 'Pagar parcela do mês do financiamento', 'Contínuo', '2021-01-05', 3)
`

function criaTabelaTarefas() {
    db.run(TAREFAS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de Tarefas");
    });
}


function populaTabelaTarefas() {
    db.run(ADD_TAREFAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Tarefas");
    });
}

db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
    criaTabelaTarefas();
    populaTabelaTarefas();
});