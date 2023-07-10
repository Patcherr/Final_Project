window.addEventListener('DOMContentLoaded', function () {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const register = document.getElementById('register');
  register.addEventListener('click', function (event) {
    event.preventDefault();
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value
    }
    localStorage.setItem('User Data', JSON.stringify(userData))
    window.location.href = 'index.html';
  })

})  