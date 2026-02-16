// Datos de mascotas 
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
        descripcionAmplia: "Max es un hermoso Golden Retriever de 3 años con un carácter excepcional. Es un perro muy sociable, juguetón y lleno de energía. Le encanta correr en espacios abiertos y pasar tiempo con su familia. Max es perfecto para familias activas que disfruten de actividades al aire libre. Tiene excelentes habilidades sociales con otros perros y es muy cariñoso con los niños. Su temperamento es equilibrado y es muy fácil de entrenar.",
        imagen: "assets/img/max.jpg",
        requisitos: [
            { texto: "Espacio amplio con jardín o acceso a parques" },
            { texto: "Familia activa que pueda dedicar tiempo a ejercicio diario" },
            { texto: "Disponibilidad para paseos frecuentes (mínimo 2 horas diarias)" },
            { texto: "Bueno con niños y otras mascotas" },
            { texto: "Compromiso con cuidados veterinarios regulares" },
            { texto: "Experiencia previa con perros grandes es recomendada" }
        ]
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
        descripcionAmplia: "Luna es una hermosa gata Persa de 2 años con pelaje blanco y suave. Tiene un carácter independiente pero muy cariñoso cuando se siente segura. Luna prefiere ambientes tranquilos donde pueda descansar, pero también disfruta de sesiones de juego. Es una gata que se adapta bien a apartamentos y espacios interiores.",
        imagen: "assets/img/luna.jpg",
        requisitos: [
            { texto: "Ambiente tranquilo y seguro" },
            { texto: "Disponibilidad para acicalar regularmente el pelaje" },
            { texto: "Paciencia y tiempo para adaptación inicial" },
            { texto: "Espacio con zonas altas para descansar" },
            { texto: "Cuidados especiales para la raza Persa" },
            { texto: "Hogar sin ruidos excesivos o cambios bruscos" }
        ]
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
        descripcionAmplia: "Rocky es un majestoso Pastor Alemán de 4 años, inteligente y leal. Es un perro que requiere estimulación mental constante y ejercicio regular. Rocky es muy protector de su familia y tiene un instinto natural de vigilancia. Es un excelente compañero para personas que buscan un perro de trabajo o con propósito.",
        imagen: "assets/img/rocky.jpg",
        requisitos: [
            { texto: "Espacio grande con zona segura" },
            { texto: "Dueño con experiencia en perros grandes y razas de trabajo" },
            { texto: "Estimulación mental y entrenamiento consistente" },
            { texto: "Ejercicio vigoroso diario (mínimo 2 horas)" },
            { texto: "Socialización adecuada con personas y otros animales" },
            { texto: "Conocimiento veterinario especializado en la raza" }
        ]
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
        descripcionAmplia: "Misu es una gatita adorable de 1 año con pelaje negro brillante. Es muy juguetona, traviesa y llena de energía. Misu ama interactuar con sus humanos y es muy curiosa por todo lo que la rodea. Es el compañero perfecto para personas que buscan un gato activo y entretenido.",
        imagen: "assets/img/misu.jpg",
        requisitos: [
            { texto: "Juguetes interactivos y enriquecimiento ambiental" },
            { texto: "Tiempo diario para juego e interacción" },
            { texto: "Espacio seguro para explorar y jugar" },
            { texto: "Personas pacientes y tolerantes con gatitas traviesas" },
            { texto: "Instalaciones verticales para trepar y escalar" },
            { texto: "Visitas veterinarias regulares" }
        ]
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
        descripcionAmplia: "Bella es una hermosa Labrador dorada de 2 años con un temperamento excepcional. Es dulce, amigable y excelente compañera para toda la familia. Bella es especialmente buena con niños y otros perros. Es idealmente una perrita de familia que busca un hogar lleno de amor.",
        imagen: "assets/img/bella.jpg",
        requisitos: [
            { texto: "Familia que pueda dedicar tiempo de calidad" },
            { texto: "Ejercicio regular y actividades al aire libre" },
            { texto: "Disponibilidad para cariño y afecto constante" },
            { texto: "Ambiente seguro con supervisión si hay niños" },
            { texto: "Acceso a agua para nadar es beneficioso" },
            { texto: "Control de peso y cuidados veterinarios regulares" }
        ]
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
        descripcionAmplia: "Félix es un gato atigrado de 3 años con un carácter vivaz y aventurero. Le encanta explorar y descubrir nuevas cosas en su entorno. Félix es independiente pero también disfruta de la compañía humana en pequeñas dosis. Es un gato perfecto para personas que aprecian la independencia felina.",
        imagen: "assets/img/felix.jpg",
        requisitos: [
            { texto: "Ventanas seguras y acceso a exterior protegido" },
            { texto: "Enriquecimiento ambiental con plantas para gatos" },
            { texto: "Respeto por los tiempos de juego e independencia" },
            { texto: "Acceso a espacios verticales y rascadores" },
            { texto: "Dueño paciente que entiende el carácter gatuno" },
            { texto: "Revisiones veterinarias anuales" }
        ]
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
        descripcionAmplia: "Toby es un adorable cachorro Beagle de 1 año lleno de energía y alegría. Es muy juguetón, curioso y sociable. Toby está en su etapa de crecimiento y requiere paciencia para el entrenamiento. Es perfecto para familias jóvenes que disfruten de un perro activo y divertido.",
        imagen: "assets/img/toby.jpg",
        requisitos: [
            { texto: "Familia con tiempo para crianza y educación" },
            { texto: "Entrenamiento consistente desde cachorro" },
            { texto: "Ejercicio moderado y socialización temprana" },
            { texto: "Paciencia con comportamientos típicos de cachorro" },
            { texto: "Educación en técnicas positivas de refuerzo" },
            { texto: "Presupuesto para vacunas y cuidados iniciales" }
        ]
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
        descripcionAmplia: "Nala es una hermosa gata Siamesa de 2 años conocida por su inteligencia y carácter comunicativo. Es muy vocal y le encanta 'conversar' con sus humanos. Nala es muy cariñosa y busca la compañía constante de sus personas favoritas. Es un gata que demanda atención pero ofrece afecto incondicional.",
        imagen: "assets/img/nala.jpg",
        requisitos: [
            { texto: "Compañía humana regular y atención" },
            { texto: "Tolerancia con vocalizaciones frecuentes" },
            { texto: "Persona que busca vínculo profundo con su mascota" },
            { texto: "Sesiones de juego interactivo" },
            { texto: "Acceso restringido al exterior por seguridad" },
            { texto: "Cuidados oftalmológicos especiales para la raza" }
        ]
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
        descripcionAmplia: "Cooper es un Cocker Spaniel adulto de 5 años con un temperamento tranquilo y afectuoso. Es un perro de compañía perfecto que busca un hogar tranquilo donde pueda disfrutar de su vida. Cooper es menos demandante en energía que los perros más jóvenes pero aún disfruta de paseos sosegados.",
        imagen: "assets/img/cooper.jpg",
        requisitos: [
            { texto: "Hogar tranquilo y predecible" },
            { texto: "Paseos moderados y ejercicio suave" },
            { texto: "Cuidado regular del pelaje" },
            { texto: "Afecto y compañía en ambiente relajado" },
            { texto: "Monitoreo de salud en edad adulta-mayor" },
            { texto: "Ideal para personas mayores o sedentarias" }
        ]
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
        descripcionAmplia: "Simba es un señor gato naranja de 4 años, muy mimoso y cariñoso. Su carácter dulce y su búsqueda constante de atención lo hacen un compañero perfecto. Simba aprecia un hogar tranquilo donde pueda ser el centro de atención. Es un gato que se muestra agradecido con sus cuidadores.",
        imagen: "assets/img/simba.jpg",
        requisitos: [
            { texto: "Persona que disfrute de gatos cariñosos y dependientes" },
            { texto: "Disponibilidad para caricias y tiempo de calidad" },
            { texto: "Hogar acogedor con lugares cómodos para descansar" },
            { texto: "Ambiente sin estrés ni cambios constantes" },
            { texto: "Monitoreo veterinario regular por edad" },
            { texto: "Preferencia por ser gato único en el hogar" }
        ]
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
        descripcionAmplia: "Rex es un pequenito Chihuahua de 2 años con una personalidad gigante. Aunque es pequeño en tamaño, tiene un corazón grande y mucho carácter. Rex es ideal para personas que buscan un compañero portátil pero con mucha personalidad. A pesar de su tamaño, es un perro que disfruta de actividades y aventuras.",
        imagen: "assets/img/rex.jpg",
        requisitos: [
            { texto: "Dueño que pueda llevarlo a diferentes lugares" },
            { texto: "Ropa abrigada en climas fríos" },
            { texto: "Cuidado especial para evitar caídas o lesiones" },
            { texto: "Hogar seguro sin huecos o peligros pequeños" },
            { texto: "Cuidado dental especializado para razas pequeñas" },
            { texto: "Mucho amor y socialización desde temprano" }
        ]
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
        descripcionAmplia: "Garfield es un gato anaranjado de 3 años con un carácter relajado y amoroso. Es ese tipo de gato que disfruta de la vida sin preocupaciones. Garfield ama dormir en lugares cómodos y recibir caricias ocasionales. Es perfecto para un hogar donde la calma es la prioridad.",
        imagen: "assets/img/garfield.jpg",
        requisitos: [
            { texto: "Lugares cómodos y acogedores para descansar" },
            { texto: "Monitoreo del peso y alimentación balanceada" },
            { texto: "Dueño que entienda necesidad de descanso" },
            { texto: "Caricias ocasionales cuando lo desee" },
            { texto: "Ambiente tranquilo y predecible" },
            { texto: "Revisiones veterinarias regulares por control de peso" }
        ]
    }
];

