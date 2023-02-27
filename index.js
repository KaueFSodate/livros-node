// Importando os módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const livros = require('./routes/livros');
const edicao = require('./routes/editar');
const login = require('./routes/lojin');
const cadastrar = require('./routes/cadastrarU');
const port = 8000;
const app = express();

// Configuração para acessar o handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(express.static('public')); // Linkar o css

// Pegar as informações do body
app.use(express.urlencoded({
    extended: true

    })
)

app.use('/livros', livros); // Rotas dos livros

app.use('/editar', edicao); // Rotas para editar

app.use('/login', login); // Rotas para editar

app.use('/cadastrarU', cadastrar); // Rotas para editar


app.listen(port, () =>{
    console.log(`Server rodando na porta ${port}`)
})