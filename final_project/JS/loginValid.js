export class Valid{
    validEmail(email){
        if(email.value == ''){
            alert('Porfavor ingrese un email.')
            return false;
        }
        return true;
    }
    
    validPassword(password){
        if(password.value == ''){
            alert('Porfavor ingrese una contraseña.')
            return false;
        }
        return true;
    }
}