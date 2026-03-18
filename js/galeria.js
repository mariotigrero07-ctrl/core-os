// --- GALERÍA DINÁMICA CORE_OS ---

// LISTA DE FOTOS: Asegúrate de que los nombres coincidan EXACTAMENTE con los archivos en la carpeta /img
const misFotos = [
    "638412339_951819463844688_6615074473859220620_n.jpg", // Foto 1
    "88d0bbf4-97de-40b0-9d47-3896eb8a8f22.jfif",            // Foto 2
    "foto3.jpg"                                             // Foto 3 (Verifica este nombre)
];

function cargarFotos() {
    const grid = document.getElementById('galeria-grid');
    if(!grid) return;
    
    grid.innerHTML = misFotos.map((img, i) => `
        <div class="photo-card">
            <img src="img/${img}" alt="Visual Data" class="galeria-img" id="img-${i}">
            <p style="margin-top:10px; font-weight:800; font-size:0.8rem; color:var(--accent-blue)">IMG_0${i+1}</p>
        </div>
    `).join('');
    
    // Ejecutar el mecanismo de seguridad para la tercera foto (índice 2)
    const terceraFoto = document.getElementById('img-2');
    if (terceraFoto) {
        intentarRepararFoto(terceraFoto, misFotos[2]);
    }
}

// Función de seguridad para intentar cargar la foto con extensiones comunes
function intentarRepararFoto(imgElement, originalSrc) {
    const extensiones = [".png", ".PNG", ".JPG", ".jpeg", ".JPEG", ".gif"];
    let intento = 0;

    imgElement.onerror = function() {
        if (intento < extensiones.length) {
            // Reemplaza la extensión original por la siguiente en la lista
            const nuevoNombre = originalSrc.replace(/\.[^/.]+$/, extensiones[intento]);
            this.src = "img/" + nuevoNombre;
            console.log(`[CORE_OS]: Reintentando cargar foto 3 como: ${nuevoNombre}`);
            intento++;
        } else {
            // Si todas fallan, muestra el placeholder de error
            this.src = 'https://via.placeholder.com/200?text=Error+Archivo';
            this.style.filter = 'grayscale(100%)';
            console.error(`[CORE_OS]: No se pudo cargar la foto 3 después de varios intentos.`);
            // Desactiva el manejador de errores para evitar bucles infinitos
            this.onerror = null; 
        }
    };
}

window.addEventListener('load', cargarFotos);