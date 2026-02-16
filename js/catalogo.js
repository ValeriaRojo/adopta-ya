// Mascotas Disponibles   
const mascotas = [
    {
        id: 1,
        nombre: "Max",
        especie: "perro",
        raza: "Golden Retriever",
        edad: 3,
        tamaño: "grande",
        ubicacion: "Ciudad Central",
        descripcion: "Perro muy amigable y energético",
        imagen: "assets/img/max.jpg"
    },
    {
        id: 2,
        nombre: "Luna",
        especie: "gato",
        raza: "Gato Persa",
        edad: 2,
        tamaño: "pequeño",
        ubicacion: "Zona Norte",
        descripcion: "Gata independiente y cariñosa",
        imagen: "assets/img/luna.jpg"

    },
    {
        id: 3,
        nombre: "Rocky",
        especie: "perro",
        raza: "Pastor Alemán",
        edad: 4,
        tamaño: "grande",
        ubicacion: "Centro",
        descripcion: "Perro inteligente y protector",
        imagen: "assets/img/rocky.jpg"
    },
    {
        id: 4,
        nombre: "Misu",
        especie: "gato",
        raza: "Gato Negro",
        edad: 1,
        tamaño: "pequeño",
        ubicacion: "Zona Sur",
        descripcion: "Gatita juguetona y traviesa",
        imagen: "assets/img/misu.jpg"
    },
    {
        id: 5,
        nombre: "Bella",
        especie: "perro",
        raza: "Labrador",
        edad: 2,
        tamaño: "grande",
        ubicacion: "Este",
        descripcion: "Perrita dulce y excelente compañera",
        imagen: "assets/img/bella.jpg"
    },
    {
        id: 6,
        nombre: "Félix",
        especie: "gato",
        raza: "Gato Atigrado",
        edad: 3,
        tamaño: "pequeño",
        ubicacion: "Oeste",
        descripcion: "Gato vivaz y aventurero",
        imagen: "assets/img/felix.jpg"
    },
    {
        id: 7,
        nombre: "Toby",
        especie: "perro",
        raza: "Beagle",
        edad: 1,
        tamaño: "mediano",
        ubicacion: "Norte",
        descripcion: "Cachorro muy alegre y juguetón",
        imagen: "assets/img/toby.jpg"
    },
    {
        id: 8,
        nombre: "Nala",
        especie: "gato",
        raza: "Gato Siamés",
        edad: 2,
        tamaño: "pequeño",
        ubicacion: "Centro",
        descripcion: "Gata inteligente y comunicativa",
        imagen: "assets/img/nala.jpg"
    },
    {
        id: 9,
        nombre: "Cooper",
        especie: "perro",
        raza: "Cocker Spaniel",
        edad: 5,
        tamaño: "mediano",
        ubicacion: "Sur",
        descripcion: "Perro adulto tranquilo y afectuoso",
        imagen: "assets/img/cooper.jpg"
    },
    {
        id: 10,
        nombre: "Simba",
        especie: "gato",
        raza: "Gato Naranja",
        edad: 4,
        tamaño: "pequeño",
        ubicacion: "Zona Este",
        descripcion: "Gato mayor muy mimoso",
        imagen: "assets/img/simba.jpg"
    },
    {
        id: 11,
        nombre: "Rex",
        especie: "perro",
        raza: "Chihuahua",
        edad: 2,
        tamaño: "pequeño",
        ubicacion: "Zona Oeste",
        descripcion: "Perrito pequeño con gran personalidad",
        imagen: "assets/img/rex.jpg"
    },
    {
        id: 12,
        nombre: "Garfield",
        especie: "gato",
        raza: "Gato Anaranjado",
        edad: 3,
        tamaño: "mediano",
        ubicacion: "Centro",
        descripcion: "Gato relajado y amoroso",
        imagen: "assets/img/garfield.jpg"
    }
];

// Variables globales
let mascotasFiltradas = [...mascotas];


