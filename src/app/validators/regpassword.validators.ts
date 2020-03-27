import { AbstractControl } from '@angular/forms';
// import { RegisterForm } from '../register-form';


export function crosspassword(control:AbstractControl):{[key:string]:Boolean}|null{
    const password=control.get('password');
    const confirmpassword=control.get('confirmpaswword');
    if( password.pristine || confirmpassword.pristine){
        return null;
    }
    return password &&confirmpassword &&password.value!==confirmpassword.value?{'crossval':true}:null;
} 