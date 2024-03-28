const formulario = document.getElementById("formularioContacto");

        formulario.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("Formulario enviado");
            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;
            const mensaje = document.getElementById("mensaje").value;
        
            // Expresión regular para validar el formato del correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if(nombre === "" || correo === "" || mensaje === ""){
                alert('Por favor debe completar los campos');
                return;
            }
        
            if (!emailRegex.test(correo)) { // Verifica si el correo tiene un formato válido
                alert('Por favor, introduzca un correo electrónico válido');
                return;
            }
        
            alert('Mensaje enviado');
            document.getElementById("nombre").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("mensaje").value = "";
});
