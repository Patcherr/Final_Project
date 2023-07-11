window.addEventListener('DOMContentLoaded', function(){
    const valid = document.getElementById('valid');
    const nombre = document.getElementById('nombre');

    valid.addEventListener('click', function(event){
        event.preventDefault();

        if(nombre.value == ''){
            alert('Porfavor ingrese un nombre valido.');
        }

        alert('Registro exitoso. ¡Ahora puedes iniciar sesión!');
    })
})