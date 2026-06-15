 
function resposta(correta){

let resultado =
document.getElementById("resultado");

if(correta){
resultado.innerHTML =
"✅ Correto! O plantio direto ajuda a conservar o solo.";
}
else{
resultado.innerHTML =
"❌ Errado! O desmatamento prejudica o meio ambiente.";
}

}

function modoEscuro(){
document.body.classList.toggle("dark");
}
