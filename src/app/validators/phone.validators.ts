import { AbstractControl } from '@angular/forms';
import { log } from 'util';


export function phonenovalid(control:AbstractControl):{[key:string]:any}|boolean{
    const pattern=/^\d{10}$/.test(control.value) ;
    // console.log(control.value)
    // console.log(pattern);
    // console.log(pattern?{'phoneval':{value:control.value}}:true);
    return  pattern?{'phoneval':{value:control.value}}:true;
    
}