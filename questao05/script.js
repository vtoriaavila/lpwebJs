function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const texto = input.value.trim();
  
    if (texto === "") {
      alert("A tarefa não pode estar vazia.");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = texto;
  
    // Marcar como concluída ao clicar
    li.addEventListener("click", () => {
      li.classList.toggle("concluida");
    });
  
    // Botão de remover
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => li.remove();
  
    li.appendChild(botaoRemover);
    document.getElementById("listaTarefas").appendChild(li);
  
    input.value = "";
    input.focus();
  }
  