export default class ModeloFuncionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }
  seApresentar() {
    console.log(`Meu nome é: ${this.nome}, tenho ${this.idade}.`);
  }

  trabalhar() {
    console.log(`Trabalho no cargo de ${this.cargo} `);
  }
}
