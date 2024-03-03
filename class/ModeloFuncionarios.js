export default class ModeloFuncionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }
  seApresentar() {
    return `Meu nome é: ${this.nome}, tenho ${this.idade}.`;
  }

  trabalhar() {
    return `Trabalho no cargo de ${this.cargo} `;
  }
}
