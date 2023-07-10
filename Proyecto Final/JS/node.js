window.addEventListener('DOMContentLoaded', function () {
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