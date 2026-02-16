// postulacion.js - Modulo para gestionar el formulario de postulación

const postulaciones = [];

function mostrarFormularioPostulacion() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    
    if (!id) {
        document.body.innerHTML = '<div class="alert alert-danger m-5">Mascota no encontrada</div>';
        return;
    }

    const mascota = obtenerMascota(id);
    
    if (!mascota) {
        document.body.innerHTML = '<div class="alert alert-danger m-5">Mascota no encontrada</div>';
        return;
    }

    const container = document.getElementById('form-container');
    if (container) {
        container.innerHTML = `
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body text-center">
                            <div style="font-size: 100px; background-color: ${mascota.color}; padding: 20px; border-radius: 10px;">
                                ${mascota.emoji}
                            </div>
                            <h5 class="mt-3 fw-bold">${mascota.nombre}</h5>
                            <p class="text-muted">${mascota.raza}</p>
                            <div class="alert alert-info mt-3">
                                <small>Estás a punto de postularte para adoptar a <strong>${mascota.nombre}</strong></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-8">
                    <form id="formulario-postulacion">
                        <h4 class="fw-bold mb-4">Formulario de Postulación para Adopción</h4>
                        
                        <!-- Información Personal -->
                        <div class="card mb-4 border-0 shadow-sm">
                            <div class="card-header bg-danger text-white">
                                <h6 class="mb-0">Información Personal</h6>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="nombre" class="form-label">Nombre Completo *</label>
                                        <input type="text" class="form-control" id="nombre" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="email" class="form-label">Email *</label>
                                        <input type="email" class="form-control" id="email" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="telefono" class="form-label">Teléfono *</label>
                                        <input type="tel" class="form-control" id="telefono" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="edad" class="form-label">Edad *</label>
                                        <input type="number" class="form-control" id="edad" min="18" required>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Información del Hogar -->
                        <div class="card mb-4 border-0 shadow-sm">
                            <div class="card-header bg-danger text-white">
                                <h6 class="mb-0">Información del Hogar</h6>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="direccion" class="form-label">Dirección *</label>
                                    <input type="text" class="form-control" id="direccion" required>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="ciudad" class="form-label">Ciudad *</label>
                                        <input type="text" class="form-control" id="ciudad" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="tipoVivienda" class="form-label">Tipo de Vivienda *</label>
                                        <select class="form-select" id="tipoVivienda" required>
                                            <option value="">Seleccionar...</option>
                                            <option value="casa">Casa</option>
                                            <option value="apartamento">Apartamento</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="tenantesHogar" class="form-label">¿Cuántas personas viven en tu hogar? *</label>
                                    <input type="number" class="form-control" id="tenantesHogar" min="1" required>
                                </div>
                            </div>
                        </div>

                        <!-- Información sobre Mascotas -->
                        <div class="card mb-4 border-0 shadow-sm">
                            <div class="card-header bg-danger text-white">
                                <h6 class="mb-0">Sobre Mascotas</h6>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="experienciaMascotas" class="form-label">¿Experiencia anterior con mascotas? *</label>
                                    <select class="form-select" id="experienciaMascotas" required>
                                        <option value="">Seleccionar...</option>
                                        <option value="mucha">Mucha</option>
                                        <option value="algo">Algo</option>
                                        <option value="poca">Poca</option>
                                        <option value="ninguna">Ninguna</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="mascotas" class="form-label">¿Tienes otras mascotas? *</label>
                                    <select class="form-select" id="mascotas" required>
                                        <option value="">Seleccionar...</option>
                                        <option value="si">Sí</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div class="mb-3" id="detallesMascotas" style="display: none;">
                                    <label for="descripcionMascotas" class="form-label">Describe tus mascotas</label>
                                    <textarea class="form-control" id="descripcionMascotas" rows="3"></textarea>
                                </div>
                            </div>
                        </div>

                        <!-- Información Adicional -->
                        <div class="card mb-4 border-0 shadow-sm">
                            <div class="card-header bg-danger text-white">
                                <h6 class="mb-0">Información Adicional</h6>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="razon" class="form-label">¿Por qué deseas adoptar a ${mascota.nombre}? *</label>
                                    <textarea class="form-control" id="razon" rows="4" required></textarea>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="terminos" required>
                                    <label class="form-check-label" for="terminos">
                                        Acepto los términos y condiciones de adopción *
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="d-grid gap-2 d-sm-flex">
                            <button type="submit" class="btn btn-danger btn-lg">Enviar Postulación</button>
                            <a href="detalle.html?id=${mascota.id}" class="btn btn-outline-danger btn-lg">Cancelar</a>
                        </div>
                    </form>
                </div>
            </div>
        `;

        // Agregar evento al formulario
        document.getElementById('formulario-postulacion').addEventListener('submit', function(e) {
            e.preventDefault();
            guardarPostulacion(id);
        });

        // Mostrar/ocultar detalles de mascotas
        document.getElementById('mascotas').addEventListener('change', function() {
            document.getElementById('detallesMascotas').style.display = this.value === 'si' ? 'block' : 'none';
        });
    }
}

function guardarPostulacion(idMascota) {
    const postulacion = {
        id: Date.now(),
        mascotaId: idMascota,
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        edad: document.getElementById('edad').value,
        direccion: document.getElementById('direccion').value,
        ciudad: document.getElementById('ciudad').value,
        tipoVivienda: document.getElementById('tipoVivienda').value,
        tenantesHogar: document.getElementById('tenantesHogar').value,
        experienciaMascotas: document.getElementById('experienciaMascotas').value,
        mascotas: document.getElementById('mascotas').value,
        descripcionMascotas: document.getElementById('descripcionMascotas').value,
        razon: document.getElementById('razon').value,
        fecha: new Date().toLocaleDateString('es-ES'),
        estado: 'pendiente'
    };

    // Guardar en localStorage
    let postulacionesGuardadas = JSON.parse(localStorage.getItem('adoppostulaciones') || '[]');
    postulacionesGuardadas.push(postulacion);
    localStorage.setItem('adoppostulaciones', JSON.stringify(postulacionesGuardadas));

    // Mostrar mensaje de éxito
    alert('¡Postulación enviada exitosamente! Nos pondremos en contacto pronto.');
    
    // Redirigir a postulaciones
    window.location.href = 'postulaciones.html';
}

// Cargar formulario al cargar la página
document.addEventListener('DOMContentLoaded', mostrarFormularioPostulacion);
