function calcularPedido() {
    const nome = document.getElementById('nome').value.trim();
    const bebidaSelecionada = document.querySelector('input[name="bebida"]:checked');
    const alimentosSelecionados = document.querySelectorAll('input[name="alimentos"]:checked');
    const resultado = document.getElementById('resultado');
  
    if (!nome || !bebidaSelecionada) {
      resultado.innerHTML = `<strong>Por favor, preencha o nome do cliente e selecione uma bebida.</strong>`;
      return;
    }
  
    const precos = {
      'Suco': 4.00,
      'Refrigerante': 2.50,
      'Água': 1.50,
      'Bolo': 3.50,
      'Pastel': 3.00,
      'Torta': 4.00
    };
  
    const bebida = bebidaSelecionada.value;
    let total = precos[bebida];
    let alimentos = [];
  
    alimentosSelecionados.forEach(item => {
      alimentos.push(item.value);
      total += precos[item.value];
    });
  
    resultado.innerHTML = `
      <strong>Cliente:</strong> ${nome}<br>
      <strong>Bebida:</strong> ${bebida}<br>
      <strong>Doces/Salgados:</strong> ${alimentos.length > 0 ? alimentos.join(', ') : 'Nenhum'}<br>
      <strong>Total a pagar:</strong> R$ ${total.toFixed(2)}
    `;
  }
  