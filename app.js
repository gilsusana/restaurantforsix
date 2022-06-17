let contador = 0;
function addCounter(){
    contador = contador + 1;
    document.querySelector("#counter").innerHTML = contador;
}
var contar = 0
btnElm.onclick = function() {
contar++;
}

function ocultarPrincipal(){
    document.querySelector(".container-general").style.display="none";
    document.querySelector(".container-cart").style.display= "block";
}

ocultarPrincipal()

function mostrarPrincipal(){
    document.querySelector(".container-general").style.display="block";
    document.querySelector(".container-cart").style.display="none";
}

mostrarPrincipal()
