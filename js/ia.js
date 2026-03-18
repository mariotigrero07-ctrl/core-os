// --- SISTEMA DE SESIÓN PERSISTENTE CORE_OS ---

// Esto se ejecuta apenas abres la página
window.addEventListener('load', function() {
    const sesionGuardada = localStorage.getItem("sesion_activa");
    const loginContainer = document.getElementById("auth-container");
    
    if (sesionGuardada === "true" && loginContainer) {
        // Si ya inició sesión antes, escondemos el cuadro de login de inmediato
        loginContainer.style.display = "none";
        console.log("[SISTEMA]: Usuario autenticado. Sesión recuperada.");
    }
});

// Esta es tu función de entrar (asegúrate de que el nombre coincida con el de tu HTML)
function login() {
    const user = document.getElementById("userEmail").value;
    const pass = document.getElementById("userPass").value;

    // Aquí pones tus datos de acceso
    if (user === "mariotigrero07@gmail.com" && pass === "1707D") {
        
        // GUARDAMOS EL "TICKET" EN EL CELULAR
        localStorage.setItem("sesion_activa", "true");
        
        // Escondemos el login con una transición suave
        document.getElementById("auth-container").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("auth-container").style.display = "none";
        }, 300);

        alert("Bienvenido de nuevo, Mario.");
    } else {
        alert("Error: Revisa tu correo o clave.");
    }
}

// Para cuando quieras cerrar la sesión de verdad
function logout() {
    localStorage.removeItem("sesion_activa");
    location.reload(); // Esto hace que vuelva a pedir el login
}

function logout() {
    location.reload(); // Reinicia la app al login
}

// Configuración de la IA (Resumen de tu hardware AMD A9)
function sendMessage() {
    const input = document.getElementById('userInput');
    const chatWin = document.getElementById('chat-window');
    if (!input.value) return;

    chatWin.innerHTML += `<div class="msg user">${input.value}</div>`;
    
    setTimeout(() => {
        chatWin.innerHTML += `<div class="msg bot"><b>[CORE_OS]:</b> Procesando en AMD A9... Sistema estable.</div>`;
        chatWin.scrollTop = chatWin.scrollHeight;
    }, 500);
    input.value = "";
}