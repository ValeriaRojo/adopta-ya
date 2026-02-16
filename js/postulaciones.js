// Datos de mascotas para obtener información
const mascotas = [
    { id: 1, nombre: "Max", especie: "perro", raza: "Golden Retriever" },
    { id: 2, nombre: "Luna", especie: "gato", raza: "Gato Persa" },
    { id: 3, nombre: "Rocky", especie: "perro", raza: "Pastor Alemán" },
    { id: 4, nombre: "Misu", especie: "gato", raza: "Gato Negro" },
    { id: 5, nombre: "Bella", especie: "perro", raza: "Labrador" },
    { id: 6, nombre: "Félix", especie: "gato", raza: "Gato Atigrado" },
    { id: 7, nombre: "Toby", especie: "perro", raza: "Beagle" },
    { id: 8, nombre: "Nala", especie: "gato", raza: "Gato Siamés" },
    { id: 9, nombre: "Cooper", especie: "perro", raza: "Cocker Spaniel" },
    { id: 10, nombre: "Simba", especie: "gato", raza: "Gato Naranja" },
    { id: 11, nombre: "Rex", especie: "perro", raza: "Chihuahua" },
    { id: 12, nombre: "Garfield", especie: "gato", raza: "Gato Anaranjado" }
];

// Estados posibles postulaciones
const estadosPosibles = ['Pendiente', 'En revisión', 'Aprobada', 'Rechazada'];

// Elementos del DOM
const tableBody = document.getElementById('cuerpo-tabla');
const sinPostulaciones = document.getElementById('sin-postulaciones');
const botonExportar = document.getElementById('boton-exportar');
const totalPostulaciones = document.getElementById('total-postulaciones');
const contadores = document.getElementById('contadores');

// Función para obtener postulaciones del localStorage
function obtenerPostulaciones() {
    return JSON.parse(localStorage.getItem('postulaciones')) || [];
}

// Función para guardar postulaciones en localStorage
function guardarPostulaciones(postulaciones) {
    localStorage.setItem('postulaciones', JSON.stringify(postulaciones));
}

// Función para obtener información de la mascota
function obtenerMascota(mascotaId) {
    return mascotas.find(m => m.id == mascotaId);
}

// Función para cambiar estado de postulación
function cambiarEstado(postulacionId, nuevoEstado) {
    const postulaciones = obtenerPostulaciones();
    const postulacion = postulaciones.find(p => p.id == postulacionId);
    
    if (postulacion) {
        postulacion.estado = nuevoEstado;
        guardarPostulaciones(postulaciones);
        cargarTabla();
    }
}

// Función para obtener clase CSS del estado
function obtenerClaseEstado(estado) {
    switch (estado) {
        case 'En revisión':
            return 'estado-revision';
        case 'Aprobada':
            return 'estado-aprobada';
        case 'Rechazada':
            return 'estado-rechazada';
        default:
            return 'estado-pendiente';
    }
}

// Función para crear el badge de estado
function crearBadgeEstado(estado) {
    const clase = obtenerClaseEstado(estado);
    return `<span class="estado-badge ${clase}">${estado}</span>`;
}

