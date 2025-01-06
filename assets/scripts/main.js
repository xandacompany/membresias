//Función para abrir el menú del celular
function abrir_menu() {
    document.getElementById('menu_celular').style.display = 'flex';
}





//Función para cerrar el menú del celular
function cerrar_menu() {
    document.getElementById('menu_celular').style.display = 'none';
}

const menuItems = document.querySelectorAll('.nav-1-ul .nav-1-li a');
const contenedorMenu = document.querySelector('.contenedor-menu-celular-main');

contenedorMenu.innerHTML = '';

menuItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-celular-opciones');
    
    const a = document.createElement('a');
    a.href = item.href; 
    a.textContent = item.textContent;
    
    a.addEventListener('click', function() {
        cerrar_menu();
    });

    div.appendChild(a);
    
    contenedorMenu.appendChild(div);
});





// Función para manejar la visibilidad del menú en función del tamaño de la ventana
function ajustarMenu() {
    const menuCelular = document.getElementById('menu_celular');
    
    if (window.innerWidth > 800) {
        // Si la ventana es más grande que 800px, ocultamos el menú
        menuCelular.style.display = 'none';
    } else {
        // Si la ventana es menor o igual a 800px, dejamos el menú según el estado de la variable
        if (menuCelular.style.display === 'flex') {
            // Si el menú está visible, lo mantenemos visible
            menuCelular.style.display = 'flex';
        } else {
            // Si no está visible, lo dejamos oculto
            menuCelular.style.display = 'none';
        }
    }
}

ajustarMenu();

window.addEventListener('resize', ajustarMenu);





// Script para el el botón que te manda al inicio de la página (hasta arriba)
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

if (scrollToTopBtn) {  // Verifica si el botón realmente existe
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.classList.add("show"); // Muestra el botón con transición
        } else {
            scrollToTopBtn.classList.remove("show"); // Lo oculta con transición
        }
    };
}





// Función para hacer scroll al inicio de la página

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}





// Script para la cuenta regresiva
const duration = 3 * 60 * 60 * 1000;

// Obtenemos el tiempo de expiración guardado en localStorage o inicializamos uno nuevo
let endTime = localStorage.getItem('endTime');

// Si no existe 'endTime', lo configuramos para que dure 3 horas desde el momento actual
if (!endTime) {
    endTime = Date.now() + duration;
    localStorage.setItem('endTime', endTime);
}

// Función para actualizar el contador
function updateCountdown() {
    const now = Date.now();
    let timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
        endTime = Date.now() + duration;
        localStorage.setItem('endTime', endTime);
        timeRemaining = duration;
    }

    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

    setTimeout(updateCountdown, 1000);
}

updateCountdown();





// Script para compartir el sitio web
document.addEventListener("DOMContentLoaded", function() {
    // Selección de los enlaces de compartir
    const shareLinks = document.querySelectorAll('.share-link');

    const currentUrl = window.location.href;

    // Iterar sobre cada enlace de compartir
    shareLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Evitar la acción predeterminada (navegar a la URL)

            const platform = link.getAttribute('data-platform');
            let shareUrl = '';

            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
                    break;
                case 'X': // Twitter
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
                    break;
                case 'generic':
                    // Copiar al portapapeles
                    navigator.clipboard.writeText(currentUrl).then(() => {
                        alert('¡URL copiada al portapapeles!');
                    }).catch(err => {
                        console.error('No se pudo copiar al portapapeles', err);
                    });
                    return; // Si es 'generic', no abrir la ventana de compartir
                default:
                    console.log('Plataforma no soportada');
                    return;
            }

            // Si la plataforma es soportada, abrir una nueva ventana
            window.open(shareUrl, '_blank');
        });
    });
});





