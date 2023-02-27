const express = require('express');
const routerC = express.Router();
const mysql = require('mysql');
const usuario = require('../models/usuarios');

// Conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bnd43qhq',
    database: 'livros',
})


// Rota criada para o form cadastrar que tem a função no form de cadastrarU
routerC.get('/', (req, res) => {
    res.render('cadastro')
})

// Função de cadastrar do tipo post
routerC.post('/',(req, res) => {

    // Criação do objeto
    const usuarios = new usuario();
    // Variaveis que irão receber o valor dos inputs
    usuarios.setNome(req.body.nomeC);
    usuarios.setSenha(req.body.senhaC);

    // String SQL
    const sql = `insert into usuarios(nome, senha) values ('${usuarios.getNome()}', '${usuarios.getSenha()}')`   // Com os pontos de interrogações protege o SQL Injection

    conexao.query(sql, (error) => {
        if(error){
            console.log(error);
        }

        res.redirect('/login');
    });
})

module.exports = routerC;