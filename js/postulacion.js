// Datos de mascotas 
const mascotas = [
    { id: 1, nombre: "Max", raza: "Golden Retriever" },
    { id: 2, nombre: "Luna", raza: "Gato Persa" },
    { id: 3, nombre: "Rocky", raza: "Pastor Alemán" },
    { id: 4, nombre: "Misu", raza: "Gato Negro" },
    { id: 5, nombre: "Bella", raza: "Labrador" },
    { id: 6, nombre: "Félix", raza: "Gato Atigrado" },
    { id: 7, nombre: "Toby", raza: "Beagle" },
    { id: 8, nombre: "Nala", raza: "Gato Siamés" },
    { id: 9, nombre: "Cooper", raza: "Cocker Spaniel" },
    { id: 10, nombre: "Simba", raza: "Gato Naranja" },
    { id: 11, nombre: "Rex", raza: "Chihuahua" },
    { id: 12, nombre: "Garfield", raza: "Gato Anaranjado" }
];

// Formulario
const formulario = document.getElementById('formulario-postulacion');
const campoNombre = document.getElementById('nombre-completo');
const campoEmail = document.getElementById('email');
const campoMascota = document.getElementById('mascota-seleccionada');
const campoExperiencia = document.getElementById('experiencia-mascotas');
const campoEvidencia = document.getElementById('evidencia-domicilio');
const botonEnviar = document.getElementById('boton-enviar');

// Alerta
const alertaExito = document.getElementById('alerta-exito');
const alertaError = document.getElementById('alerta-error');
const textoError = document.getElementById('texto-error');

// Información de mascota
const infoMascota = document.getElementById('info-mascota');
const nombreMascota = document.getElementById('nombre-mascota');
const razaMascota = document.getElementById('raza-mascota');

// Función para cargar el select de mascotas
function cargarMascotas() {
    mascotas.forEach(mascota => {
        const option = document.createElement('option');
        option.value = mascota.id;
        option.textContent = `${mascota.nombre} (${mascota.raza})`;
        campoMascota.appendChild(option);
    });

    // Verificar si hay parámetro de mascota en URL
    const urlParams = new URLSearchParams(window.location.search);
    const mascotaId = urlParams.get('mascota');
    if (mascotaId) {
        campoMascota.value = mascotaId;
        mostrarInfoMascota();
    }
}

// Función para mostrar información de la mascota seleccionada
function mostrarInfoMascota() {
    const mascotaSeleccionada = mascotas.find(m => m.id == campoMascota.value);
    
    if (mascotaSeleccionada) {
        nombreMascota.textContent = mascotaSeleccionada.nombre;
        razaMascota.textContent = mascotaSeleccionada.raza;
        infoMascota.classList.add('mostrar');
    } else {
        infoMascota.classList.remove('mostrar');
    }
}

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

// Validación de URL
function validarURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Validación individual de campos
function validarCampo(campo) {
    const errorElement = document.getElementById(`error-${campo.name}`);
    let esValido = true;
    let mensaje = '';

    if (!errorElement) return true;

    switch (campo.name) {
        case 'nombre':
            if (!campo.value.trim()) {
                esValido = false;
                mensaje = 'El nombre completo es obligatorio';
            } else if (campo.value.trim().length < 3) {
                esValido = false;
                mensaje = 'El nombre debe tener al menos 3 caracteres';
            } else if (!validarNombre(campo.value.trim())) {
                esValido = false;
                mensaje = 'Solo se permiten letras y espacios (sin números ni caracteres especiales)';
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

        case 'mascota':
            if (!campo.value) {
                esValido = false;
                mensaje = 'Debes seleccionar una mascota';
            }
            break;

        case 'experiencia':
            if (!campo.value.trim()) {
                esValido = false;
                mensaje = 'Este campo es obligatorio';
            } else if (campo.value.trim().length < 20) {
                esValido = false;
                mensaje = 'La experiencia debe tener al menos 20 caracteres';
            }
            break;

        case 'evidencia':
            if (campo.value.trim() && !validarURL(campo.value.trim())) {
                esValido = false;
                mensaje = 'Por favor ingresa una URL válida';
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
        campoMascota,
        campoExperiencia,
        campoEvidencia
    ];

    let todosValidos = true;
    
    campos.forEach(campo => {
        if (!validarCampo(campo)) {
            todosValidos = false;
        }
    });

    return todosValidos;
}

// Función para guardar postulación en localStorage
function guardarPostulacion() {
    const mascotaSeleccionada = mascotas.find(m => m.id == campoMascota.value);
    
    const postulacion = {
        id: Date.now(),
        fecha: new Date().toLocaleString('es-ES'),
        nombre: campoNombre.value.trim(),
        email: campoEmail.value.trim(),
        mascotaId: parseInt(campoMascota.value),
        mascotaNombre: mascotaSeleccionada.nombre,
        mascotaRaza: mascotaSeleccionada.raza,
        experiencia: campoExperiencia.value.trim(),
        evidencia: campoEvidencia.value.trim() || null
    };

    // Obtener postulaciones existentes
    let postulaciones = JSON.parse(localStorage.getItem('postulaciones')) || [];
    
    // Agregar nueva postulación
    postulaciones.push(postulacion);
    
    // Guardar en localStorage
    localStorage.setItem('postulaciones', JSON.stringify(postulaciones));

    return postulacion;
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

// Cambio de mascota
campoMascota.addEventListener('change', mostrarInfoMascota);

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

// Validaciones con forme se van escribiendo en los campos
campoNombre.addEventListener('blur', () => validarCampo(campoNombre));
campoNombre.addEventListener('input', () => validarCampo(campoNombre));

campoEmail.addEventListener('blur', () => validarCampo(campoEmail));
campoEmail.addEventListener('input', () => validarCampo(campoEmail));

campoMascota.addEventListener('change', () => validarCampo(campoMascota));

campoExperiencia.addEventListener('blur', () => validarCampo(campoExperiencia));
campoExperiencia.addEventListener('input', () => validarCampo(campoExperiencia));

campoEvidencia.addEventListener('blur', () => validarCampo(campoEvidencia));
campoEvidencia.addEventListener('input', () => validarCampo(campoEvidencia));

// Envío del formulario
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validar formulario
    if (!validarFormulario()) {
        mostrarAlertaError('Por favor revisa los campos requeridos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // Guardar postulación
    const postulacion = guardarPostulacion();

    // Mostrar alerta de éxito
    mostrarAlertaExito();

    // Mostrar datos guardados en consola
    console.log('Postulación guardada:', postulacion);
    console.log('Todas las postulaciones:', JSON.parse(localStorage.getItem('postulaciones')));

    // Limpiar formulario
    formulario.reset();
    
    // Limpiar clases de validación
    [campoNombre, campoEmail, campoMascota, campoExperiencia, campoEvidencia].forEach(campo => {
        campo.classList.remove('error', 'exito');
    });

    // Redirigir después de 2.5 segundos
    setTimeout(() => {
        window.location.href = 'index.html#catalogo';
    }, 2500);
});

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    cargarMascotas();
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