// Script para generar dinámicamente los textos de "fulanito compró tal suscripción"
const nombres = [
    "Carlos Pérez", "Ana García", "Luis Fernández", "María López", "Pedro Rodríguez",
    "Mónica Gutiérrez", "Juan Martínez", "Lucía Sánchez", "David González", "Elena Ramírez",
    "Miguel Díaz", "Laura Herrera", "Raúl Vargas", "Carmen Torres", "José López",
    "Patricia Moreno", "Fernando Díaz", "Marta Ruiz", "Sergio Pérez", "Isabel Fernández",
    "Javier García", "Susana Martínez", "Antonio Sánchez", "Beatriz Rodríguez", "Pedro González",
    "Pablo Martínez", "Silvia López", "Ricardo Torres", "Lorena Herrera", "Luis Ramírez",
    "Alba González", "Carlos Sánchez", "Marina Fernández", "Raquel Martínez", "Antonio Díaz",
    "Eva López", "José María García", "Rosa Ramírez", "Manuel Rodríguez", "Teresa Pérez",
    "Alicia García", "Luis Alberto López", "Elena Sánchez", "Andrés Fernández", "Patricia Díaz",
    "Héctor García", "Cristina Pérez", "Marta González", "Esteban Rodríguez", "Ángeles Martínez",
    "Tomás Fernández", "Sara López", "Iván Sánchez", "Celia Pérez", "Joaquín Ramírez",
    "Raquel Fernández", "Juan José González", "Cecilia Martínez", "Óscar Sánchez", "Sonia Torres",
    "Antonio González", "Gema López", "Jorge Ramírez", "Paula Pérez", "Eduardo Díaz",
    "Ángela Sánchez", "Carlos Ramírez", "Lorena Martínez", "Luis Hernández", "Patricia González",
    "Ignacio Torres", "Julia López", "Francisco Pérez", "Marcos González", "Mónica Martínez",
    "Isabel Rodríguez", "Víctor Fernández", "Daniel López", "Inmaculada Sánchez", "Juan Ramón Pérez"
];

// Lista de suscripciones
const suscripciones = ["Oro", "Platino", "Bronce"];

