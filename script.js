document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidad del formulario de contacto
    document.getElementById('formulario-contacto')?.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validar que los campos no estén vacíos
        if (nombre && email && mensaje) {
            // Mostrar mensaje de éxito
            document.getElementById('mensaje-enviado').textContent = 'Mensaje enviado con éxito.';
            document.getElementById('mensaje-enviado').style.color = 'lightgreen';
            
            // Agregar animación de éxito
            document.getElementById('mensaje-enviado').style.opacity = '1';
            setTimeout(() => {
                document.getElementById('mensaje-enviado').style.opacity = '0';
            }, 3000);

            // Limpiar el formulario
            document.getElementById('formulario-contacto').reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Mostrar/ocultar menú en móviles
    document.getElementById('menu-toggle').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
        
        // Cambiar color del botón según el estado
        this.style.color = menu.classList.contains('active') ? 'silver' : 'white';
    });

    // Ajustes dinámicos para móviles
    function ajustarParaMoviles() {
        const anchoPantalla = window.innerWidth;

        // Si el ancho de la pantalla es menor a 768px (tamaño típico para móviles)
        if (anchoPantalla < 768) {
            console.log("Modo móvil detectado");
            
            // Cambiar el texto del botón de enviar
            const botonEnviar = document.querySelector('#formulario-contacto button');
            if (botonEnviar) {
                botonEnviar.textContent = 'Enviar Mensaje';
            }
        } else {
            console.log("Modo escritorio detectado");
            
            // Restaurar el texto del botón de enviar
            const botonEnviar = document.querySelector('#formulario-contacto button');
            if (botonEnviar) {
                botonEnviar.textContent = 'Enviar';
            }
        }
    }

    // Cambiar entre Modo Oscuro y Modo Claro
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Revisamos si hay una preferencia guardada en localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggleButton.textContent = "☀️ Modo Claro"; // Cambiar texto del botón
    } else {
        body.classList.add("light-mode");
        themeToggleButton.textContent = "🌙 Modo Oscuro"; // Cambiar texto del botón
    }

    // Evento para alternar el tema
    themeToggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Actualizar localStorage con la preferencia
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggleButton.textContent = "☀️ Modo Claro";
        } else {
            localStorage.setItem("theme", "light");
            themeToggleButton.textContent = "🌙 Modo Oscuro";
        }
    });
});