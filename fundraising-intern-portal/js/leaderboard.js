document.getElementById('logout-btn').addEventListener('click', logout);

const user = getUser();
if (user) {
    document.getElementById('dashboard-link').innerHTML = `<a href="dashboard.html">Dashboard</a>`;
    document.getElementById('auth-links').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'inline-block';
}

API.getLeaderboard().then(data => {
    const body = document.getElementById('leaderboard-body');
    body.innerHTML = '';
    data.forEach((intern, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>#${idx + 1}</td>
            <td>${intern.name}</td>
            <td>$${intern.amount}</td>
            <td>${intern.progress}</td>
            <td>${intern.badge}</td>
        `;
        body.appendChild(tr);
    });

    // Top 3 podium
    document.getElementById('first-name').textContent = data[0].name;
    document.getElementById('first-amount').textContent = `$${data[0].amount}`;
    document.getElementById('second-name').textContent = data[1].name;
    document.getElementById('second-amount').textContent = `$${data[1].amount}`;
    document.getElementById('third-name').textContent = data[2].name;
    document.getElementById('third-amount').textContent = `$${data[2].amount}`;

    if (user) {
        const userData = data.find(d => d.name.toLowerCase() === user.name.toLowerCase());
        if (userData) {
            document.getElementById('your-rank').textContent = `#${data.indexOf(userData) + 1}`;
            document.getElementById('your-amount').textContent = `$${userData.amount}`;
            document.getElementById('your-progress').textContent = userData.progress;
            document.getElementById('gap-to-next').textContent = `$${Math.max(0, data[data.indexOf(userData) - 1]?.amount - userData.amount || 0)}`;
            document.getElementById('your-position').style.display = 'block';
        }
    }
});