// Lista de imágenes de perfil
const imagenes = [
    "https://randomuser.me/api/portraits/men/1.jpg", 
    "https://randomuser.me/api/portraits/women/1.jpg", 
    "https://randomuser.me/api/portraits/men/2.jpg", 
    "https://randomuser.me/api/portraits/women/2.jpg", 
    "https://randomuser.me/api/portraits/men/3.jpg", 
    "https://randomuser.me/api/portraits/women/3.jpg", 
    "https://randomuser.me/api/portraits/men/4.jpg", 
    "https://randomuser.me/api/portraits/women/4.jpg", 
    "https://randomuser.me/api/portraits/men/5.jpg", 
    "https://randomuser.me/api/portraits/women/5.jpg", 
    "https://randomuser.me/api/portraits/men/6.jpg", 
    "https://randomuser.me/api/portraits/women/6.jpg", 
    "https://randomuser.me/api/portraits/men/7.jpg", 
    "https://randomuser.me/api/portraits/women/7.jpg", 
    "https://randomuser.me/api/portraits/men/8.jpg", 
    "https://randomuser.me/api/portraits/women/8.jpg", 
    "https://randomuser.me/api/portraits/men/9.jpg", 
    "https://randomuser.me/api/portraits/women/9.jpg", 
    "https://randomuser.me/api/portraits/men/10.jpg", 
    "https://randomuser.me/api/portraits/women/10.jpg", 
    "https://randomuser.me/api/portraits/men/11.jpg", 
    "https://randomuser.me/api/portraits/women/11.jpg", 
    "https://randomuser.me/api/portraits/men/12.jpg", 
    "https://randomuser.me/api/portraits/women/12.jpg", 
    "https://randomuser.me/api/portraits/men/13.jpg", 
    "https://randomuser.me/api/portraits/women/13.jpg", 
    "https://randomuser.me/api/portraits/men/14.jpg", 
    "https://randomuser.me/api/portraits/women/14.jpg", 
    "https://randomuser.me/api/portraits/men/15.jpg", 
    "https://randomuser.me/api/portraits/women/15.jpg", 
    "https://randomuser.me/api/portraits/men/16.jpg", 
    "https://randomuser.me/api/portraits/women/16.jpg", 
    "https://randomuser.me/api/portraits/men/17.jpg", 
    "https://randomuser.me/api/portraits/women/17.jpg", 
    "https://randomuser.me/api/portraits/men/18.jpg", 
    "https://randomuser.me/api/portraits/women/18.jpg", 
    "https://randomuser.me/api/portraits/men/19.jpg", 
    "https://randomuser.me/api/portraits/women/19.jpg", 
    "https://randomuser.me/api/portraits/men/20.jpg", 
    "https://randomuser.me/api/portraits/women/20.jpg", 
    "https://randomuser.me/api/portraits/men/21.jpg", 
    "https://randomuser.me/api/portraits/women/21.jpg", 
    "https://randomuser.me/api/portraits/men/22.jpg", 
    "https://randomuser.me/api/portraits/women/22.jpg", 
    "https://randomuser.me/api/portraits/men/23.jpg", 
    "https://randomuser.me/api/portraits/women/23.jpg", 
    "https://randomuser.me/api/portraits/men/24.jpg", 
    "https://randomuser.me/api/portraits/women/24.jpg", 
    "https://randomuser.me/api/portraits/men/25.jpg", 
    "https://randomuser.me/api/portraits/women/25.jpg", 
    "https://randomuser.me/api/portraits/men/26.jpg", 
    "https://randomuser.me/api/portraits/women/26.jpg", 
    "https://randomuser.me/api/portraits/men/27.jpg", 
    "https://randomuser.me/api/portraits/women/27.jpg", 
    "https://randomuser.me/api/portraits/men/28.jpg", 
    "https://randomuser.me/api/portraits/women/28.jpg", 
    "https://randomuser.me/api/portraits/men/29.jpg", 
    "https://randomuser.me/api/portraits/women/29.jpg", 
    "https://randomuser.me/api/portraits/men/30.jpg", 
    "https://randomuser.me/api/portraits/women/30.jpg", 
    "https://randomuser.me/api/portraits/men/31.jpg", 
    "https://randomuser.me/api/portraits/women/31.jpg", 
    "https://randomuser.me/api/portraits/men/32.jpg", 
    "https://randomuser.me/api/portraits/women/32.jpg", 
    "https://randomuser.me/api/portraits/men/33.jpg", 
    "https://randomuser.me/api/portraits/women/33.jpg", 
    "https://randomuser.me/api/portraits/men/34.jpg", 
    "https://randomuser.me/api/portraits/women/34.jpg", 
    "https://randomuser.me/api/portraits/men/35.jpg", 
    "https://randomuser.me/api/portraits/women/35.jpg", 
    "https://randomuser.me/api/portraits/men/36.jpg", 
    "https://randomuser.me/api/portraits/women/36.jpg", 
    "https://randomuser.me/api/portraits/men/37.jpg", 
    "https://randomuser.me/api/portraits/women/37.jpg", 
    "https://randomuser.me/api/portraits/men/38.jpg", 
    "https://randomuser.me/api/portraits/women/38.jpg", 
    "https://randomuser.me/api/portraits/men/39.jpg", 
    "https://randomuser.me/api/portraits/women/39.jpg", 
    "https://randomuser.me/api/portraits/men/40.jpg", 
    "https://randomuser.me/api/portraits/women/40.jpg", 
    "https://randomuser.me/api/portraits/men/41.jpg", 
    "https://randomuser.me/api/portraits/women/41.jpg", 
    "https://randomuser.me/api/portraits/men/42.jpg", 
    "https://randomuser.me/api/portraits/women/42.jpg", 
    "https://randomuser.me/api/portraits/men/43.jpg", 
    "https://randomuser.me/api/portraits/women/43.jpg", 
    "https://randomuser.me/api/portraits/men/44.jpg", 
    "https://randomuser.me/api/portraits/women/44.jpg", 
    "https://randomuser.me/api/portraits/men/45.jpg", 
    "https://randomuser.me/api/portraits/women/45.jpg", 
    "https://randomuser.me/api/portraits/men/46.jpg", 
    "https://randomuser.me/api/portraits/women/46.jpg", 
    "https://randomuser.me/api/portraits/men/47.jpg", 
    "https://randomuser.me/api/portraits/women/47.jpg", 
    "https://randomuser.me/api/portraits/men/48.jpg", 
    "https://randomuser.me/api/portraits/women/48.jpg", 
    "https://randomuser.me/api/portraits/men/49.jpg", 
    "https://randomuser.me/api/portraits/women/49.jpg", 
    "https://randomuser.me/api/portraits/men/50.jpg",
    "https://randomuser.me/api/portraits/women/50.jpg"
];

