// postulaciones.js - Modulo para mostrar postulaciones del usuario

function mostrarPostulaciones() {
    const container = document.getElementById('postulaciones-container');
    if (!container) return;

    const postulacionesGuardadas = JSON.parse(localStorage.getItem('adoppostulaciones') || '[]');

    if (postulacionesGuardadas.length === 0) {
        container.innerHTML = `
            <div class="alert alert-info text-center py-5">
                <h5>No tienes postulaciones aún</h5>
                <p class="text-muted">Comienza a explorar nuestro catálogo de mascotas y postúlate para adoptar.</p>
                <a href="catalogo.html" class="btn btn-danger btn-lg">Ver Mascotas Disponibles</a>
            </div>
        `;
        return;
    }

    let html = '<div class="table-responsive"><table class="table table-hover">';
    html += `
        <thead>
            <tr>
                <th>Mascota</th>
                <th>Fecha de Postulación</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
    `;

    postulacionesGuardadas.forEach(post => {
        const mascota = obtenerMascota(post.mascotaId);
        const nombreMascota = mascota ? mascota.nombre : 'Desconocida';
        const estadoClass = post.estado === 'pendiente' ? 'badge bg-warning' : 
                           post.estado === 'aprobada' ? 'badge bg-success' : 'badge bg-danger';
        
        html += `
            <tr>
                <td class="fw-bold">${nombreMascota}</td>
                <td>${post.fecha}</td>
                <td><span class="${estadoClass}">${post.estado.toUpperCase()}</span></td>
                <td>
                    <button class="btn btn-sm btn-info" onclick="verDetallePostulacion(${post.id})">Ver Detalles</button>
                    <button class="btn btn-sm btn-danger" onclick="eliminarPostulacion(${post.id})">Eliminar</button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table></div>';
    container.innerHTML = html;
}

function verDetallePostulacion(id) {
    const postulacionesGuardadas = JSON.parse(localStorage.getItem('adoppostulaciones') || '[]');
    const postulacion = postulacionesGuardadas.find(p => p.id === id);

    if (!postulacion) return;

    const detalle = `
Nombre: ${postulacion.nombre}
Email: ${postulacion.email}
Teléfono: ${postulacion.telefono}
Edad: ${postulacion.edad}
Dirección: ${postulacion.direccion}
Ciudad: ${postulacion.ciudad}
Tipo de Vivienda: ${postulacion.tipoVivienda}
Personas en el Hogar: ${postulacion.tenantesHogar}
Experiencia con Mascotas: ${postulacion.experienciaMascotas}
Otras Mascotas: ${postulacion.mascotas}
${postulacion.mascotas === 'si' ? `Descripción de Mascotas: ${postulacion.descripcionMascotas}` : ''}
Razón de Adopción: ${postulacion.razon}
Estado: ${postulacion.estado}
Fecha de Postulación: ${postulacion.fecha}
    `;

    alert(detalle);
}

function eliminarPostulacion(id) {
    if (!confirm('¿Estás seguro de que deseas eliminar esta postulación?')) return;

    let postulacionesGuardadas = JSON.parse(localStorage.getItem('adoppostulaciones') || '[]');
    postulacionesGuardadas = postulacionesGuardadas.filter(p => p.id !== id);
    localStorage.setItem('adoppostulaciones', JSON.stringify(postulacionesGuardadas));

    mostrarPostulaciones();
    alert('Postulación eliminada exitosamente');
}

function exportarPostulaciones() {
    const postulacionesGuardadas = JSON.parse(localStorage.getItem('adoppostulaciones') || '[]');
    
    if (postulacionesGuardadas.length === 0) {
        alert('No hay postulaciones para exportar');
        return;
    }

    const csv = convertirACSV(postulacionesGuardadas);
    descargarCSV(csv, 'postulaciones-adopyA.csv');
}

function convertirACSV(data) {
    const headers = 'Mascota ID,Nombre,Email,Teléfono,Edad,Dirección,Ciudad,Tipo Vivienda,Personas,Experiencia,Mascotas,Razón,Estado,Fecha\n';
    
    const rows = data.map(post => 
        `${post.mascotaId},"${post.nombre}","${post.email}","${post.telefono}",${post.edad},"${post.direccion}","${post.ciudad}","${post.tipoVivienda}",${post.tenantesHogar},"${post.experienciaMascotas}","${post.mascotas}","${post.razon}","${post.estado}","${post.fecha}"`
    ).join('\n');

    return headers + rows;
}

function descargarCSV(csv, nombreArchivo) {
    const elemento = document.createElement('a');
    elemento.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    elemento.download = nombreArchivo;
    elemento.click();
}

// Cargar postulaciones al cargar la página
document.addEventListener('DOMContentLoaded', mostrarPostulaciones);
