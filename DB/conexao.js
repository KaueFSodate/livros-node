const mysql = require('mysql');

// Conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bnd43qhq',
    database: 'livros',
})

module.exports = conexao;