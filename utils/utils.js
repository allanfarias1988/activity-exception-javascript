function exibirErro() {
  alert("Por favor preencha todos os campos corretamente!");
  throw new Error(
    "Não pode haver campos vazios ou valores inválidos. Verifique as informações e tente novamente!"
  );
}

function validarObjeto(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (key !== "idade") {
        if (!isNaN(Number(value))) {
          return false;
        }
      }
    }
  }
  return true;
}

export { exibirErro, validarObjeto };
