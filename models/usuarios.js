class usuarios {

    constructor(nome, senha){
        this.nome = nome;
        this.senha = senha;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getSenha() {
        return this.senha;
    }

    setSenha(senha){
        this.senha = senha;
    }

}

module.exports = usuarios;