// Función para cargar la tabla
function cargarTabla() {
    const postulaciones = obtenerPostulaciones();
    tableBody.innerHTML = '';

    if (postulaciones.length === 0) {
        tableBody.style.display = 'none';
        sinPostulaciones.style.display = 'block';
        totalPostulaciones.textContent = '0';
        return;
    }

    tableBody.style.display = 'table-body';
    sinPostulaciones.style.display = 'none';
    totalPostulaciones.textContent = postulaciones.length;

    postulaciones.forEach(postulacion => {
        const mascota = obtenerMascota(postulacion.mascotaId);
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${postulacion.id}</td>
            <td>${postulacion.nombre}</td>
            <td>${postulacion.mascotaNombre}</td>
            <td>${mascota ? mascota.especie.charAt(0).toUpperCase() + mascota.especie.slice(1) : 'N/A'}</td>
            <td>${crearBadgeEstado(postulacion.estado || 'Pendiente')}</td>
            <td>
                <div class="celda-acciones">
                    <button class="boton-estado boton-revision" onclick="cambiarEstado(${postulacion.id}, 'En revisión')">
                        En revisión
                    </button>
                    <button class="boton-estado boton-aprobada" onclick="cambiarEstado(${postulacion.id}, 'Aprobada')">
                        Aprobada
                    </button>
                    <button class="boton-estado boton-rechazada" onclick="cambiarEstado(${postulacion.id}, 'Rechazada')">
                        Rechazada
                    </button>
                    <button class="boton-ver-detalles" onclick="verDetalles(${postulacion.id})">
                        Ver Detalles
                    </button>
                </div>
            </td>
        `;

        tableBody.appendChild(fila);
    });
}

// Función para contar mascotas adoptadas por especie
function contarMascotasPorEspecie() {
    const postulaciones = obtenerPostulaciones();
    const contador = {
        perros: 0,
        gatos: 0
    };

    postulaciones.forEach(postulacion => {
        const mascota = obtenerMascota(postulacion.mascotaId);
        if (mascota) {
            if (mascota.especie === 'perro') {
                contador.perros++;
            } else if (mascota.especie === 'gato') {
                contador.gatos++;
            }
        }
    });

    return contador;
}

// Función para cargar contadores
function cargarContadores() {
    const contador = contarMascotasPorEspecie();

    contadores.innerHTML = `
        <div class="tarjeta-contador perros">
            <div style="font-size: 2rem;">🐕</div>
            <div class="numero-contador">${contador.perros}</div>
            <div class="etiqueta-contador">Perros Adoptados</div>
        </div>
        <div class="tarjeta-contador gatos">
            <div style="font-size: 2rem;">🐈</div>
            <div class="numero-contador">${contador.gatos}</div>
            <div class="etiqueta-contador">Gatos Adoptados</div>
        </div>
        <div class="tarjeta-contador" style="background: linear-gradient(135deg, #FFB347 0%, #FFA500 100%);">
            <div style="font-size: 2rem;">🐾</div>
            <div class="numero-contador">${contador.perros + contador.gatos}</div>
            <div class="etiqueta-contador">Total Adoptadas</div>
        </div>
    `;
}

// Función para exportar a TXT
function exportarATxt() {
    const postulaciones = obtenerPostulaciones();
    
    if (postulaciones.length === 0) {
        alert('No hay postulaciones para exportar');
        return;
    }

    let contenido = '='.repeat(80) + '\n';
    contenido += 'REPORTE DE POSTULACIONES - ADOPYA\n';
    contenido += 'Generado: ' + new Date().toLocaleString('es-ES') + '\n';
    contenido += '='.repeat(80) + '\n\n';

    // Estadísticas
    const contador = contarMascotasPorEspecie();
    contenido += 'ESTADÍSTICAS\n';
    contenido += '-'.repeat(80) + '\n';
    contenido += `Perros Adoptados: ${contador.perros}\n`;
    contenido += `Gatos Adoptados: ${contador.gatos}\n`;
    contenido += `Total de Postulaciones: ${postulaciones.length}\n\n`;

    // Detalles de postulaciones
    contenido += 'DETALLE DE POSTULACIONES\n';
    contenido += '='.repeat(80) + '\n\n';

    postulaciones.forEach((postulacion, index) => {
        const mascota = obtenerMascota(postulacion.mascotaId);
        contenido += `Postulación #${index + 1}\n`;
        contenido += '-'.repeat(80) + '\n';
        contenido += `ID: ${postulacion.id}\n`;
        contenido += `Fecha: ${postulacion.fecha}\n`;
        contenido += `Nombre del Adoptante: ${postulacion.nombre}\n`;
        contenido += `Email: ${postulacion.email}\n`;
        contenido += `Mascota: ${postulacion.mascotaNombre} (${postulacion.mascotaRaza})\n`;
        contenido += `Especie: ${mascota ? mascota.especie : 'N/A'}\n`;
        contenido += `Estado: ${postulacion.estado || 'Pendiente'}\n`;
        contenido += `Experiencia con Mascotas: ${postulacion.experiencia}\n`;
        if (postulacion.evidencia) {
            contenido += `Evidencia de Domicilio: ${postulacion.evidencia}\n`;
        }
        contenido += '\n';
    });

    contenido += '='.repeat(80) + '\n';
    contenido += 'FIN DEL REPORTE\n';

    
    const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = `postulaciones_${new Date().getTime()}.txt`;
    enlace.click();

    console.log('Archivo exportado exitosamente');
}

// Función para ver detalles
function verDetalles(postulacionId) {
    const postulaciones = obtenerPostulaciones();
    const postulacion = postulaciones.find(p => p.id == postulacionId);
    const mascota = obtenerMascota(postulacion.mascotaId);

    if (!postulacion) return;

    const contenidoDetalle = `
        <div class="detalle-item">
            <div class="detalle-etiqueta">ID de Postulación</div>
            <div class="detalle-valor">${postulacion.id}</div>
        </div>
        <div class="detalle-item">
            <div class="detalle-etiqueta">Fecha</div>
            <div class="detalle-valor">${postulacion.fecha}</div>
        </div>
        <div class="detalle-item">
            <div class="detalle-etiqueta">Nombre del Adoptante</div>
            <div class="detalle-valor">${postulacion.nombre}</div>
        </div>
        <div class="detalle-item">
            <div class="detalle-etiqueta">Email</div>
            <div class="detalle-valor">${postulacion.email}</div>
        </div>
        <div class="detalle-item">
            <div class="detalle-etiqueta">Mascota Solicitada</div>
            <div class="detalle-valor">${postulacion.mascotaNombre} (${postulacion.mascotaRaza})</div>
        </div>
        <div class="detalle-item">
            <div class="detalle-etiqueta">Especie</div>
            <div class="detalle-valor">${mascota ? mascota.especie : 'N/A'}</div>
        </div>
        <div class="detalle-item">
            <div class="detalle-etiqueta">Estado</div>
            <div class="detalle-valor">${crearBadgeEstado(postulacion.estado || 'Pendiente')}</div>
        </div>
        <div class="detalle-item">
            <div class="detalle-etiqueta">Experiencia con Mascotas</div>
            <div class="detalle-valor">${postulacion.experiencia}</div>
        </div>
        ${postulacion.evidencia ? `
        <div class="detalle-item">
            <div class="detalle-etiqueta">Evidencia de Domicilio</div>
            <div class="detalle-valor"><a href="${postulacion.evidencia}" target="_blank" style="color: #FF6B6B;">Ver Documento</a></div>
        </div>
        ` : ''}
    `;

    document.getElementById('contenido-detalle').innerHTML = contenidoDetalle;
    document.getElementById('modal-detalles').classList.add('mostrar');
}

function cerrarModal() {
    document.getElementById('modal-detalles').classList.remove('mostrar');
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal-detalles');
    if (event.target === modal) {
        modal.classList.remove('mostrar');
    }
});

botonExportar.addEventListener('click', exportarATxt);

document.addEventListener('DOMContentLoaded', function() {
    cargarTabla();
    cargarContadores();
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
