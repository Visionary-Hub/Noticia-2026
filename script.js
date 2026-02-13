function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    
    if (mensaje.classList.contains("oculto")) {
        mensaje.classList.remove("oculto");
    } else {
        mensaje.classList.add("oculto");
    }
}
