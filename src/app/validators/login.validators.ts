import { AbstractControl } from '@angular/forms';


export function forbiddenname(control:AbstractControl):{[key:string]:any}{
     const forbidden= /admin/.test(control.value)
     console.log(forbidden,"forbidden value");
     
     return forbidden?{'forbiddenName':{value:control.value}}:null;
}