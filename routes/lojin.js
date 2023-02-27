const express = require('express');
const routerU = express.Router();
const usuario = require('../models/usuarios');
const mysql = require('mysql');
const usuarios = require('../models/usuarios');

// Conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bnd43qhq',
    database: 'livros',
})

// Mostrar os livros
routerU.get('/', (req, res) => {   // Mostrar o login.handlebars na rota /login
    
    res.render('login')
    // String do select
    
})


// Credencial
routerU.post('/acessar', (req, res) => {    // Utilizar a função de acessar que está no formulário do /login

    const usuario = new usuarios();
    // Pegar o valor dos inputs
    usuario.setNome(req.body.nomeU);
    usuario.setSenha(req.body.senha);

    const sql = `SELECT *FROM usuarios where nome = '${usuario.getNome()}' and senha = '${usuario.getSenha()}'`   // String sql

    conexao.query(sql, (error, data) => { // data é os dados do SELECT

        if(error){ // Se retornar erro
            console.log(error);
            return;
        }

        const usuario = data[0];
        
            if(usuario){    // Se tiver valor no select ira entrar na tela de livros
                res.render('livros');
            }else{
                res.render('login');
            }
    });

})

module.exports = routerU;