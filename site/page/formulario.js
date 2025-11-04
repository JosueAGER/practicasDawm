window.addEventListener("DOMContentLoaded", function(){


    const inputEmail = document.getElementById("Idemail");
    inputEmail?.addEventListener("click", function(){
      inputEmail.style.fontSize = "20px";
    });

    const inputName = document.getElementById("TxtName");
    inputName?.addEventListener("click", function(){
        alert("Va a ingresar sus nombres - Script externo - ejecutado por medio del ID del botón");
    });

    const selectPais = document.getElementById("SltPais");
    selectPais?.addEventListener("click", function(){
       selectPais.style.background = "green";
    });
});
