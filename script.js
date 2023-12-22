const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");


//variaveis globais

let operaçaoAtual = "";
let operador = null ;
let valorAnterior = "";
let Calculando = false ;

//Funçoes
function atualizaDisplay(){
    display.value = operaçaoAtual;
}
function insereNumero(evento){
    if(Calculando){
     operaçaoAtual = evento.target.textContent;
     Calculando = false;
    }else {
        operaçaoAtual += evento.target.textContent;
    };
  
 atualizaDisplay();
};


 function insereOperador(evento){
    if(operaçaoAtual !== ""){
        if(operador !== null){
         Calculando();
        }
        valorAnterior=operaçaoAtual;
        operaçaoAtual = "";
    }
     operador = evento.target.textContent;
 }
 function calcula(){
 const operandoAnterior= parseInt(valorAnterior);
 const operandoAtual = parseInt(operaçaoAtual);

    switch(operador) {
        case "+":
            resultado = operandoAnterior + operandoAtual;
            break;
        case "-":
            resultado = operandoAnterior - operandoAtual;
            break;
        case "*":
            resultado = operandoAnterior * operandoAtual;
            break;
        case "/":
            resultado = operandoAnterior / operandoAtual;
            break;
    }
    operaçaoAtual = String(resultado);
    valorAnterior = operaçaoAtual;
    Calculando = true ;
    atualizaDisplay();

    
 }
 function inserePonto(){
    if (operaçaoAtual.indexOf(".") === -1){
        operaçaoAtual += "." ;
        atualizaDisplay();
    };
 };

//eventos
botaoPonto.addEventListener("click",inserePonto);
botoesNumeros.forEach((botao) => botao.addEventListener("click",insereNumero));
botoesOperadores.forEach((botao) =>
botao.addEventListener("click",insereOperador)
);
botaoIgual.addEventListener("click",calcula);