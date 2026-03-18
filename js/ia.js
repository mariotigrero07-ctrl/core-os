// --- SISTEMA CORE_OS ---

window.addEventListener('load', () => {
    if (localStorage.getItem("active_session") === "true") {
        document.getElementById("auth-container").style.display = "none";
        iniciarBienvenida();
    }
});

function login() {
    const u = document.getElementById("userEmail").value;
    const p = document.getElementById("userPass").value;
    if (u === "mariotigrero07@gmail.com" && p === "1707D") {
        localStorage.setItem("active_session", "true");
        document.getElementById("auth-container").style.display = "none";
        iniciarBienvenida();
    } else { alert("Datos incorrectos"); }
}

function iniciarBienvenida() {
    const win = document.getElementById('chat-window');
    const textos = ["¡Hola, Mario!", "Bienvenido a tu sitio oficial.", "Núcleo AMD A9 activo y listo."];
    
    textos.forEach((txt, i) => {
        setTimeout(() => {
            win.innerHTML += `<div class="msg bot">${txt}</div>`;
            win.scrollTop = win.scrollHeight;
        }, i * 800); // Salen una por una
    });
}

function showSection(id) {
    document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active'));
    document.getElementById(id + '-sec').classList.add('active');
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const win = document.getElementById('chat-window');
    if (!input.value.trim()) return;

    win.innerHTML += `<div class="msg user">${input.value}</div>`;
    const q = input.value.toLowerCase();
    input.value = "";

    setTimeout(() => {
        let r = "Comando procesado. Sin errores en el sistema.";
        if(q.includes("procesador")) r = "Hardware detectado: AMD A9-9420, 16GB RAM. Rendimiento estable.";
        win.innerHTML += `<div class="msg bot"><b>[IA]:</b> ${r}</div>`;
        win.scrollTop = win.scrollHeight;
    }, 600);
}

function logout() { localStorage.removeItem("active_session"); location.reload(); }