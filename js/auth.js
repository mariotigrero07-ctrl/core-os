// --- SISTEMA DE AUTENTICACIÓN ALPHA_CORE ---

function toggleAuth(view) {
    const login = document.getElementById('login-view');
    const reg = document.getElementById('reg-view');
    
    // Cambia entre Login y Registro manteniendo el centrado
    if (view === 'reg') {
        login.style.display = 'none';
        reg.style.display = 'block';
    } else {
        login.style.display = 'block';
        reg.style.display = 'none';
    }
}

function handleLogin() {
    const email = document.getElementById('logEmail').value.trim();
    const pass = document.getElementById('logPass').value.trim();

    // 1. Verificación del Administrador (Tus datos en config.js)
    if (email === CORE_CONFIG.admin.email && pass === CORE_CONFIG.admin.pass) {
        return launchSystem(CORE_CONFIG.admin.name);
    }

    // 2. Verificación de usuarios registrados en el navegador
    const savedUsers = JSON.parse(localStorage.getItem('alpha_users') || '[]');
    const userFound = savedUsers.find(u => u.email === email && u.pass === pass);
    
    if (userFound) {
        launchSystem(userFound.name);
    } else {
        alert("ACCESO DENEGADO: Credenciales incorrectas.");
    }
}

function handleRegister() {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass = document.getElementById('regPass').value.trim();
    const code = document.getElementById('regCode').value.trim();

    // Validaciones de seguridad
    if (code !== CORE_CONFIG.invitationCode) {
        return alert("ERROR: Código de acceso inválido.");
    }
    if (!name || !email || !pass) {
        return alert("ERROR: Todos los campos son obligatorios.");
    }

    // Guardar nuevo usuario en la memoria del navegador (Local Storage)
    let savedUsers = JSON.parse(localStorage.getItem('alpha_users') || '[]');
    
    // Evitar correos duplicados
    if (savedUsers.some(u => u.email === email)) {
        return alert("Este correo ya está registrado.");
    }

    savedUsers.push({ name, email, pass });
    localStorage.setItem('alpha_users', JSON.stringify(savedUsers));
    
    alert("REGISTRO EXITOSO: Ya puedes iniciar sesión.");
    toggleAuth('log');
}

function launchSystem(userName) {
    // Oculta el login y muestra la app con efecto suave
    document.getElementById('auth-container').style.display = 'none';
    const app = document.getElementById('main-app');
    app.style.display = 'flex';
    
    // Mensaje de bienvenida de la IA
    setTimeout(() => {
        const chatWin = document.getElementById('chat-window');
        if(chatWin) {
            chatWin.innerHTML += `
                <div class="msg bot">
                    <b style="color:var(--accent-blue)">[SISTEMA OPERATIVO]:</b><br>
                    Bienvenido, Operador ${userName.toUpperCase()}. <br>
                    Núcleo AMD A9-9420 detectado y optimizado. 
                </div>`;
        }
    }, 500);
}