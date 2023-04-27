let parcial="";



let operRealizada=document.getElementById("operacionRealizadas");

let txtResul=document.getElementById("txtResultado");

let operadorSelecionado ="";


let numero ="";


let ultimoDigitoPresionado = "";



function operador(num){
    numero = numero + num;
    parcial = parcial+ num;
    operRealizada.innerHTML = parcial;
if(numero=='0'&& operadorSelecionado=='/'){
    limpiar();
    txtResul.innerHTML="indefinido";
    return;
}
if(ultimoDigitoPresionado=='operacion'){
    ultimoDigitoPresionado= 'numero'
}
}
function operacion(oper){
    
    operadorSelecionado=oper;
    ultimoDigitoPresionado="operacion";
    parcial=parcial+oper;
    numero="";
    operRealizada.innerHTML = parcial;
}
function calculo(){
    parcial= eval(parcial);
    txtResul.innerHTML= parcial
    parcial=parcial.toString();
    numero="";
    operRealizada.innerHTML=parcial;
}

function limpiar(){
    operadorSelecionado="";
    parcial="";
    txtResul.innerHTML="";
    numero="";
    operRealizada.innerHTML=0;
}

