// Comentarios
 
let Lv_Mensaje = "Este es mi cuarto Alert  - Externo - Antes del body";
alert(Lv_Mensaje);


function mostrarAlert() {
    let Lv_Mensaje_2=  "Este se muestra al presionar el button presioname2 - Script Externo";
    alert(Lv_Mensaje_2);
}

window.addEventListener("DOMContentLoaded", function() {
    // se usa constante para que el valor del id no sea modificado
    // document hace referencia al HTML
    // getElementById pide que busque el Elemento del html que tenga el id que le doy como parametro
    const Btn3 = document.getElementById("BtnPresioname3");
    Btn3.addEventListener("click", function() {
        let Lv_Mensaje_3=  "Este se muestra al presionar el button presioname3 - Script Externo ejecutado por medio del id del boton";
        alert(Lv_Mensaje_3);
    });
    
    let parrafo =  "Este parrafo fue modificado en javascript (Externo, no se modificaron los fuentes)"
    // modificar parrafo 1 del html 
    const Parrafo1 = document.getElementById("Parrafo_1");
    if(Parrafo1) {
        Parrafo1.textContent = parrafo;
    }


    const Btn4 = document.getElementById("BtnPresioname4");
    let Lv_Caption = "Fuiste hackeado";
    let Lv_Caption_4 = "Este boton no tiene evento click - Script externo";
    if(Btn4){
        Btn4.addEventListener("click", function(){
            Btn4.textContent =  Lv_Caption;
            alert(Lv_Caption_4);
        });
    }

    // metodos de javascript relacionados con una pagina de html
    // Seleccion por id
    const LV_Titulo = document.getElementById("IdTitulo");
    LV_Titulo.textContent = "Este valor cambio por medio del: document.getElementById";
    LV_Titulo.style.color = "red";

    // Solo por class
    const items = this.document.getElementsByClassName("item");
    for(let i = 0; i < items.length; i++) {
        items[i].textContent = `Este es el parrafo #${i + 1} con la clase: "item" fue modificado por el elemento getElementsByClassName.`;
        items[i].style.fondWeight= "bold";
    }

    // solo por etiquetas
    const items_p = this.document.getElementsByTagName("p");
    for(let i = 0; i < items_p.length; i++) {
        items_p[i].textContent = `Este es el parrafo #${i + 1} con la clase: "item" fue modificado por el elemento getElementsByTagName.`;
        items_p[i].style.border = "3px solid black";
    }

    // querySelector
    const in_selector = this.document.querySelector("p");
    in_selector.style.background = "yellow";

    // all
    const in_elemnts =  this.document.querySelectorAll("div");
    for(let i = 0; i < in_elemnts.length; i++) {
        in_elemnts[i].style.background ="yellow";
    }

    // for each
    in_elemnts.forEach((elem) => {
        elem.style.background ="blue";
    });
        
});