function validRegister(event) {
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (email == '') {
    alert('Error en el email. Porfavor vuelva a ingresar');
    event.preventDefault();
  }
  if (!/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email)) {
    alert('Error en el email. Porfavor vuelva a ingresar');
    event.preventDefault();
  }
  if (password = '') {
    alert('Error en el password. Porfavor vuelva a ingresar');
    event.preventDefault();
  }

    // Crear un objeto con los datos del usuario
    let usuario = {
      nombre: nombre,
      email: email,
      password: password
    };

    // Obtener los datos existentes (si los hay) del almacenamiento local
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Agregar el nuevo usuario al arreglo de usuarios
    usuarios.push(usuario);

    // Guardar el arreglo de usuarios actualizado en el almacenamiento local
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Mostrar un mensaje de éxito
    alert('Registro exitoso. ¡Ahora puedes iniciar sesión!');

    // Redireccionar a la página de inicio de sesión después del registro
    window.location.href = 'index.html';
}
