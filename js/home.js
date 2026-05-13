const input= document.getElementById("atividadeFoco");
const botao= document.getElementById("botaoEnviar");
const listaMaterias= document.getElementById("lista-materias");

// adiciona evento ao botao
botao.addEventListener("click", ()=>{
    // pega o valor do input e coloca em uma variavel
    const valor= input.value;
    // evita valores vazios 
    if(valor.trim()==="") return;

    const li= document.createElement("li");
    li.textContent= valor;

    listaMaterias.appendChild(li);

    input.value= "";
    //  limpa o input 
})