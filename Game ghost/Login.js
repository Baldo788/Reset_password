/*Inicio de secion*/
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert(`Bienvenido, ${user.role === 'admin' ? 'Administrador' : 'Usuario'}`);
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});