window.addEventListener("DOMContentLoaded", function(){

    const formulario =  document.getElementById("frmDatos");

    formulario.addEventListener("submit", FncDatosUser);


    function FncDatosUser(event) {
        event.preventDefault() // Evita la recarga del formulario/envio

        const Lv_Nombre = document.getElementById("TxtNombre").value.trim();
        const  Lv_Apellido =  document.getElementById("TxtApellido").value.trim();
        const Lv_Pais =  document.getElementById("SltPais").value.trim();
        const Lv_Comentario =  document.getElementById("TxtComentario").value.trim();
        // const Lv_Genero =  document.querySelector("input{name='rdoGenero'.trim()}:checked")?.value;
        const Lv_Email =  document.getElementById("email").value.trim();
        const Lv_Condiciones =  document.getElementById("ChkTermino").checked;
        // recuperamos el radio button por medio del query selector
        const Lv_EstaCivil=  document.querySelector("input[name='EstCivil']:checked")?.value;


        // validacion adicional manual contra valores vacios: 
        // mostrar en pantalla


        if(!Lv_Nombre  || !Lv_Apellido  || !Lv_Pais  || !Lv_Comentario  || !Lv_Email || !Lv_EstaCivil ){
            alert("No ha ingresado todos los datos") ;
            return;
        }
        if(!Lv_Condiciones){
            alert("Debe aceptar los terminos y condiciones del curso");
            return;
        }

        // simulacion de ajax
        // conectarnos a la base de datos
        // Conexion ODBS => Nombre de conexion => NameDatosBase => UserName => Password
        // API => nos pide los valores de transaccion => Lv_nombre, etc.

        // Objeto en javascript
        const DatoUser = {
             Lv_Nombre,
              Lv_Apellido ,
             Lv_Pais ,
             Lv_Comentario ,
             Lv_Email ,
             Lv_Condiciones ,
             Lv_EstaCivil,
    
        };
        console.log("Datos del usuario han sido capturados: ", DatoUser);

        // simular que la informacion ha sido enviada al servidor
        
        // creamos un elemento en momento de ejecucio
        const DivSalida = document.createElement("div");

        // Programamos el elemento
        DivSalida.textContent = "Enviando datos al servidor ... ... ...";
        DivSalida.style.marginTop =  "20px";

        // se da la orden de ejecucion
        formulario.appendChild(DivSalida);

        // tiempo de espera: por lo general esto demora alrededor de dos segundos
        setTimeout(() => {
            // La carga de la data
            fetch("../json/ajaxformulario2.json")
                .then(response => {
                    if(!response.ok) throw new Error("Error al momento de cargar el json local");
                    return response.json();

                    
                })
                .then(data => {
                    DivSalida.innerHTML = `
                    <h3>Datos enviados correctamente ...</h3>
                    <p>El servidor nos respondio: ${data.mensaje}</p>
                    <hr>
                    <p>Nombres: ${Lv_Nombre }</p>
                    <p>Apellidos: ${ Lv_Apellido}</p>
                    <p>Pais: ${Lv_Pais }</p>
                    <p>Comentario: ${Lv_Comentario }</p>
                    <p>Email: ${Lv_Email }</p>
                    <p>Estado Civil: ${Lv_EstaCivil}</p>
                    <hr>
                    `;
                })
                .catch(error => {
                    DivSalida.innerHTML = `<p>Error: ${error.message}</p>`;
                });
        }, 2000)    ;


    }
});