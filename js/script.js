import "./home.js";
import "./imersao.js";
import "./anotacoes.js";

const appSaudacao = document.getElementById("appSaudacao");
const dataHora = document.getElementById("data-hora");

function atualizarDataHora() {
  const agora = new Date();

  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  // saudação

  let saudacao = "";

  if (hora > 12) {
    saudacao = "Bom Dia";
  } else if (hora > 18) {
    saudacao = "Boa Tarde";
  } else {
    saudacao = "Boa Noite";
  }

  //   formatar hora

  const horaFormatada = String(hora).padStart(2, "0");
  const minutosFormatados = String(minutos).padStart(2, "0");
  const segundosFormatados = String(segundos).padStart(2, "0");

  //   formatar data

  const data = agora.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  appSaudacao.textContent = saudacao;
  dataHora.textContent = ` ${data} - ${horaFormatada}:
  ${minutosFormatados}`;
}

// atalizar a cada segundo
setInterval(atualizarDataHora, 1000);

// executa uma vez ao carregar
atualizarDataHora();

// adicionando select nos botoes

const paginaAtual = window.location.pathname;

document.querySelectorAll(".botao").forEach((botao) => {
  const link = botao.getAttribute("href");

  if (link === paginaAtual) {
    botao.classList.add("select");
  }
});