function renderizarMascotas(listaMascotas) {
    const contenedorCatalogo = document.getElementById('contenedor-mascotas');
    
    if (!contenedorCatalogo) return;
    
    contenedorCatalogo.innerHTML = '';
    
if (listaMascotas.length === 0) {
    contenedorCatalogo.innerHTML = '<div class="sin-resultados"><p>No se encontraron mascotas que coincidan con tu búsqueda</p></div>';

    const contadorResultados = document.getElementById('contador-resultados');
    if (contadorResultados) {
        contadorResultados.textContent = 'No se encontraron mascotas';
    }

    return;
}
 
    listaMascotas.forEach(mascota => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'col-md-6 col-lg-4';
        tarjeta.innerHTML = `
            <div class="tarjeta-mascota">
                <div class="imagen-mascota">
                    ${
                        mascota.imagen 
                        ? `<img src="${mascota.imagen}" alt="Foto de ${mascota.nombre}" loading="lazy">`
                        : `🐾`
                    }
                </div>
                <div class="info-mascota">
                    <h3 class="nombre-mascota">${mascota.nombre}</h3>
                    <p class="raza-mascota">${mascota.raza} - ${mascota.edad} años</p>
                    <p class="tamaño-mascota">Tamaño: ${mascota.tamaño}</p>
                    <p class="ubicacion-mascota">📍 ${mascota.ubicacion}</p>
                    <p class="descripcion-mascota">${mascota.descripcion}</p>
                    <a href="detalle.html?id=${mascota.id}" class="boton-ver-detalles">Ver Detalles</a>
                </div>
            </div>
        `;
        contenedorCatalogo.appendChild(tarjeta);
    });
    
    // Actualizar contador de resultados
    const contadorResultados = document.getElementById('contador-resultados');
    if (contadorResultados) {
        contadorResultados.textContent = `Mostrando ${listaMascotas.length} mascotas`;
    }
}

// Función para aplicar filtros
function aplicarFiltros() {
    const busqueda = document.getElementById('busqueda-nombre')?.value.toLowerCase() || '';
    const especie = document.getElementById('filtro-especie')?.value || '';
    const edad = document.getElementById('filtro-edad')?.value || '';
    const tamaño = document.getElementById('filtro-tamaño')?.value || '';
    
    mascotasFiltradas = mascotas.filter(mascota => {
        // Filtro de búsqueda por nombre
        const coincideNombre = mascota.nombre.toLowerCase().includes(busqueda);
        
        // Filtro por especie
        const coincideEspecie = especie === '' || mascota.especie === especie;
        
        // Filtro por edad
        let coincideEdad = true;
        if (edad !== '') {
            if (edad === 'bebe') {
                coincideEdad = mascota.edad < 2;
            } else if (edad === 'adulto') {
                coincideEdad = mascota.edad >= 2 && mascota.edad <= 5;
            } else if (edad === 'senior') {
                coincideEdad = mascota.edad > 5;
            }
        }
        
        // Filtro por tamaño
        const coincideTamaño = tamaño === '' || mascota.tamaño === tamaño;
        
        return coincideNombre && coincideEspecie && coincideEdad && coincideTamaño;
    });
    
    renderizarMascotas(mascotasFiltradas);
}

// Función para reiniciar filtros
function reiniciarFiltros() {
    document.getElementById('busqueda-nombre').value = '';
    document.getElementById('filtro-especie').value = '';
    document.getElementById('filtro-edad').value = '';
    document.getElementById('filtro-tamaño').value = '';
    
    mascotasFiltradas = [...mascotas];
    renderizarMascotas(mascotasFiltradas);
}


document.addEventListener('DOMContentLoaded', function() {
    renderizarMascotas(mascotas);

    const botonFiltrar = document.getElementById('boton-filtrar');
    const botonReiniciar = document.getElementById('boton-reiniciar');
    
    
    if (botonFiltrar) {
        botonFiltrar.addEventListener('click', aplicarFiltros);
    }
    
    if (botonReiniciar) {
        botonReiniciar.addEventListener('click', reiniciarFiltros);
    }
});
