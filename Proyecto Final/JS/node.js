window.addEventListener('DOMContentLoaded', function () {

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const loginButton = document.getElementById('loginButton')
  const loginForm = document.getElementById('loginForm');

  const userData = JSON.parse(localStorage.getItem('User Data'));
  if (userData) {
    console.log('User Data:', userData);
  }

  loginButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (email.value == userData.email && password.value == userData.password) {
      loginForm.submit();
    }
  })

})
