function adicionarLinha() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const cidade = document.getElementById("cidade").value;

  if (nome && idade && cidade) {
    const tabela = document
      .getElementById("minhaTabela")
      .getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = idade;
    novaLinha.insertCell(2).innerText = cidade;

    // Botão de excluir
    const cellAcoes = novaLinha.insertCell(3);
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Excluir";
    botaoExcluir.className = "delete-btn";
    botaoExcluir.onclick = function () {
      excluirLinha(botaoExcluir);
    };
    cellAcoes.appendChild(botaoExcluir);

    // Limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("cidade").value = "";
  } else {
    alert("Preencha todos os campos!");
  }
}

function excluirLinha(botao) {
  const linha = botao.parentNode.parentNode;
  linha.remove();
}
