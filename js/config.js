const CORE_CONFIG = {
    version: "v10.5 PRO",
    admin: { email: "mariotigrero07@gmail.com", pass: "mariotigrero1707D", name: "Mario" },
    invitationCode: "1707D",
    discord: "https://discord.gg/xuyqs47g",
    links: [
        { name: "NUEVO PROYECTO", url: "https://google.com" },
        { name: "MI CANAL", url: "https://youtube.com" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sys-v').innerText = CORE_CONFIG.version;
    const linksDiv = document.getElementById('extra-links');
    if(linksDiv) {
        let html = `<a href="${CORE_CONFIG.discord}" target="_blank" class="link-btn" style="background:#5865F2; color:white;">SERVER DISCORD</a>`;
        html += CORE_CONFIG.links.map(l => `<a href="${l.url}" target="_blank" class="link-btn">${l.name}</a>`).join('');
        linksDiv.innerHTML = html;
    }
});