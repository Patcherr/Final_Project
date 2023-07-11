window.addEventListener('DOMContentLoaded', function(){
    const validName = document.getElementById('valid');
    const name = document.getElementById('nombre');

    valid.addEventListener('click', function(event){
        event.preventDefault();

        if(name.value == ''){
            alert('Porfavor ingrese un nombre valido.');
        }

        alert('Registro exitoso. ¡Ahora puedes iniciar sesión!');
    })
})