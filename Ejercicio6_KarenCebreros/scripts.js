$(document).ready(function() {
    // Mostrar formulario y ocultar la página principal al hacer clic en "Registrarse"
    $("#btn-registrarse").click(function() {
        $("#pagina-principal").hide();
        $("#formulario-registro").show();
    });

    // Validación del formulario
    $("#registroForm").submit(function(event) {
        event.preventDefault();
        
        let valido = true;
        let nombre = $("#nombre").val();
        let email = $("#email").val();
        let telefono = $("#telefono").val();
        let contrasena = $("#contrasena").val();
        
        $(".error").text("");

        // Validar nombre y apellidos (mínimo dos palabras y solo letras)
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(nombre) || nombre.trim().split(" ").length < 2) {
            $("#error-nombre").text("*Introduce al menos dos palabras (solo letras).");
            valido = false;
        }

        // Validar email (formato válido)
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
            $("#error-email").text("*Introduce un email válido.");
            valido = false;
        }

        // Validar teléfono (solo números)
        if (!/^\d+$/.test(telefono)) {
            $("#error-telefono").text("*El teléfono debe contener solo números.");
            valido = false;
        }

        // Validar contraseña (mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número)
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(contrasena)) {
            $("#error-contrasena").text("*La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y un número.");
            valido = false;
        }

        if (valido) {
            // Si el formulario es válido, se muestra una alerta de confirmación, se resetea y se vuelve a la página principal
            alert("¡Formulario enviado con éxito!");
            $("#formulario-registro").hide();
            $("#pagina-principal").fadeIn(500);
            $("#registroForm")[0].reset();
        }
    });

    // Cancelar el formulario (se resetea y se vuelve a la página principal)
    $("#btn-cancelar").click(function() {
        $("#formulario-registro").hide();
        $("#pagina-principal").fadeIn(500);

        $(".error").text("");
        $("#registroForm")[0].reset();
    });
});
