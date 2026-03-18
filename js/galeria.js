const misFotos = [
    "638412339_951819463844688_6615074473859220620_n.jpg",
    "88d0bbf4-97de-40b0-9d47-3896eb8a8f22.jfif",
    "foto3.jpg",
    "foto4.png" // Agregas las que quieras aquí
];

function cargarFotos() {
    const grid = document.getElementById('galeria-grid');
    if(!grid) return;
    grid.innerHTML = "";

    misFotos.forEach((imgName, i) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        
        const img = document.createElement('img');
        img.src = `img/${imgName}`;
        
        // Reparador automático de extensiones
        img.onerror = function() {
            const exts = [".jpg", ".png", ".jfif", ".jpeg", ".webp"];
            let t = 0;
            const retry = () => {
                if(t < exts.length) {
                    this.src = `img/${imgName.split('.')[0]}${exts[t]}`;
                    t++;
                } else {
                    this.src = "https://via.placeholder.com/150?text=Error";
                    this.onerror = null;
                }
            };
            retry();
        };

        card.innerHTML = `<p style="font-size:0.7rem; color:gray; margin-bottom:5px;">DATA_0${i+1}</p>`;
        card.prepend(img);
        grid.appendChild(card);
    });
}
window.addEventListener('load', cargarFotos);