const express = require('express');
const routerr = express.Router();
const mysql = require('mysql');

// Conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bnd43qhq',
    database: 'livros',
})



// Mostrar o livro que será editado
routerr.get('/:idlivraria', (req, res) => {  // Mostrar o editar.handlebars com argumento de id
    
    const idlivraria = req.params.idlivraria;

    // String do select
    const sql = `SELECT *FROM livraria where idlivraria =${idlivraria}`

    conexao.query(sql, (error, data) => { // data é os dados do SELECT

        if(error){ // Se retornar erro
            console.log(error);
            return;
        }

        const livros = data[0]; // Armazena o valor do select na variavel livros

        res.render('editar', {livros}); // Renderizar o form editar com o argumento editar e passar para o form editar.handlebars

    });

})

// Editar o livro
routerr.post('/',(req, res) => { // Após entrar no editar.handlebars ira utiilzar a função de /editar do form

    // Variaveis que irão receber o valor dos inputs
    const id = req.body.idlivraria
    const nome = req.body.nome
    const categoria = req.body.categoria
    const quantidade = req.body.quantidade

    // String SQL
    const sql = `update livraria set nome = '${nome}', categoria ='${categoria}', quantidade ='${quantidade}' where idlivraria = '${id}'`

    conexao.query(sql, (error) => {
        if(error){
            console.log(error);
        }

        res.redirect('/livros');
    });
})

module.exports = routerr;