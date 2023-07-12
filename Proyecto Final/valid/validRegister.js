window.addEventListener('DOMContentLoaded', function () {
    const name = document.getElementById('name');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const register = document.getElementById('register');

    register.addEventListener('click', function (event) {
        event.preventDefault();

        if (name.value == '') {
            alert('Porfavor ingrese un nombre valido.');
        }

        if (email.value == '') {
            alert('Porfavor ingrese un email correcto.');
        }

        if (password.value == '') {
            alert('Porfavor ingrese una contraseña correcta');
        }

        alert('Registro exitoso. ¡Ahora puedes iniciar sesión!');


    })

})