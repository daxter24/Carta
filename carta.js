function mostrarCarta() {
    var botonContenedor = document.querySelector(".boton-contenedor");
    botonContenedor.classList.add("oculto");
    setTimeout(function() {
      botonContenedor.style.display = "none";
    }, 500);
    document.querySelector(".carta").style.display = "block";
    document.querySelector(".carta").classList.add("abierta");
  }
  