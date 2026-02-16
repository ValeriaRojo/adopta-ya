// detalle.js - Modulo para mostrar detalles de una mascota

function mostrarDetalleMascota() {
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

    const container = document.getElementById('detalle-container');
    if (container) {
        container.innerHTML = `
            <div class="row g-4">
                <div class="col-lg-5">
                    <div class="card border-0 shadow-sm" style="background-color: ${mascota.color}; height: 400px; display: flex; align-items: center; justify-content: center;">
                        <span style="font-size: 150px;">${mascota.emoji}</span>
                    </div>
                </div>
                <div class="col-lg-7">
                    <h1 class="display-5 fw-bold mb-3">${mascota.nombre}</h1>
                    
                    <div class="mb-4">
                        <span class="badge bg-danger me-2">${mascota.tipo}</span>
                        <span class="badge bg-success">${mascota.estatus}</span>
                    </div>

                    <div class="row mb-4">
                        <div class="col-md-6">
                            <h6 class="text-muted">Raza</h6>
                            <p class="fw-bold">${mascota.raza}</p>
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-muted">Edad</h6>
                            <p class="fw-bold">${mascota.edad} año${mascota.edad > 1 ? 's' : ''}</p>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-md-6">
                            <h6 class="text-muted">Ubicación</h6>
                            <p class="fw-bold">📍 ${mascota.ubicacion}</p>
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-muted">Tipo</h6>
                            <p class="fw-bold">${mascota.tipo}</p>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h6 class="text-muted">Acerca de ${mascota.nombre}</h6>
                        <p class="fs-5">${mascota.descripcion}</p>
                    </div>

                    <div class="d-grid gap-2 d-sm-flex">
                        <a href="postulacion.html?id=${mascota.id}" class="btn btn-danger btn-lg">Adoptar</a>
                        <a href="catalogo.html" class="btn btn-outline-danger btn-lg">Volver</a>
                    </div>
                </div>
            </div>

            <div class="row mt-5 pt-5 border-top">
                <div class="col-md-6">
                    <h5 class="fw-bold mb-3">Requisitos para Adoptar</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">✓ Ser mayor de 18 años</li>
                        <li class="list-group-item">✓ Tener identificación oficial</li>
                        <li class="list-group-item">✓ Hogar adaptado para la mascota</li>
                        <li class="list-group-item">✓ Estar dispuesto a cuidarla de por vida</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h5 class="fw-bold mb-3">Nuestro Compromiso</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">✓ Todos nuestros animales están vacunados</li>
                        <li class="list-group-item">✓ Incluye asesoría veterinaria 1 mes</li>
                        <li class="list-group-item">✓ Documentación legal completa</li>
                        <li class="list-group-item">✓ Soporte continuo y seguimiento</li>
                    </ul>
                </div>
            </div>
        `;
    }
}

// Cargar detalles al cargar la página
document.addEventListener('DOMContentLoaded', mostrarDetalleMascota);
