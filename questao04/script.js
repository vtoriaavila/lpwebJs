const perguntas = [
  {
    pergunta: "Qual é o nome do amigo rosa do Bob Esponja?",
    opcoes: ["Lula Molusco", "Patrick", "Sandy", "Sr. Siriguejo"],
    respostaCorreta: "Patrick"
  },
  {
    pergunta: "Qual é o nome do cachorro do Mickey Mouse?",
    opcoes: ["Pateta", "Pluto", "Max", "Bolt"],
    respostaCorreta: "Pluto"
  },
  {
    pergunta: "Em que cidade vive a turma do Scooby-Doo?",
    opcoes: ["Coolsville", "Springfield", "Bedrock", "Bikini Bottom"],
    respostaCorreta: "Coolsville"
  }
];

  
  const quizForm = document.getElementById("quizForm");
  
  // Cria dinamicamente o quiz
  perguntas.forEach((q, index) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = `${index + 1}. ${q.pergunta}`;
    fieldset.appendChild(legend);
  
    q.opcoes.forEach(opcao => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `pergunta${index}`;
      input.value = opcao;
      label.appendChild(input);
      label.append(` ${opcao}`);
      fieldset.appendChild(label);
    });
  
    quizForm.appendChild(fieldset);
  });
  
  function corrigirQuiz() {
    let pontuacao = 0;
    let resultadoHTML = "";
  
    perguntas.forEach((q, index) => {
      const selecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);
      const resposta = selecionada ? selecionada.value : "Não respondida";
  
      if (resposta === q.respostaCorreta) {
        pontuacao++;
        resultadoHTML += `<p>Pergunta ${index + 1}: V Correta</p>`;
      } else {
        resultadoHTML += `<p>Pergunta ${index + 1}: X Errada (Resposta correta: ${q.respostaCorreta})</p>`;
      }
    });
  
    let mensagemFinal = "";
    if (pontuacao === 3) {
      mensagemFinal = " Excelente! Você acertou tudo!";
    } else if (pontuacao === 2) {
      mensagemFinal = " Muito bem! Só errou uma.";
    } else if (pontuacao === 1) {
      mensagemFinal = " Você acertou apenas uma. Estude um pouco mais!";
    } else {
      mensagemFinal = " Nenhuma correta. Tente novamente!";
    }
  
    resultadoHTML += `<p><strong>Pontuação Final:</strong> ${pontuacao}/3</p>`;
    resultadoHTML += `<p>${mensagemFinal}</p>`;
  
    document.getElementById("resultado").innerHTML = resultadoHTML;
  }
  