// Función para generar un texto de tarjeta aleatorio
function generarTexto() {
    // Elegir un nombre aleatorio de la lista
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    // Elegir una suscripción aleatoria
    const suscripcionAleatoria = suscripciones[Math.floor(Math.random() * suscripciones.length)];
    
    return `${nombreAleatorio} compró la suscripción ${suscripcionAleatoria}`;
}

// Función para crear las tarjetas
function crearTarjetas() {
    const container = document.getElementById("tarjetas-container");
    
    // Limpiar el contenedor antes de agregar nuevas tarjetas
    container.innerHTML = '';

    // Crear 4 tarjetas con nombres y suscripciones aleatorias
    for (let i = 0; i < 4; i++) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        // Crear la imagen aleatoria
        const img = document.createElement("img");
        img.src = imagenes[Math.floor(Math.random() * imagenes.length)];
        img.alt = "Imagen de perfil";

        // Crear el contenedor de texto (contenedor-texto-tarjeta-compro)
        const contenedorTexto = document.createElement("div");
        contenedorTexto.classList.add("contenedor-texto-tarjeta-compro");

        // Crear el texto de la tarjeta
        const texto = document.createElement("div");
        texto.classList.add("texto");
        texto.textContent = generarTexto();

        // Agregar el texto al contenedor
        contenedorTexto.appendChild(texto);

        // Agregar la imagen y el contenedor de texto a la tarjeta
        tarjeta.appendChild(img);
        tarjeta.appendChild(contenedorTexto);

        // Agregar la tarjeta al contenedor principal
        container.appendChild(tarjeta);
    }
}

// Agregar evento para regenerar las tarjetas cada vez que la animación termine
document.getElementById("tarjetas-container").addEventListener('animationiteration', crearTarjetas);

// Llamar a la función para crear las tarjetas al cargar la página
crearTarjetas();





// Script de movimiento del carrito
const cartIcon = document.querySelector('.fa-cart-shopping');
    
// Función para alternar la clase cada 10 segundos
setInterval(() => {
    cartIcon.classList.toggle('transformed');
}, 3500); // 3500 ms = 3.5 segundos





// Script del carrusel horizontal de nuestras marcas
document.addEventListener('DOMContentLoaded', () => {
    const jsonUrl = 'assets/json/marcas.json';

    const track = document.querySelector('.carousel-track-2');

    async function loadImages() {
        try {
            const response = await fetch(jsonUrl);
            const data = await response.json();

            const generateCards = (imagenesArray) => {
                imagenesArray.forEach(imageData => {
                    const card = document.createElement('div');
                    card.classList.add('card');

                    const img = document.createElement('img');
                    img.src = imageData.src;
                    img.alt = imageData.alt;
                    img.title = imageData.title;
                    img.classList.add(imageData.class);
                    img.setAttribute('loading', imageData.loading);

                    card.appendChild(img);

                    track.appendChild(card);
                });
            };

            generateCards(data.imagenes_nuestras_marcas);

            const cards = [...track.children];
            cards.forEach(card => {
                const clone = card.cloneNode(true);
                track.appendChild(clone);
            });

        } catch (error) {
            console.error('Error al cargar el archivo JSON:', error);
        }
    }

    loadImages();
});





