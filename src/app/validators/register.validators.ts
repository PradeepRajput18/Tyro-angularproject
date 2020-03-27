import { AbstractControl } from '@angular/forms';

export function forbiddenname(control:AbstractControl):{[key:string]:any}{
   const forbidden=/user/.test(control.value);
   return forbidden?{'forbiddenname':{value:control.value}}:null;
}