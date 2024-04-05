function validarEmail(email) {
    // Expresión regular para validar un correo electrónico
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.getElementById("submitButton").addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();

    // Validar que el campo de nombre no esté vacío y que el campo de correo tenga un formato válido
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    if (!validarEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Si pasa todas las validaciones, mostrar un mensaje de éxito
    alert("Los datos son válidos:\nNombre: " + nombre + "\nCorreo electrónico: " + email);
});


// el trim lo que hace es un unir los espacios por ej:  si tu colocalas" hola           fvwr" eso te lo va a colocar unidos

// /\S+@\S+\.\S+/.test  busc si esta el arroba o el punto este a la vez 