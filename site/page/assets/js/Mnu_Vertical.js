/* ======================================
Archivo: Mnu_Vertical.js
Funcionalidad: Mostrar y ocultar el menú lateral.
====================================== */

// Abre el menú lateral, aumenta el ancho y empuja el contenido principal
function openNav() {
    document.getElementById("mySideBar").style.width = "15%";
    document.getElementById("main").style.marginLeft = "15%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    
    // Cierra el menú lateral, regresa todo a su estado original
    function closeNav() {
    document.getElementById("mySideBar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    }