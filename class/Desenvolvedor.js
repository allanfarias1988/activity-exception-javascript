import ModeloFuncionario from "./ModeloFuncionarios.js";

export default class Desenvolvedor extends ModeloFuncionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(
      `Meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.cargo} e programo em ${this.linguagem}`
    );
  }
}
