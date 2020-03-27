import { AbstractControl } from '@angular/forms';


export function passwordValidators(control:AbstractControl):{[key: string]: any} | null{
    const password=control.get('password');
    const confirmpassword=control.get('confirmpassword');
    return password && confirmpassword && password.value!==confirmpassword.value?{'mismatch':true}:null;
}