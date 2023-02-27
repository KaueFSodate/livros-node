class livros {

    constructor(nome, categoria, quantidade){
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria){
        this.categoria = categoria;
    }


    getQuantidade() {
        return this.quantidade;
    }

    setQuantidade(quantidade){
        this.quantidade = quantidade;
    }

}

module.exports = livros;