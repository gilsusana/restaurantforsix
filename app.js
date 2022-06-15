/*function ocultarPrincipal(){
    document.querySelector(".container-general").style.display="none";
    document.querySelector(".container-cart").style.style.display= "block";
}

ocultarPrincipal()

function mostrarPrincipal(){
    document.querySelector(".container-general").style.display="block";
    document.querySelector(".container-cart").style.display="none";
}

mostrarPrincipal()
*/
var elemento = document.getElementsByClassName("div-numeros");
 document.elemento.value = 0
 elemento.onclick = function imprimirNumeros(){ 
     /*lo que queremos que pase cuando sucede un click sobre el elemento*/
     elemento= 0;
     elemento += +1;
     document.write(elemento); 
 }
    
imprimirNumeros()