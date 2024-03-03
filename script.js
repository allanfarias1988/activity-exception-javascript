import Desenvolvedor from "./class/Desenvolvedor.js";
import Gerente from "./class/Gerente.js";
import { exibirErro, validarObjeto } from "./utils/utils.js";

const buttonSubmit = document.querySelector('button[type="submit"]');

buttonSubmit.addEventListener("click", (event) => {
  alert("Abra o console do DevTools para ver o resultado!");
  event.preventDefault();
  const nome = document.querySelector("#nome").value;
  const idade = document.querySelector("#idade").value;
  const cargo = document.querySelector("#cargo").value;
  const departamento = document.querySelector("#departamento").value;
  const linguagem = document.querySelector("#linguagem").value;
  const container = document.querySelector(".container");

  try {
    const gerente = new Gerente(nome, idade, cargo, departamento);
    const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);

    const possuiCamposVazios = Object.values(desenvolvedor).some(
      (value) => value === "" || value === null
    );

    if (
      possuiCamposVazios ||
      !validarObjeto(gerente) ||
      !validarObjeto(desenvolvedor)
    ) {
      exibirErro();
    }

    console.log(desenvolvedor.programar());
    console.log(gerente.gerenciar());

    container.innerHTML = `
      <div class="hello">
        <p>${desenvolvedor.programar()}</p>
        <p>${gerente.gerenciar()}</p>
      </div>
   `;
  } catch (e) {
    console.error("Error:", e.message);
  }
});
