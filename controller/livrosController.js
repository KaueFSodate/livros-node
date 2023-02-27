const livros = require('../models/livrosM')
const conexao = require('../DB/conexao');




module.exports = class livrosController{

    static mostrarLivros(req, res) {    // Mostrar o livros.handlebars na rota /
    
        // String do select
        const sql = 'SELECT *FROM livraria'
    
        conexao.query(sql, (error, data) => { // data é os dados do SELECT
    
            if(error){ // Se retornar erro
                console.log(error);
                return;
            }
    
            const livros = data;
    
            res.render('livros', {livros}); // Renderizar o form livros com o argumento livros e passar para o form livros.handlebars
    
        });
    }

    static cadastrarLivro(req, res) {

            // Criação do objeto
            const livr = new livros();  // Objeto recebendo o valor dos inputs
            livr.setNome(req.body.nome);
            livr.setCategoria(req.body.categoria);
            livr.setQuantidade(req.body.quantidade);
        
            // String SQL
            const sql = `insert into livraria(??, ??, ??) values (?,?,?)`   // Com os pontos de interrogações protege o SQL Injection
            const data =['nome', 'categoria', 'quantidade', livr.getNome(), livr.getCategoria(), livr.getQuantidade()]
            conexao.query(sql, data, (error) => {
                if(error){
                    console.log(error);
                }
        
                res.redirect('/livros');
            });
    }

    static deletar (req, res) {

    const idlivraria = req.params.idlivraria;

    // String do delete
    const sql = `DELETE FROM livraria WHERE (idlivraria = '${idlivraria}');`

    conexao.query(sql, (error) => {

        if(error){ // Se retornar erro
            console.log(error);
            return;
        }

        res.render('livros'); // Após deletar ira renderizar o form livros

    });
    }

}