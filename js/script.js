// Función para scroll suave a secciones
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Efecto en cards cuando se hace hover
const mascotaCards = document.querySelectorAll('.mascota-card');
mascotaCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Validación y envío del formulario
const contactForm = document.querySelector('.contacto-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const nombre = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensaje = this.querySelector('textarea').value;
        
        // Validación básica
        if (nombre && email && mensaje) {
            // Mostrar mensaje de éxito (puedes reemplazar esto con una llamada a un servidor)
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.`);
            
            // Limpiar formulario
            this.reset();
        } else {
            alert('Por favor completa todos los campos del formulario.');
        }
    });
}

// Agregar animación a los elementos cuando entran en vista
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar mascotas, beneficios y otros elementos
document.querySelectorAll('.mascota-card, .beneficio-card, .paso, .testimonio-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contador de estadísticas animado
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card h3');
    
    statCards.forEach(stat => {
        const finalValue = parseInt(stat.innerText.replace(/[^0-9]/g, ''));
        const increment = finalValue / 50;
        let currentValue = 0;
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(counter);
                
                // Restaurar el formato original
                if (stat.innerText.includes('+')) {
                    stat.innerText = finalValue + '+';
                } else if (stat.innerText.includes('años')) {
                    stat.innerText = finalValue + '+';
                }
            } else {
                stat.innerText = Math.floor(currentValue) + '+';
            }
        }, 30);
    });
}

// Iniciar animación de contadores cuando se hace scroll a la sección hero
const heroSection = document.querySelector('.hero');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (heroSection) {
    counterObserver.observe(heroSection);
}

// Efecto de parallax (opcional)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Cerrar menú móvil al hacer click en un enlace
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Aquí podrías cerrar un menú móvil si lo implementas
    });
});

// Log de carga (opcional - para debugging)
document.addEventListener('DOMContentLoaded', () => {
    console.log('AdopYa Landing Page cargada exitosamente');
});

// Agregar clase activa al enlace de navegación actual
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            // Remover clase activa de todos los enlaces
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = 'var(--text-color)';
                link.style.borderBottom = 'none';
            });
            
            // Agregar clase activa al enlace actual
            if (navLink) {
                navLink.style.color = 'var(--primary-color)';
                navLink.style.borderBottom = '2px solid var(--primary-color)';
                navLink.style.paddingBottom = '5px';
            }
        }
    });
});