// Función para obtener parámetro de URL
function obtenerParametroURL(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

// Función para cargar y mostrar los detalles
function cargarDetalles() {
    const mascotaId = parseInt(obtenerParametroURL('id'));
    const mascota = mascotas.find(m => m.id === mascotaId);
    const contenedor = document.getElementById('contenedor-detalles');

    if (!mascota) {
        contenedor.innerHTML = `
            <div class="mascota-no-encontrada">
                <h2>Mascota no encontrada</h2>
                <p>Lo sentimos, no pudimos encontrar la mascota que buscas.</p>
                <a href="index.html#catalogo" class="boton-volver">Volver al Catálogo</a>
            </div>
        `;
        return;
    }

    // Construir la lista de requisitos
    const requisitosHTML = mascota.requisitos.map(req => `
        <li class="item-requisito">
            <span class="texto-requisito">${req.texto}</span>
        </li>
    `).join('');

    // Cargar el contenido completo
    contenedor.innerHTML = `
        <div class="contenedor-detalles">
            <div class="imagen-grande">
                ${
                    mascota.imagen 
                    ? `<img src="${mascota.imagen}" alt="Foto de ${mascota.nombre}" loading="lazy">`
                    : `🐾`
                }
            </div>

            
            <div class="info-detalle">
                <h1 class="nombre-mascota-detalle">${mascota.nombre}</h1>
                
                <div class="datos-mascota">
                    <div class="dato-item">
                        <div class="dato-etiqueta">Especie</div>
                        <div class="dato-valor">${mascota.especie.charAt(0).toUpperCase() + mascota.especie.slice(1)}</div>
                    </div>
                    <div class="dato-item">
                        <div class="dato-etiqueta">Raza</div>
                        <div class="dato-valor">${mascota.raza}</div>
                    </div>
                    <div class="dato-item">
                        <div class="dato-etiqueta">Edad</div>
                        <div class="dato-valor">${mascota.edad} años</div>
                    </div>
                    <div class="dato-item">
                        <div class="dato-etiqueta">Tamaño</div>
                        <div class="dato-valor">${mascota.tamaño.charAt(0).toUpperCase() + mascota.tamaño.slice(1)}</div>
                    </div>
                    <div class="dato-item">
                        <div class="dato-etiqueta">Ubicación</div>
                        <div class="dato-valor">${mascota.ubicacion}</div>
                    </div>
                </div>

                <div class="descripcion-amplia">
                    <h3 style="color: #2C3E50; margin-bottom: 1rem;">Sobre ${mascota.nombre}</h3>
                    <p>${mascota.descripcionAmplia}</p>
                </div>

                <div class="seccion-requisitos">
                    <h2 class="titulo-requisitos">Requisitos de Adopción</h2>
                    <ul class="lista-requisitos">
                        ${requisitosHTML}
                    </ul>
                </div>

                <div class="seccion-botones">
                    <a href="postulacion.html?mascota=${mascota.id}" class="boton-postular">
                        Postularme para Adopción
                    </a>
                    <a href="index.html#catalogo" class="boton-volver">
                        Volver al Catálogo
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Cargar detalles cuando el página esté lista
document.addEventListener('DOMContentLoaded', cargarDetalles);
