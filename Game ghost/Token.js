window.onload = function() {
    if (!currentToken) {
        alert('No tienes un token válido.');
        window.location.href = 'Login.html';
    } else {
        document.getElementById('token-display').innerText = `Tu token es: ${currentToken}`;
    }
};