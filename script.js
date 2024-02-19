function enviarSaludoConAlerta() {
    var nombre = prompt("Por favor, introduce tu nombre:");
    if (nombre) { 
        alert("¡Hola, " + nombre + "! Bienvenido."); 
    } else {
        alert("No se introdujo ningún nombre. ¡Hola desconocido!"); 
    }
}
