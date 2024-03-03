import ModeloFuncionario from "./ModeloFuncionarios.js";

export default class Gerente extends ModeloFuncionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(
      `Meu nome é ${this.nome}, tenho ${this.idade} anos, atuo como ${this.cargo} e gerencio o departamento de ${this.departamento}`
    );
  }
}
