function showSection(sectionId) {
    document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId + '-sec').classList.add('active');
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const window = document.getElementById('chat-window');
    const val = input.value.trim();
    if(!val) return;

    window.innerHTML += `<div class="msg user">${val}</div>`;
    input.value = "";

    setTimeout(() => {
        let res = "Comando procesado en el núcleo AMD A9.";
        const q = val.toLowerCase();
        if(q.includes("hola")) res = "Saludos, Mario. Todos los sistemas están operativos.";
        if(q.includes("hardware") || q.includes("pc")) res = "REPORTE: AMD A9-9420 | 16GB RAM | Radeon R5 Graphics.";
        
        window.innerHTML += `<div class="msg bot"><b>[GEMINI_CORE]:</b><br>${res}</div>`;
        window.scrollTop = window.scrollHeight;
    }, 500);
}