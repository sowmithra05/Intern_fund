const user = getUser();
if (!user) window.location.href = 'auth.html';

document.getElementById('logout-btn').addEventListener('click', logout);

API.getInternData(user.email).then(data => {
    document.getElementById('intern-name').textContent = data.name;
    document.getElementById('profile-initial').textContent = data.name[0];
    document.getElementById('total-raised').textContent = `$${data.totalRaised}`;
    document.getElementById('goal-progress').textContent = `${Math.round((data.totalRaised / data.goal) * 100)}%`;
    document.getElementById('rank-position').textContent = `#${data.rank}`;
    document.getElementById('rewards-earned').textContent = data.rewards;
    document.getElementById('current-amount').textContent = data.totalRaised;
    document.getElementById('progress-fill').style.width = `${(data.totalRaised / data.goal) * 100}%`;
    document.getElementById('referral-code').textContent = `${data.name.toLowerCase()}2025`;
});
