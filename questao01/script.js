function converterData() {
  const dataInput = document.getElementById("data").value.trim();
  const resultado = document.getElementById("resultado");
  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
                 "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

  const partes = dataInput.split("/");

  if (partes.length !== 3) {
    resultado.textContent = "Formato inválido. Use dd/mm/aaaa.";
    return;
  }

  let [dia, mes, ano] = partes.map(Number);

  if (
    isNaN(dia) || isNaN(mes) || isNaN(ano) ||
    dia < 1 || mes < 1 || mes > 12 || ano < 1
  ) {
    resultado.textContent = "Data inválida.";
    return;
  }

  const diasPorMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30,
                      31, 31, 30, 31, 30, 31];

  if (dia > diasPorMes[mes - 1]) {
    resultado.textContent = "Dia inválido para o mês informado.";
    return;
  }

  if (ehBissexto(ano)) {
  resultado.textContent = `${dia} de ${meses[mes - 1]} de ${ano} \n ano bissexto`;
  return;
}


  resultado.textContent = `${dia} de ${meses[mes - 1]} de ${ano}`;
}

function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
