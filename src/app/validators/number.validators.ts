import {AbstractControl,ValidatorFn} from "@angular/forms"


export function numberValidators(control:AbstractControl):{[key:string]:any}{
    let pattern=/^(?:[1-9]|0[1-9]|10)$/.test(control.value);
    // console.log(pattern);
    // console.log(control.value);
    if(control.value==""){
        pattern=true;
    }

    
    return pattern?null:{'numberenter':{value:control.value}};
}

// export function numberValidators(numberonly:RegExp){
//    (control:AbstractControl):{[key:string]:any}|boolean =>{
//          const numbers=numberonly.test(control.value);
//          return numbers?{'numberenter':false}:true;
// };
// }