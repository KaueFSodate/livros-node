const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosController')


router.get('/', controller.mostrarLivros);

// Função de cadastrar do tipo post
router.post('/cadastrar', controller.cadastrarLivro)

// Deletar o livro
router.get('/deletar/:idlivraria', controller.deletar)



module.exports = router;