export class Valid {
    validName(nameRegister) {
        if (nameRegister.value == '') {
            alert('Porfavor ingrese algun caracter.')
            return false;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(nameRegister)) {
            alert('Porfavor ingrese solo letras.')
            return false;
        }
        return true;
    }

    validEmail(emailRegister) {
        if (emailRegister.value == '') {
            alert('Porfavor ingrese algun caracter.')
            return false;
        } else if (!/^[a-z0-9@.]+$/.test(emailRegister)) {
            alert('Porfavor ingrese solamente letras minisculas y numeros.')
            return false;
        } else if (emailRegister) {
            const dominios = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@outlook.com']
            let valido = false
            dominios.forEach(function (dominio) {
                if (emailRegister.value.endsWith(dominio)) {
                    valido = true;
                } else {
                    alert('Porfavor ingrese un email valido.');
                }
            })
        }
        return true;
    }

    validPassword(passwordRegister){
        if(passwordRegister.value == ''){
            alert('Porfavor ingrese una contraseña.')
            return false;
        }else if(passwordRegister.value.length < 6 || passwordRegister.value.length > 12 ){
            alert('Porfavor ingrese una contraseña que sea entre 6 y 12 caracteres.')
            return false;
        }
        return true;
    }

    
}