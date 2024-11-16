document.getElementById('new-password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const token = document.getElementById('token').value;
    const newPassword = document.getElementById('new-password').value;

    if (token === currentToken) {
        alert('Contraseña restablecida con éxito.');
        currentToken = null; // Invalida el token
        window.location.href = 'Login.html';
    } else {
        alert('Token inválido.');
    }
});