const input= document.getElementById("tempoLimite");
const btnEnviar= document.getElementById("start-timer");
const display= document.getElementById("display");

let intervalo;

btnEnviar.addEventListener("click", ()=>{
    // converte o valor do input para numero 
    let minutos= Number(input.value);

    // evita valores invalidos
    if(minutos<=0) return;
    let tempo= minutos* 60;

    clearInterval(intervalo);

    intervalo= setInterval(()=>{
        let min= Math.floor(tempo/60);
        let seg= tempo% 60;

        // adiciona o zero a esquerda
        min=String(min).padStart(2,"0");
        seg=String(seg).padStart(2,"0");

        display.textContent=`${min}:${seg}`;
        tempo--;
        
        if(tempo<0){
            clearInterval(intervalo);
            display.textContent= "00:00";
        }
    },1000);
});