const users = [
    { username: 'admin', password: 'City8map', access: ['*'] },
    { username: '2771', password: '2771', access: ['*'] }
];

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    const messageDiv = document.getElementById('message');
    if (user) {
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';

        // Redirect based on the username
        if (username === 'admin') {
            window.location.href = 'pages/admin/index.html'; // Admin page
        } else if (username === '2771') {
            window.location.href = 'pages/index.html'; // 2771 user page
        }
    } else {
        messageDiv.textContent = 'Invalid username or password!';
        messageDiv.style.color = 'red';
    }
});
