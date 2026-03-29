// Function to update the display in real-time
function updateDisplay() {
  const nome = document.getElementById("nome").value.trim();
  const sobrenome = document.getElementById("sobrenome").value.trim();
  const data = document.getElementById("data").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const estado = document.getElementById("estado").value.trim();

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <h2>Dados Digitados:</h2>
    <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
    <p><strong>Data de Nascimento:</strong> ${data}</p>
    <p><strong>Cidade:</strong> ${cidade}</p>
    <p><strong>Endereço:</strong> ${endereco}</p>
    <p><strong>Estado:</strong> ${estado}</p>
  `;
}

// Add event listeners to inputs for real-time updates
document.getElementById("nome").addEventListener("input", updateDisplay);
document.getElementById("sobrenome").addEventListener("input", updateDisplay);
document.getElementById("data").addEventListener("input", updateDisplay);
document.getElementById("cidade").addEventListener("input", updateDisplay);
document.getElementById("endereco").addEventListener("input", updateDisplay);
document.getElementById("estado").addEventListener("input", updateDisplay);

// Form submit handler with validation
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const nome = document.getElementById("nome").value.trim();
  const sobrenome = document.getElementById("sobrenome").value.trim();
  const data = document.getElementById("data").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const estado = document.getElementById("estado").value.trim();

  // Validation
  let errors = [];
  if (!nome) errors.push("Nome é obrigatório.");
  if (!sobrenome) errors.push("Sobrenome é obrigatório.");
  if (!data) {
    errors.push("Data de nascimento é obrigatória.");
  } else {
    const birthDate = new Date(data);
    const today = new Date();
    if (birthDate > today)
      errors.push("Data de nascimento não pode ser no futuro.");
  }
  if (!cidade) errors.push("Cidade é obrigatória.");
  if (!endereco) errors.push("Endereço é obrigatório.");
  if (!estado) errors.push("Estado é obrigatório.");

  const resultadoDiv = document.getElementById("resultado");
  if (errors.length > 0) {
    resultadoDiv.innerHTML =
      "<h2>Erros de validação:</h2><ul>" +
      errors.map((e) => "<li>" + e + "</li>").join("") +
      "</ul>";
  } else {
    resultadoDiv.innerHTML = `
      <h2>Dados Submetidos com Sucesso</h2>
      <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
      <p><strong>Data de Nascimento:</strong> ${data}</p>
      <p><strong>Cidade:</strong> ${cidade}</p>
      <p><strong>Endereço:</strong> ${endereco}</p>
      <p><strong>Estado:</strong> ${estado}</p>
    `;
    // Clear the display after 5 seconds
    setTimeout(() => {
      resultadoDiv.innerHTML = "";
    }, 5000);
  }
});
