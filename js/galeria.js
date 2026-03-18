const misFotos = [
    "638412339_951819463844688_6615074473859220620_n.jpg",
    "88d0bbf4-97de-40b0-9d47-3896eb8a8f22.jfif",
    "foto3.jpg" // Agrega las que quieras separadas por coma
];

function cargarFotos() {
    const grid = document.getElementById('galeria-grid');
    if(!grid) return;
    grid.innerHTML = misFotos.map((img, i) => `
        <div class="photo-card">
            <img src="img/${img}" onerror="this.src='https://via.placeholder.com/200?text=Error+Archivo'">
            <p style="margin-top:10px; font-weight:800; color:var(--accent-blue)">IMG_0${i+1}</p>
        </div>
    `).join('');
}

window.addEventListener('load', cargarFotos);