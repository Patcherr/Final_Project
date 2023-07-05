function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const login = document.getElementById('login');

    // Obtener los usuarios registrados del almacenamiento local
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar el inicio de sesión
    var usuarioEncontrado = usuarios.find(function(usuario) {
      return usuario.email === email && usuario.password === password;
    });

    if (usuarioEncontrado) {
      // Redireccionar a la otra página con los datos del usuario
      login.submit()
    } else {
      alert('Credenciales inválidas');
    }
  }