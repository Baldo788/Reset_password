document.getElementById('reset-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('reset-email').value;

    const user = users.find(u => u.email === email);
    if (user) {
        currentToken = Math.random().toString(36).substr(2, 8); // Generar token aleatorio
        alert(`Tu token es: ${currentToken}`);
        window.location.href = 'reset_password.html';
    } else {
        alert('Correo no registrado.');
    }
});