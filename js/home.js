const input = document.getElementById("atividadeFoco");
const botao = document.getElementById("botaoEnviar");
const lista = document.getElementById("lista-materias");

botao.addEventListener("click", () => {
  const valor = input.value;

  if (valor.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = valor;

  lista.appendChild(li);

  input.value = "";
});
