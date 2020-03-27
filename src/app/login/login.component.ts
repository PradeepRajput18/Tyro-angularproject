import { Component, OnInit } from '@angular/core';
// import { Userlogin } from '../userlogin';
// import {FormGroup, FormControl} from '@angular/forms'
import { from } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { forbiddenname } from '../validators/login.validators';
import { passwordValidators } from '../validators/password.validators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
   
  login:FormGroup
  ngOnInit() {
    this.login=this.fb.group({
      email:['',[Validators.required,Validators.minLength(5),forbiddenname,Validators.email,passwordValidators]],
      password:[''],
      checkbox:[]
  });

  this.login.get('checkbox').valueChanges.
     subscribe(checkbox=>{
      //  console.log(checkbox,"checkbox");
       const password=this.login.get("password")
      //  console.log(password,"password");
       
       if(checkbox){
         password.setValidators(Validators.required)
         console.log(password.setValidators(Validators.required),"set validators");
       }
       else{
         password.clearValidators()
         console.log(password.clearValidators(),"clear validators");
         
       }
       password.updateValueAndValidity();
       console.log(password.updateValueAndValidity(),"update validators");
       
     })
  }

  // public userloginModel=new Userlogin("pradeep rajput",'neekuenduku',true)
  // login= new FormGroup({
  //    email: new FormControl(''),
  //    password:new FormControl(''),
  //    checkbox:new FormControl()
  // })
  
  // login=this.fb.group({
  //     email:['',[Validators.required,Validators.minLength(5),forbiddenname,Validators.email,passwordValidators]],
  //     password:[''],
  //     checkbox:[]
  // })
// setvalue<=patchvalue
  load(){
    this.login.patchValue({
      email:"Pradeeprajput@gmail.comp",
      password:"1234567890",
      checkbox:true
    })
  }

  get email(){
    return this.login.get('email')
  }

  get password(){
    return this.login.get('password')
  }
}
