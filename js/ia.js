// --- NÚCLEO DE INTELIGENCIA ALPHA_CORE ---

const SYSTEM_DATA = {
    processor: "AMD A9-9420 APU",
    ram: "16GB DDR4",
    graphics: "Radeon R5 Graphics",
    os: "CORE_OS v10.5 (Optimized for Redmi 13C)",
    status: "Online"
};

function showSection(sectionId) {
    document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId + '-sec').classList.add('active');
    
    // Auto-scroll al final si entras al chat
    if(sectionId === 'chat') {
        const win = document.getElementById('chat-window');
        win.scrollTop = win.scrollHeight;
    }
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const window = document.getElementById('chat-window');
    const msg = input.value.trim();
    
    if(!msg) return;

    // Mostrar mensaje del usuario
    window.innerHTML += `<div class="msg user">${msg}</div>`;
    input.value = "";
    window.scrollTop = window.scrollHeight;

    // Simular "Pensamiento" de la IA
    setTimeout(() => {
        const response = procesarRespuesta(msg.toLowerCase());
        window.innerHTML += `
            <div class="msg bot">
                <b style="color:var(--accent-blue)">[GEMINI_CORE]:</b><br>
                ${response}
            </div>`;
        window.scrollTop = window.scrollHeight;
    }, 600);
}

function procesarRespuesta(q) {
    // Lógica de Inteligencia Adaptativa
    if (q.includes("hola") || q.includes("hey")) return "Saludos, Mario. Núcleo Alpha listo. ¿Qué proceso deseas ejecutar hoy?";
    
    if (q.includes("quien eres") || q.includes("que eres")) return "Soy el núcleo de inteligencia de este sistema, optimizado para trabajar con tu hardware AMD.";

    if (q.includes("procesador") || q.includes("pc") || q.includes("hardware") || q.includes("ram")) {
        return `ESTADO DEL SISTEMA:<br>• CPU: ${SYSTEM_DATA.processor}<br>• RAM: ${SYSTEM_DATA.ram}<br>• GPU: ${SYSTEM_DATA.graphics}<br>• Rendimiento: ESTABLE.`;
    }

    if (q.includes("juego") || q.includes("gaming") || q.includes("fortnite")) {
        return "He analizado tus drivers (v27.10). Te recomiendo cerrar procesos en segundo plano para ganar FPS en Resident Evil o Fortnite.";
    }

    if (q.includes("creador") || q.includes("dueño")) return "Mi creador es Mario Tigrero. Yo soy su interfaz avanzada.";

    if (q.includes("hora") || q.includes("fecha")) return "La fecha actual es: " + new Date().toLocaleString();

    if (q.length < 3) return "Comando demasiado corto. Por favor, especifica la instrucción.";

    // Respuesta por defecto si no entiende (Estilo ChatGPT)
    return "He analizado tu consulta: '" + q + "'. Actualmente mis funciones están limitadas al control del hardware AMD A9 y visualización de archivos. ¿Deseas que optimice el sistema?";
}