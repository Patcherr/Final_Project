window.addEventListener('DOMContentLoaded', function () {
<<<<<<< Updated upstream
    const userData = JSON.parse(localStorage.getItem('userData'))
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if (userData) {
      console.log('User date',userData)
    }
    const login = document.getElementById('login')
    login.addEventListener('click', function () {
      if (email.value == userData.email && name.value == userData.name && password.value == userData.password) {
        window.location.href = 'interface.html';
      }
    })
  })
=======

  const name = document.getElementById('name');
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
>>>>>>> Stashed changes
