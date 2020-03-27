import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private fb:FormBuilder) {
    this.ques.push(this.questionset[this.index])
   }
  // tests:FormArray
  testsgroup:FormGroup
  // addtests:FormGroup
  // get question(){
  //   return this.tests.get('questions') as FormArray;
  // }
  // addquestion(){
  //   this.question.push(this.fb.control(''));
  // }
  public questionset:any=[{question:"how much money",op1:"set1",op2:"set1",op3:'set1',op4:'set1'},{question:"money much have it",op1:"set2",op2:"set2",op3:'set2',op4:'set2'},{question:"i am second last at all",op1:"set3",op2:"set3",op3:'set3',op4:'set3'},{question:"i am last at all",op1:"set4",op2:"set4",op3:'set4',op4:'set4'}]
  public index=0
  public ques:any=[]
  // ques.push(this.questionset[this.index])
  // console.log(this.index,"updated");


  ngOnInit() {
      
  
    this.testsgroup=this.fb.group({
    tests:this.fb.array(
    [
      this.addtests()
    ])
    })
    
    // console.log(this.index,"updated");
  }
  fillup():void{
    console.log("value called");
    
    this.testsgroup.get('tests').patchValue({
     checkbox1:true,
     checkbox2:true,
     checkbox3:false,
     checkbox4:false,
     input:'hello'
   })
 }
 
 addquestions():any{
   (<FormArray>this.testsgroup.get("tests")).push(this.addtests());
   this.index=this.index+1
   console.log(this.index,"call");   
  this.ques=[]
  // console.log('quews',this.ques)
   this.ques.push(this.questionset[this.index])
   console.log('after',this.ques)
  //  console.log(this.index,"callupdted");   
  //  console.log(this.ques[this.index]);
   
   
 }
 inputvalue:FormControl
 addtests():FormGroup{
    return this.fb.group({
    input:['',Validators.required],
     checkbox1:[,Validators.required],
     option1:['sample'],
     checkbox2:[,Validators.required],
     option2:[''],
     checkbox3:[],
     option3:[''],
     checkbox4:[],
     option4:[''],
    //  submit:[true],
  });
}

get checkbox1(){
  return this.testsgroup.get("checkbox1");
}
get input(){
  return this.testsgroup.get("input");
}







      // {
      // checkbox1:[true],
      // option1:['sample'],
      // checkbox2:[true],
      // option2:[''],
      // checkbox3:[true],
      // option3:[''],
      // checkbox4:[true],
      // option4:[''],
      // submit:[true],
      // previous:[true],
      // next:[true],
      // questions:this.fb.array([
      //      this.addtests()
      // ])
    // }
}
// this.inputs=new FormControl(['',Validators.required]),
// this.checkbox1s=new FormControl(['',Validators.required]),
// this.checkbox2s=new FormControl(''),
// this.checkbox3s=new FormControl(''),
// this.checkbox4s=new FormControl(''),
// this.option1s=new FormControl(''),
// this.option2s=new FormControl(''),
// this.option3s=new FormControl(''),
// this.option4s=new FormControl(''),
// this.submits=new FormControl(''),


// this.addtests=this.fb.group({
//   input:this.inputs,
//    checkbox1:this.checkbox1s,
//    option1:this.option1s,
//    checkbox2:this.checkbox2s,
//    option2:this.option2s,
//    checkbox3:this.checkbox3s,
//    option3:this.option3s,
//    checkbox4:this.checkbox4s,
//    option4:this.option4s,
//    submit:this.submits,
// });

// inputs:FormControl
// checkbox1s:FormControl
// checkbox2s:FormControl
// checkbox3s:FormControl
// checkbox4s:FormControl
// option1s:FormControl
// option2s:FormControl
// option3s:FormControl
// option4s:FormControl
// submits:FormControl