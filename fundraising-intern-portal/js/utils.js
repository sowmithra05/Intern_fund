// Auth utilities
function saveUser(user) {
    localStorage.setItem(CONFIG.STORAGE_KEYS.USER, JSON.stringify(user));
}

function getUser() {
    const user = localStorage.getItem(CONFIG.STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : null;
}

function logout() {
    localStorage.removeItem(CONFIG.STORAGE_KEYS.USER);
    window.location.href = 'auth.html';
}

function copyReferralCode() {
    const code = document.getElementById('referral-code')?.textContent;
    if (code) {
        navigator.clipboard.writeText(code);
        alert("Referral code copied!");
    }
}
