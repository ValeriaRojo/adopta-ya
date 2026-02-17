// Formulario
const formulario = document.getElementById('formulario-contacto');
const campoNombre = document.getElementById('nombre-contacto');
const campoEmail = document.getElementById('email-contacto');
const campoMensaje = document.getElementById('mensaje-contacto');
const botonEnviar = document.getElementById('boton-enviar');

// Alerta
const alertaExito = document.getElementById('alerta-exito');
const alertaError = document.getElementById('alerta-error');
const textoError = document.getElementById('texto-error');

// Validación de nombre (solo letras y espacios)
function validarNombre(nombre) {
    const regex = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/;
    return regex.test(nombre.trim());
}

// Validación de email con formato correcto
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email.trim());
}

// Validación de los campos
function validarCampo(campo) {
    const errorElement = document.getElementById(`error-${campo.name}`);
    let esValido = true;
    let mensaje = '';

    if (!errorElement) return true;

    switch (campo.name) {
        case 'nombre':
            if (!campo.value.trim()) {
                esValido = false;
                mensaje = 'El nombre es obligatorio';
            } else if (campo.value.trim().length < 3) {
                esValido = false;
                mensaje = 'El nombre debe tener al menos 3 caracteres';
            } else if (!validarNombre(campo.value.trim())) {
                esValido = false;
                mensaje = 'Solo se permiten letras y espacios';
            }
            break;

        case 'email':
            if (!campo.value.trim()) {
                esValido = false;
                mensaje = 'El email es obligatorio';
            } else if (!validarEmail(campo.value.trim())) {
                esValido = false;
                mensaje = 'Correo no válido. Usa el formato: ejemplo@correo.com';
            }
            break;

        case 'mensaje':
            if (!campo.value.trim()) {
                esValido = false;
                mensaje = 'El mensaje es obligatorio';
            } else if (campo.value.trim().length < 10) {
                esValido = false;
                mensaje = 'El mensaje debe tener al menos 10 caracteres';
            }
            break;
    }

    // Mostrar/ocultar error
    if (esValido) {
        errorElement.classList.remove('mostrar');
        campo.classList.remove('error');
        campo.classList.add('exito');
    } else {
        errorElement.textContent = mensaje;
        errorElement.classList.add('mostrar');
        campo.classList.add('error');
        campo.classList.remove('exito');
    }

    return esValido;
}

// Validación completa del formulario
function validarFormulario() {
    const campos = [
        campoNombre,
        campoEmail,
        campoMensaje
    ];

    let todosValidos = true;
    
    campos.forEach(campo => {
        if (!validarCampo(campo)) {
            todosValidos = false;
        }
    });

    return todosValidos;
}

// Función para mostrar alerta de éxito
function mostrarAlertaExito() {
    alertaExito.classList.add('mostrar');
    alertaError.classList.remove('mostrar');
    
    // Ocultar alerta después de 5 segundos
    setTimeout(() => {
        alertaExito.classList.remove('mostrar');
    }, 5000);
}

// Función para mostrar alerta de error
function mostrarAlertaError(mensaje) {
    textoError.textContent = mensaje;
    alertaError.classList.add('mostrar');
    alertaExito.classList.remove('mostrar');
}

// Bloquear números y caracteres especiales en el nombre
campoNombre.addEventListener('keypress', function(e) {
    const regex = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]$/;
    if (!regex.test(e.key)) {
        e.preventDefault();
    }
});

// Bloquear pegado de números y caracteres especiales en el nombre
campoNombre.addEventListener('paste', function(e) {
    e.preventDefault();
    const texto = (e.clipboardData || window.clipboardData).getData('text');
    const regex = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]*$/;
    if (regex.test(texto)) {
        document.execCommand('insertText', false, texto);
    }
});

// Funciones para ir validando con forme se van escribiendo en los campos
campoNombre.addEventListener('blur', () => validarCampo(campoNombre));
campoNombre.addEventListener('input', () => validarCampo(campoNombre));

campoEmail.addEventListener('blur', () => validarCampo(campoEmail));
campoEmail.addEventListener('input', () => validarCampo(campoEmail));

campoMensaje.addEventListener('blur', () => validarCampo(campoMensaje));
campoMensaje.addEventListener('input', () => validarCampo(campoMensaje));

// Para envío del formulario
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validar formulario
    if (!validarFormulario()) {
        mostrarAlertaError('Por favor revisa los campos requeridos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // Crear objeto con datos del mensaje
    const mensaje = {
        id: Date.now(),
        fecha: new Date().toLocaleString('es-ES'),
        nombre: campoNombre.value.trim(),
        email: campoEmail.value.trim(),
        mensaje: campoMensaje.value.trim()
    };

    // Obtener mensajes existentes
    let mensajes = JSON.parse(localStorage.getItem('mensajes_contacto')) || [];
    
    // Agregar nuevo mensaje
    mensajes.push(mensaje);
    
    // Guardar en localStorage
    localStorage.setItem('mensajes_contacto', JSON.stringify(mensajes));

    // Mostrar alerta de éxito
    mostrarAlertaExito();

    // Mostrar datos guardados en consola
    console.log('Mensaje guardado:', mensaje);
    console.log('Todos los mensajes:', JSON.parse(localStorage.getItem('mensajes_contacto')));

    // Limpiar formulario
    formulario.reset();
    
    // Limpiar clases de validación
    [campoNombre, campoEmail, campoMensaje].forEach(campo => {
        campo.classList.remove('error', 'exito');
    });

    // Redirigir después de 2.5 segundos
    /*setTimeout(() => {
        window.location.href = '../contacto.html';
    }, 2000);*/
});

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Formulario de contacto cargado');
});

 // Funcionalidad del menú móvil
        const toggleMenu = document.getElementById('toggle-menu');
        const menuMovil = document.getElementById('menu-movil');
        const enlacesMenu = document.querySelectorAll('.enlace-menu-movil');

        if (toggleMenu && menuMovil) {
            toggleMenu.addEventListener('click', () => {
                menuMovil.classList.toggle('activo');
            });

            enlacesMenu.forEach(enlace => {
                enlace.addEventListener('click', () => {
                    menuMovil.classList.remove('activo');
                });
            });

            window.addEventListener('scroll', () => {
                menuMovil.classList.remove('activo');
            });
        }
