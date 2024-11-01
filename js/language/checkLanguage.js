// Set the language in localStorage
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    applyLanguage(lang);
}

// Apply the language from localStorage
function applyLanguage(lang) {
    const welcomeMessage = document.getElementById('welcome-message');
    if (lang === 'de') {
        welcomeMessage.textContent = 'Willkommen!';
    } else {
        welcomeMessage.textContent = 'Welcome!';
    }
}

// Check localStorage on page load
window.onload = function() {
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        applyLanguage(storedLang);
    }
};
