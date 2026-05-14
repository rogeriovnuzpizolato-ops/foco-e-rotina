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

// adicao da logica da pagina home

const input = document.getElementById("atividadeFoco");
const botao = document.getElementById("botaoEnviar");
const lista = document.getElementById("lista-materias");

if (botao) {
  botao.addEventListener("click", () => {
    const valor = input.value;

    if (valor.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = valor;

    lista.appendChild(li);

    input.value = "";
  });
}

// adicao da logica pagina imersao

const inputImersao = document.getElementById("tempoLimite");
const botaoTimer = document.getElementById("start-timer");
const display = document.getElementById("display");

let intervalo;

if (botaoTimer) {
  botaoTimer.addEventListener("click", () => {
    let minutos = Number(inputImersao.value);

    if (minutos <= 0) return;
    let tempo = minutos * 60;

    clearInterval(intervalo);

    intervalo = setInterval(() => {
      let min = Math.floor(tempo / 60);
      let seg = tempo % 60;

      min = String(min).padStart(2, "0");
      seg = String(seg).padStart(2, "0");

      display.textContent = `${min}:${seg}`;
      tempo--;

      if (tempo < 0) {
        clearInterval(intervalo);
        display.textContent = "00:00";
      }
    }, 1000);
  });
}

// adição da logica da pagina anotações

const anotacoesBtn= document.getElementById("btnAnotacoes");
const inputAnotacoes= document.getElementById("anotacoes");
const listaAnotacoes= document.getElementById("listaAnotacoes");

if(anotacoesBtn){
  anotacoesBtn.addEventListener("click",()=>{
    const anotacao= inputAnotacoes.value;
    if(anotacao.trim()=== "")return;
    
    const anotacaoLi= document.createElement("li");
    anotacaoLi.textContent= anotacao;

    listaAnotacoes.appendChild(anotacaoLi);

    inputAnotacoes.value= "";
  })
}
