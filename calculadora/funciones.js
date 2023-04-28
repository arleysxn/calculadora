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
function borrarUltimoDigito() {
    numero = numero.slice(0, -1);
    parcial = parcial.slice(0, -1);
    operRealizada.innerHTML = parcial;
  }
  
  function calcularPorcentaje() {
    const porcentaje = Number(numero);
    const num = Number(parcial.split(operadorSelecionado)[1]);
    const resultado = (num * porcentaje) / 100;
    parcial = parcial + porcentaje + "%";
    txtResul.innerHTML = resultado;
    parcial = parcial.toString();
    numero = "";
    operRealizada.innerHTML = parcial;
  }
  
  function calcularRaizCuadrada() {
    const num = Number(parcial.split(operadorSelecionado)[1]);
    const resultado = Math.sqrt(num);
    parcial = "√" + num;
    txtResul.innerHTML = resultado;
    parcial = parcial.toString();
    numero = "";
    operRealizada.innerHTML = parcial;
  }
  
  function calcularElevacion() {
    const exponente = Number(numero);
    const num = Number(parcial.split(operadorSelecionado)[1]);
    const resultado = Math.pow(num, exponente);
    parcial = parcial + "^" + exponente;
    txtResul.innerHTML = resultado;
    parcial = parcial.toString();
    numero = "";
    operRealizada.innerHTML = parcial;
  }  