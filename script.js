function enviarSaludoConAlerta() {
    let nombre = prompt("Por favor, introduce tu nombre:");
    if (nombre) { 
        alert("¡Hola, " + nombre + "! Bienvenido."); 
    } else {
        alert("No se introdujo ningún nombre. ¡Hola desconocido!"); 
    }
}

function mostrarImagen(){
    let imagen = document.getElementById("imagen");
    let rutaImagen = "D: \ Generation \ Ch38-sesiones \ carpeta_de_imagenes \ imagen.jpg";
    imagen.src = rutaImagen;
    imagen.style.display = "block";
} 