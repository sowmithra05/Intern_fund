document.getElementById('show-signup').onclick = () => {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
};

document.getElementById('show-login').onclick = () => {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
};

document.getElementById('signupForm').onsubmit = e => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    saveUser({ name, email });
    window.location.href = 'dashboard.html';
};

document.getElementById('loginForm').onsubmit = e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    saveUser({ name: "Intern", email });
    window.location.href = 'dashboard.html';
};
