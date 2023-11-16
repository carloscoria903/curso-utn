function alternarSeccionContacto() {
    var seccionContacto = document.getElementById("contacto");
    if (seccionContacto.style.display === "none" || seccionContacto.style.display === "") {
        seccionContacto.style.display = "block";
    } else {
        seccionContacto.style.display = "none";
    }
}
