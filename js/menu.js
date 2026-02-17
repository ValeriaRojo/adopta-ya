document.addEventListener("DOMContentLoaded", () => {
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
});
