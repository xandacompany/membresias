# Proyecto de Membresías - Mundo Ejecutivo

Este proyecto es un sitio web para la compra de membresías ofrecidas por la empresa **Mundo Ejecutivo**. A través de este sitio, los usuarios pueden acceder a diversos beneficios como eventos exclusivos, revistas impresas y digitales, entrevistas, y difusión de la marca del cliente.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

### Carpeta raíz

- **index.html**: El archivo principal que carga la página de inicio.
- **styles.css**: Archivo principal de estilos para la página.
- **screenshort.png**: Imagen de vista previa del sitio.
- **sistemap.xml**: Archivo generado automáticamente que contiene información sobre las páginas del sitio.
- **manifest.json**: Archivo que define los metadatos del sitio, como el nombre, iconos y temas para la instalación en dispositivos.
- **licence.txt**: Documento que contiene la licencia del proyecto.
- **robots.txt**: Archivo que controla el acceso de los motores de búsqueda al sitio.

### Carpetas

- **assets/**: Contiene todos los recursos estáticos del sitio.
  - **images/**: Imágenes en formatos PNG, JPG y WebP, incluidos los íconos y el favicon.
  - **styles/**: Hojas de estilo CSS, como `main.css`.
  - **scripts/**: Archivos JavaScript, como `main.js`.
  - **json/**: Archivos JSON para cargar dinámicamente contenido en el sitio.
    - **marcas.json**: Contiene información de las marcas que conforman la comunidad de Grupo Mundo Ejecutivo.
    - **package.json**: Contiene información de las marcas que respaldan a Mundo Ejecutivo.
  
- **pages/**: Contiene las subpáginas del sitio web.

- **docs/**: Carpeta que contiene este archivo `README.md`.

- **config/**: Carpeta que contiene el archivo `sistem.py`, el cual registra todas las páginas de la carpeta `pages` en el archivo `sistemap.xml`.

## Funcionalidad

El sitio tiene dos secciones clave que cargan su contenido dinámicamente desde archivos JSON:

### 1. **Nuestras Marcas**
En esta sección se cargan las marcas que forman parte del Grupo Mundo Ejecutivo. El contenido de esta sección se genera dinámicamente utilizando los datos de **marcas.json**. 

<!-- Sección carrusel horizontal nuestras marcas -->
<section class="section-universal fondo-gris ajuste-grid-1" style="overflow-x: hidden;">
    <h2 class="h2-2 color-deg-1" style="width: 100%;" data-aos="fade-up">NUESTRAS MARCAS</h2>
    <p class="parrafo-5 color-negro" data-aos="fade-up">Conoce todas las marcas que conforman la comunidad de <span class="color-deg-1">Grupo Mundo Ejecutivo</span></p>
    <div class="carousel-2">
        <div class="carousel-track-2">
            <!-- Las tarjetas se generarán aquí dinámicamente -->
        </div>
    </div>            
</section>

### 2. **Marcas que nos Respaldan**
Esta sección muestra las marcas que han trabajado con Mundo Ejecutivo. El contenido de esta sección se carga dinámicamente desde **package.json**. 

<!-- Sección carrusel horizontal marcas que nos respaldan -->
<section class="section-universal fondo-imagen-negra ajuste-grid-1" style="overflow-x: hidden;">
    <h2 class="h2-2 color-deg-1" style="width: 100%;" data-aos="fade-up">MARCAS QUE NOS RESPALDAN</h2>
    <p class="parrafo-5 color-blanco" data-aos="fade-up">LAS 1000 EMPRESAS <span class="color-deg-1">MÁS IMPORTANTES</span> DE MÉXICO QUE HAN TRABAJADO CON NOSOTROS</p>
    <div class="carousel">
        <div class="carousel-track">
            <!-- Las tarjetas se generarán aquí dinámicamente -->
        </div>
    </div>
    <div class="carousel-buttons">
        <button class="carousel-prev">◀</button>
        <button class="carousel-next">▶</button>
    </div>
</section>