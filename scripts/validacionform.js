
function validacionForm() {
    // Obtener valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var tipoPropiedad = document.getElementById('tipoPropiedad').value;
    var mensaje = document.getElementById('mensaje').value.trim();
    var terms = document.getElementById('terms').checked;

    
    var isValid = true;
   
    // Validar Nombre
    if (nombre === '') {
        document.getElementById('nombreError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nombreError').style.display = 'none';
    }

    // Validar Apellido
    if (apellido === '') {
        document.getElementById('apellidoError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('apellidoError').style.display = 'none';
    }

    // Validar Email
    if (email === '') {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Validar Teléfono
    if (telefono === '') {
        document.getElementById('errorTelefono').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorTelefono').style.display = 'none';
    }

    // Validar Tipo de Propiedad
    if (tipoPropiedad === '') {
        document.getElementById('errorTipoPropiedad').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorTipoPropiedad').style.display = 'none';
    }

    // Validar Mensaje
    if (mensaje === '') {
        document.getElementById('errorMensaje').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorMensaje').style.display = 'none';
    }

      // Validar Términos y condiciones
      if (!terms) {
        document.getElementById('termsError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('termsError').style.display = 'none';
    }

    // Validar Imagen
    var imagenInput = document.getElementById('imagen');
    var imagenError = document.getElementById('imagenError');
    if (imagenInput.files.length === 0) {
        imagenError.style.display = 'block';
        return false;
    } else {
        imagenError.style.display = 'none';
    }
    
   
}

/*


    var isValid = true;
    var errorMessage = document.getElementById('errorMessage'); // Suponiendo que tienes este elemento
  
    // Borrar cualquier mensaje de error previo
    errorMessage.innerHTML = '';
  
    // Lógica de validación con mensaje de error combinado
    if (nombre === '') {
      isValid = false;
      errorMessage.innerHTML += ' - El nombre es obligatorio<br>';
    } else {
      document.getElementById('nombreError').style.display = 'none';
    }

    if (apellido === '') {
        isValid = false;
        errorMessage.innerHTML += ' - El apellido es obligatorio<br>';
    } else {
        document.getElementById('apellidoError').style.display = 'none';
    }

    if (email === '') {
        isValid = false;
        errorMessage.innerHTML += ' - El email es obligatorio<br>';
        } else {
        document.getElementById('emailError').style.display = 'none';
        }


    if (telefono === '' || telefono === String) {
    isValid = false;
    errorMessage.innerHTML += ' - Ingrese un numero de telefono valido<br>';
    } else {
    document.getElementById('errorTelefono').style.display = 'none';
    }

    if (tipoPropiedad === '') {
    isValid = false;
    errorMessage.innerHTML += ' - Este campo es obligatorio<br>';
    } else {
    document.getElementById('errorTipoPropiedad').style.display = 'none';
    }

    
    // Lógica similar para otros campos, agregando a errorMessage
  
    // Validar términos e imagen (sin cambios)
  
    if (!isValid) {
      errorMessage.style.display = 'block'; // Mostrar el mensaje de error central
    }
  
    return isValid; // Solo devolver false si hay errores
  }
    */