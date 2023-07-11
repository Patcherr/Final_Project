window.addEventListener('DOMContentLoaded', function(){
    const email = document.getElementById('email');
    const validEmail = document.getElementById('validEmail');

    validEmail.addEventListener('click', function(event){
        event.preventDefault();
        if(email.value == ''){
            alert('Porfavor ingrese un email correcto.');
        }
        alert('Registro exitoso. ¡Ahora puedes iniciar sesión!');
    })
})