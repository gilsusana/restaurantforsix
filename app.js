function ocultarPrincipal(){
    document.querySelector(".container-general").style.display="none";
    document.querySelector(".cajacompra");.style.style.display= "block";
}

ocultarPrincipal()

function mostrarPrincipal(){
    document.querySelector(".container-general").style.display="block";
    document.querySelector(".cajacompra").style.display="none";
}

mostrarPrincipal()