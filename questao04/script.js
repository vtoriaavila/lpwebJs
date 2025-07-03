const perguntas = [
    {
      pergunta: "Qual a capital do Brasil?",
      opcoes: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
      respostaCorreta: "Brasília"
    },
    {
      pergunta: "Qual linguagem é usada para estilizar páginas web?",
      opcoes: ["HTML", "Python", "CSS", "Java"],
      respostaCorreta: "CSS"
    },
    {
      pergunta: "Qual é o resultado de 3 * 4?",
      opcoes: ["7", "10", "12", "14"],
      respostaCorreta: "12"
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
        resultadoHTML += `<p>Pergunta ${index + 1}: ✔️ Correta</p>`;
      } else {
        resultadoHTML += `<p>Pergunta ${index + 1}: ❌ Errada (Resposta correta: ${q.respostaCorreta})</p>`;
      }
    });
  
    let mensagemFinal = "";
    if (pontuacao === 3) {
      mensagemFinal = "🎉 Excelente! Você acertou tudo!";
    } else if (pontuacao === 2) {
      mensagemFinal = "👍 Muito bem! Só errou uma.";
    } else if (pontuacao === 1) {
      mensagemFinal = "😕 Você acertou apenas uma. Estude um pouco mais!";
    } else {
      mensagemFinal = "😢 Nenhuma correta. Tente novamente!";
    }
  
    resultadoHTML += `<p><strong>Pontuação Final:</strong> ${pontuacao}/3</p>`;
    resultadoHTML += `<p>${mensagemFinal}</p>`;
  
    document.getElementById("resultado").innerHTML = resultadoHTML;
  }
  