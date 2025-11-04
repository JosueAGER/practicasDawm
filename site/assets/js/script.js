// Selecciona el botón
const botonColor = document.getElementById("boton-color");

// Colores posibles para el fondo
const colores = ["#f5f0eb", "#e0c9a6", "#d7ccc8", "#efebe9", "#fff8e1"];
let indice = 0;

// Función para cambiar el color de fondo
botonColor.addEventListener("click", () => {
    indice = (indice + 1) % colores.length;
    document.body.style.backgroundColor = colores[indice];
});
