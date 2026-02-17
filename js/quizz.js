// Quizz
const respuestas = {
    perro: 0,
    gato: 0,
    otro: 0
};

// Agregar eventos a los botones de respuesta
document.querySelectorAll('.boton-terciariopregunta').forEach(boton => {
     boton.addEventListener('click', function() {
        const respuesta = this.dataset.respuesta;
        respuestas[respuesta]++;
        this.parentElement.querySelectorAll('button').forEach(btn => btn.style.opacity = '0.5');
        this.style.opacity = '1';
    });
});

// Evento para mostrar el resultado
document.getElementById('ver-resultado').addEventListener('click', function() {
    const max = Math.max(respuestas.perro, respuestas.gato, respuestas.otro);
    let resultado, titulo, descripcion;

    if (respuestas.perro === max && respuestas.perro > 0) {
        resultado = 'perro';
        titulo = '🐶 ¡Un perro es ideal para ti!';
        descripcion = 'Los perros son leales, activos y aman pasar tiempo con su familia. Son perfectos si tienes tiempo y energía para compartir.';
    } else if (respuestas.gato === max && respuestas.gato > 0) {
        resultado = 'gato';
        titulo = '🐱 ¡Un gato es ideal para ti!';
        descripcion = 'Los gatos son independientes, cariñosos y perfectos para espacios reducidos. Son excelentes si buscas una mascota más tranquila.';
    } else {
        resultado = 'otro';
        titulo = '🐾 ¡Exploremos más opciones!';
        descripcion = 'Existen muchas mascotas diferentes. Te invitamos a ver nuestro catálogo completo para encontrar tu compañero perfecto.';
    }

    document.getElementById('resultado-titulo').textContent = titulo;
    document.getElementById('resultado-descripcion').textContent = descripcion;
    document.getElementById('resultado-seccion').style.display = 'block';
                
    document.getElementById('resultado-seccion').scrollIntoView({ behavior: 'smooth' });
});
