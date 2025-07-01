function simularEmprestimo() {
  const valor = parseFloat(document.getElementById("valor").value);
  const parcelas = parseInt(document.getElementById("parcelas").value);
  const juros = parseFloat(document.getElementById("juros").value);

  const resultado = document.getElementById("resultado");

  if (isNaN(valor) || isNaN(parcelas) || isNaN(juros) ||
      valor <= 0 || parcelas < 1 || parcelas > 36 || juros < 0) {
    resultado.textContent = "Preencha os campos corretamente.";
    return;
  }

  const taxaDecimal = juros / 100;

  // Fórmula de prestação com juros compostos (Tabela Price)
  const parcela = valor * ((taxaDecimal * Math.pow(1 + taxaDecimal, parcelas)) /
                          (Math.pow(1 + taxaDecimal, parcelas) - 1));

  const totalPago = parcela * parcelas;
  const totalJuros = totalPago - valor;

  resultado.innerHTML = `
    <p>Parcela mensal: <strong>R$ ${parcela.toFixed(2)}</strong></p>
    <p>Total a pagar: <strong>R$ ${totalPago.toFixed(2)}</strong></p>
    <p>Total de juros: <strong>R$ ${totalJuros.toFixed(2)}</strong></p>
  `;
}
