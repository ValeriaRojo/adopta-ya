// catalogo.js - Modulo para gestionar el catálogo de mascotas

// Base de datos de mascotas
const mascotas = [
    {
        id: 1,
        nombre: "Luna",
        tipo: "Perro",
        raza: "Labrador Retriever",
        edad: 3,
        color: "#FFB6C1",
        emoji: "🐕",
        descripcion: "Luna es una perra cariñosa y energética que adora jugar y pasar tiempo en familia.",
        ubicacion: "Madrid",
        estatus: "disponible"
    },
    {
        id: 2,
        nombre: "Misy",
        tipo: "Gato",
        raza: "Siamés",
        edad: 2,
        color: "#FFE4B5",
        emoji: "🐈",
        descripcion: "Misy es un gato elegante, independiente pero muy cariñoso cuando decide serlo.",
        ubicacion: "Barcelona",
        estatus: "disponible"
    },
    {
        id: 3,
        nombre: "Pelusa",
        tipo: "Conejo",
        raza: "Holandés",
        edad: 1,
        color: "#D3D3D3",
        emoji: "🐰",
        descripcion: "Pelusa es un conejo dulce y tranquilo, perfecto para familias que buscan una mascota paciente.",
        ubicacion: "Valencia",
        estatus: "disponible"
    },
    {
        id: 4,
        nombre: "Tweety",
        tipo: "Loro",
        raza: "Amazónico",
        edad: 5,
        color: "#FFFACD",
        emoji: "🐦",
        descripcion: "Tweety es un loro inteligente que repite palabras y adora la compañía de sus humanos.",
        ubicacion: "Sevilla",
        estatus: "disponible"
    },
    {
        id: 5,
        nombre: "Max",
        tipo: "Perro",
        raza: "Pastor Alemán",
        edad: 4,
        color: "#DEB887",
        emoji: "🐕‍🦺",
        descripcion: "Max es un perro inteligente, leal y protector. Ideal para familias activas.",
        ubicacion: "Madrid",
        estatus: "disponible"
    },
    {
        id: 6,
        nombre: "Micho",
        tipo: "Gato",
        raza: "Común",
        edad: 6,
        color: "#F0E68C",
        emoji: "🐱",
        descripcion: "Micho es un gato adulto tranquilo, perfecto para apartamentos o personas mayores.",
        ubicacion: "Bilbao",
        estatus: "disponible"
    }
];

// Función para mostrar mascotas en la página principal
function mostrarMascotasInicio() {
    const container = document.getElementById('mascotas-container');
    if (!container) return;

    const fragment = document.createDocumentFragment();
    
    mascotas.slice(0, 3).forEach(mascota => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6';
        col.innerHTML = `
            <div class="card mascota-card">
                <div class="mascota-image" style="background-color: ${mascota.color}">
                    <span>${mascota.emoji}</span>
                </div>
                <div class="mascota-info">
                    <h5>${mascota.nombre}</h5>
                    <p class="raza">${mascota.tipo} • ${mascota.raza}</p>
                    <p class="small text-muted">${mascota.edad} año${mascota.edad > 1 ? 's' : ''}</p>
                    <p class="descripcion">${mascota.descripcion}</p>
                    <a href="detalle.html?id=${mascota.id}" class="btn btn-danger btn-sm w-100">Ver Más</a>
                </div>
            </div>
        `;
        fragment.appendChild(col);
    });

    container.appendChild(fragment);
}

// Función para obtener mascota por ID
function obtenerMascota(id) {
    return mascotas.find(m => m.id == id);
}

// Función para filtrar mascotas
function filtrarMascotas(criterios) {
    return mascotas.filter(mascota => {
        if (criterios.tipo && mascota.tipo !== criterios.tipo) return false;
        if (criterios.edad && mascota.edad !== criterios.edad) return false;
        if (criterios.ubicacion && mascota.ubicacion !== criterios.ubicacion) return false;
        return true;
    });
}

// Función para buscar mascotas
function buscarMascotas(termino) {
    const termino_lower = termino.toLowerCase();
    return mascotas.filter(mascota => 
        mascota.nombre.toLowerCase().includes(termino_lower) ||
        mascota.raza.toLowerCase().includes(termino_lower) ||
        mascota.tipo.toLowerCase().includes(termino_lower)
    );
}

// Exportar para que esté disponible en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mascotas, obtenerMascota, filtrarMascotas, buscarMascotas };
}

// Cargar mascotas al cargar la página
document.addEventListener('DOMContentLoaded', mostrarMascotasInicio);