// Script del carrusel horizontal de los testimonios
const track = document.querySelector('.carousel-track-3');
const cards = [...track.children];
cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
});





//Script para el carrusel horizontal de las marcas que nos respaldan
document.addEventListener('DOMContentLoaded', () => {
    // Ruta del archivo JSON
    const jsonUrl = 'assets/json/package.json';

    // Elemento donde se agregan las tarjetas
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let hasMoved = false;   // Verificar si el carrusel ha sido movido
    let movesRight = 0;     // Contador de movimientos hacia la derecha
    let movesLeft = 0;      // Contador de movimientos hacia la izquierda

    // Función para cargar el JSON
    async function loadImages() {
        try {
            // Fetch para obtener el archivo JSON
            const response = await fetch(jsonUrl);
            const data = await response.json();

            // Función para generar las tarjetas dinámicamente
            const generateCards = (imagenesArray) => {
                imagenesArray.forEach(imageData => {
                    // Crear el contenedor de la tarjeta
                    const card = document.createElement('div');
                    card.classList.add('card-2');

                    // Crear la imagen dentro de la tarjeta
                    const img = document.createElement('img');
                    img.src = imageData.src;
                    img.alt = imageData.alt;
                    img.title = imageData.title;
                    img.classList.add(imageData.class);
                    img.setAttribute('loading', imageData.loading);

                    // Agregar la imagen al contenedor de la tarjeta
                    card.appendChild(img);

                    // Agregar la tarjeta al track del carrusel
                    track.appendChild(card);
                });
            };

            // Generar las tarjetas para cada tipo de imagen (importante, subimportante, menos importante)
            generateCards(data.imagenes_importantes);
            generateCards(data.imagenes_subimportantes);
            generateCards(data.imagenes_menos_importantes);

            // Clonar las tarjetas para el efecto de carrusel infinito
            const cards = [...track.children];
            cards.forEach(card => {
                const clone = card.cloneNode(true);
                track.appendChild(clone);
            });

        } catch (error) {
            console.error('Error al cargar el archivo JSON:', error);
        }
    }

    // Llamar la función para cargar las imágenes
    loadImages();

    // Función para mover el carrusel hacia la izquierda
    const moveLeft = () => {
        // Solo permitir retroceder si ya se ha movido hacia adelante
        if (!hasMoved || movesLeft >= movesRight) return;

        const currentTransform = track.style.transform ? track.style.transform : 'translateX(0)';
        const currentX = parseInt(currentTransform.replace('translateX(', '').replace('px)', ''), 10);
        const cardWidth = track.children[0].offsetWidth + 20; // Incluyendo el "gap"
        const newX = currentX + cardWidth;
        track.style.transform = `translateX(${newX}px)`;

        // Incrementar el contador de movimientos hacia la izquierda
        movesLeft++;
    };

    // Función para mover el carrusel hacia la derecha
    const moveRight = () => {
        const currentTransform = track.style.transform ? track.style.transform : 'translateX(0)';
        const currentX = parseInt(currentTransform.replace('translateX(', '').replace('px)', ''), 10);
        const cardWidth = track.children[0].offsetWidth + 20; // Incluyendo el "gap"
        const newX = currentX - cardWidth;
        track.style.transform = `translateX(${newX}px)`;

        // Establecer que el carrusel ya se ha movido hacia la derecha
        if (!hasMoved) {
            hasMoved = true;
        }

        // Incrementar el contador de movimientos hacia la derecha
        movesRight++;
    };

    // Añadir eventos a los botones
    prevButton.addEventListener('click', moveLeft);
    nextButton.addEventListener('click', moveRight);
});
