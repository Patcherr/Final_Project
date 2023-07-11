window.addEventListener('DOMContentLoaded', function () {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  
  const returnLogin = document.getElementById('return');
  const registerLogin = document.getElementById('registerLogin');

  valid.addEventListener('click', function (event) {
    event.preventDefault();

    if (nombre.value == '') {
      alert('Error en el nombre. Porfavor vuelva a ingresar');

    }
    /* if (email.value == '') {
      alert('Error en el email. Porfavor vuelva a ingresar');

    } */
    /* if (!/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email)) {
      alert('Error en el email. Porfavor vuelva a ingresar');
      event.preventDefault();
    } */
    if (password.value == '') {
      alert('Error en el password. Porfavor vuelva a ingresar');

    }
    // Mostrar un mensaje de éxito
    

    // Redireccionar a la página de inicio de sesión después del registro
    registerLogin.submit()
  })
  returnLogin.addEventListener('click', function () {

    window.location.href = 'index.html';
  })




})




