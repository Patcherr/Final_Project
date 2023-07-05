window.addEventListener('DOMContentLoaded', function () {

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const valid = document.getElementById('valid');

  valid.addEventListener('click', function (event) {
    event.preventDefault();

    if (nombre == '') {
      alert('Error en el nombre. Porfavor vuelva a ingresar');
      
    }
    if (email == '') {
      alert('Error en el email. Porfavor vuelva a ingresar');
      
    }
    /* if (!/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email)) {
      alert('Error en el email. Porfavor vuelva a ingresar');
      event.preventDefault();
    } */
    if (password == '') {
      alert('Error en el password. Porfavor vuelva a ingresar');
      
    }
    /* // Mostrar un mensaje de éxito
    alert('Registro exitoso. ¡Ahora puedes iniciar sesión!'); */

    // Redireccionar a la página de inicio de sesión después del registro
    /*   */
  })


})




