import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenname } from '../validators/login.validators';
import { crosspassword } from '../validators/regpassword.validators';
import { phonenovalid } from '../validators/phone.validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  
  phonenumber="^\d{10}$";

  registerForm=this.fb.group({
     firstname:["",Validators.required],
     lastname:['',Validators.required],
     password:[''],
     confirmpassword:[''],
     gender:['',Validators.required],
     email:['',[Validators.required,Validators.email,forbiddenname,Validators.minLength(5)]],
     phone:['',[Validators.required,Validators.pattern(this.phonenumber),phonenovalid]],
     
    },{Validators:crosspassword})

    reload(){
      this.registerForm.patchValue({
        firstname:'pradeep',
        lastname:'Rajput',
        password:'engg',
        confirmpaswword:'engg',
        gender:true,
        email:'',
        phone:""
      })
    }

    get fname(){
      return this.registerForm.get('firstname')
    }
    get lname(){
      return this.registerForm.get('lastname')
    }
    get reqemail(){
      return this.registerForm.get('email')
    }
    get phone(){
      return this.registerForm.get('phone')
    }
    selector=true
    validation(value){
      if(value){
        return false
      }
      else{
        return true
      }
    }
}
