import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl, CheckboxControlValueAccessor } from '@angular/forms';
import { numberValidators } from '../validators/number.validators';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private fb:FormBuilder) {
     this.duplicateset.push(this.questionset[this.quesno]);
  // function timer(){
  //   let present=new Date();
  //   let hours=present.getHours();
  //   let minutes=present.getMinutes();
  //   let seconds=present.getSeconds();
  //   let h=checktimeformat(hours);
  //   let m=checktimeformat(minutes);
  //   let s=checktimeformat(seconds);
  //   this.time=h+":"+m+":"+s;
  // }
  // function checktimeformat(i){
  //   if(i<10){
  //     i="0"+i;
  //   }
  //   return i;
  // }
    //  setTimeout(function(){timer()}, 5);
    //  this.timer()
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
  public rightanswer:number=0;
  public totalanswer:number=1;
  questionset: any = [{
		"id": "checkbox1",
		"question": "What is the capital of Belgium?",
		"a": "Vienna",
		"b": "Berlin",
		"c": "Brussels",
		"d": "Prague",
    "answer": "c",
	},
	{
		"id": "checkbox2",
		"question": "What is the capital of Australia?",
		"a": "Vienna",
		"b": "Canberra",
		"c": "Brussels",
		"d": "Prague",
    "answer": "b",
	},
	{
		"id": "checkbox3",
		"question": "What is the capital of Bulgaria?",
		"a": "Vienna",
		"b": "Sofia",
		"c": "Brussels",
		"d": "Prague",
    "answer": "b",
  },
  {
		"id": "checkbox3",
		"question": "What is the capital of Bulgaria?",
		"a": "Vienna",
		"b": "Sofia",
		"c": "Brussels",
		"d": "Prague",
    "answer": "a",
  },
  {
		"id": "checkbox4",
		"question": "What is the capital of india?",
		"a": "Vienna",
		"b": "Sofia",
		"c": "Delhi",
		"d": "Prague",
    "answer": "a",
  },
  {
		"id": "checkbox4",
		"question": "What is the capital of sri lanka?",
		"a": "Vienna",
		"b": "Sofia",
		"c": "Delhi",
		"d": "Columbia",
    "answer": "a",
	}
  ];
  duplicateset:any=[]
  quesno:number=0;
  push(){
    this.quesno++;
     this.duplicateset.push(this.questionset[this.quesno])
     console.table([this.duplicateset])

  }
  addquestions():any{
    (<FormArray>this.testsgroup.get("tests")).push(this.addtests());
    this.i=this.i+1;
    this.q=this.q+1;
    this.totalanswer++;
    }
  public i:number=1
  public q:number=0;
  public ques:any=[]
                                                                           /**Method call on submit the test */
 public selected="null";
 public select=[];
 public finalselect=[]
 public j:number=0;
 public k:number=0;
 public all:number=0;
  selection($event:string){
    const i=this.j++;
    this.all=i;
    this.select[i]=$event
  }
  correct(){
    const i=this.k++;
    this.finalselect[i]=this.select[this.all]
    console.log(this.finalselect[i]);
    
  }
	submitTest() {
		// this.rightanswer = 0;
    // this.totalanswer = 0;
    
		for (let i = 0; i <=this.k; i++) {
			if (this.selected) {
        // this.totalanswer++;
        if(this.finalselect[i]=="")
        {
           this.totalanswer=this.totalanswer-1;
        }
        
				if (this.finalselect[i] == this.questionset[i]["answer"]) {
          this.rightanswer++;
				}
			}

		}
		// this.submitModal.show();
  }
                                                                    // timer section
  public time;
  public publictime;
  timer(){
    this.publictime=setInterval(()=>{
      let present=new Date();
      let hours=present.getHours();
      let minutes=present.getMinutes();
      let seconds=present.getSeconds();
      let h=this.checktimeformat(hours);
      let m=this.checktimeformat(minutes);
      let s=this.checktimeformat(seconds);
      this.time=h+":"+m+":"+s;
    },1000)
  }
  
   checktimeformat(i){
    if(i<10){
      i="0"+i;
    }
    return i;
  }
  get gettime(){
    // return this.testsgroup.controls.timerinput
    return this.testsgroup.get('timerinput');
  }
  public timestart:number;
  public start;
  public ending;
  public min;
  public sec=60;
  public timmerinputstopped:boolean=false;
  timervalue(e){
    if(e.target.value=="")
    {
      this.timmerinputstopped=true;
    }
    else{
        this.timmerinputstopped=false;
        this.timestart=e.target.value;
        console.log(e.target.value,"value");
    }
  }
  starttimer(){
    this.start=setInterval(()=>{
      
        if(this.sec==0){
          this.timestart=this.timestart-1;
          console.log(this.timestart,"%cvalue","color:yellow;background-color:orange");
          
         this.sec=60} 
        this.sec--;
        this.ending=this.timestart+":"+this.sec;
    },1000)
    
  }
  timmerinputstop(){
    this.timmerinputstopped=true
  }
ngOnInit() {
    this.testsgroup=this.fb.group({
    option:[],
    timerinput:['',[Validators.maxLength(1),numberValidators]],
    tests:this.fb.array(
    [
      this.addtests()
    ])
    })
    
  }
                                                              // funtion to allow how many question can attempt
  public buttonDisabled:boolean=false;
  disabled(){
     if(this.optionvalue==(this.i-1)){
      this.buttonDisabled=true;       
     }
     else{
      this.buttonDisabled=false;
     }
  }
  public optionvalue:number
  onchange(e){
    this.optionvalue=e.target.value;
  }
  get t(){return this.testsgroup.controls.tests as FormArray;}
  onreset(){
     this.testsgroup.reset();
     this.t.reset();
    //  this.t.clear();
    //  <FormArray>this.testsgroup.controls.tests.clear()
  }
  onclear(){
      this.t.reset();
  }
  public check1=false;
  public check2=false;
  public check3=false;
  public check4=false;

  check11(){
    this.check1=true;
    this.check2=this.check3=this.check4=false;
  }
  check22(){
    this.check2=true;
    this.check1=this.check3=this.check4=false;
  }
  check33(){
    this.check3=true ;
    this.check2=this.check1=this.check4=false
  }
  check44(){
    this.check4=true;
    this.check2=this.check3=this.check1=false;
  }
  checkall(){
   this.check1=this.check2=this.check3=this.check4=false;
  }
 

 inputvalue:FormControl
 addtests():FormGroup{
    return this.fb.group({
    input:['',[Validators.required,Validators.minLength(5),Validators.maxLength(7)]],
    checkbox:[],
     checkbox1:[],
     checkbox2:[],
     checkbox3:[],
     checkbox4:[],
  });
}

get checkbox1(){
  return this.testsgroup.get("checkbox1");
}
get input(){
  return this.testsgroup.get("input");
}



}

// logValidationErrors(group:FormGroup=this.testsgroup):void{
//    Object.keys(group.controls).forEach((key:string)=>{
//      const abstractcontrol=group.get(key);
//       //  console.log('came');
       
//        if(abstractcontrol instanceof FormGroup){
//          this.logValidationErrors(abstractcontrol)}
//        else{
//          this.formErrors[key]="";
//         //  console.log('futher');
         
//          if(abstractcontrol && !abstractcontrol.valid && (
//              abstractcontrol.touched || abstractcontrol.dirty))
//              {
//                   const messages=this.validationMessages[key];
//                   //  console.log('more');
//                   console.log(abstractcontrol,"abstract");
//                   console.log(abstractcontrol.errors,"errors");
           
//                     for(const errorkey in abstractcontrol.errors)
//                     {
//                       console.log('into the for');
            
//                       if(errorkey){
//                         this.formErrors[key]+=messages[errorkey] +'';
//                         console.log('true came here');
//                         }
//                     }
//               }
//           }
//       }
//     )
//     }












// fillup code
// fillup():void{
//   this.testsgroup.patchValue({
//    checkbox1:true,
//    checkbox2:true,
//    checkbox3:false,
//    checkbox4:false,
//    input:'hello'
//   // tests:['hello',true,true,true,false]
//  })
// }


// validation message koodvenkat
// validationMessages={
//   'input':{
//     'required':'input should be filled up',
//     'minlength':'min lenght of 5',
//     'maxlength':'max of 7'
//   },
//   'checkbox1':{
//     'required':'it should be marked'
//   },
//   'checkbox2':{
//     'required':'it should be also marked up'
//   },
//   // 'checkbox3':{},
//   // 'checkbox4':{},
// }

// formErrors={
//   'input':'',
//   'checkbox1':'',
//   'checkbox2':'',
//   // 'checkbox3':'',
//   // 'checkbox4':'',
// }

// logValidationErrors(group: FormGroup = this.testsgroup): void {
//   Object.keys(group.controls).forEach((key: string) => {
//     const abstractControl = group.get(key);
//     if (abstractControl instanceof FormGroup) {
//       this.logValidationErrors(abstractControl);
//     } else {
//       this.formErrors[key] = '';
//       if (abstractControl && !abstractControl.valid
//           && (abstractControl.touched || abstractControl.dirty)) {
//                   // console.log(abstractControl.errors,"errors");

//         const messages = this.validationMessages[key];
//         for (const errorKey in abstractControl.errors) {
//           if (errorKey) {
//             this.formErrors[key] += messages[errorKey] + ' ';
//           }
//         }
//       }
//     }
//   });

//   this below should be in ng on init live cycle hook
//   this.testsgroup.valueChanges.subscribe((data)=>{

//     this.logValidationErrors(this.testsgroup)
//   })






// this is another logic for Checkboxs 
// pca1:any=[,,,,false,false]
// pca2:any=[false,false,false,false,false,false]
// pca3:any=[false,false,false,false,false,false]
// pca4:any=[false,false,false,false,false,false]

// pc1(){
//   console.log(this.pca1[this.i]);
  
//   this.pca1[this.i]=true;
//   this.pca2[this.i]=this.pca3[this.i]=this.pca4[this.i]=false;
// }
// pc2(){
//   this.pca2[this.i]=true;
//   this.pca1[this.i]=this.pca3[this.i]=this.pca4[this.i]=false;
// }
// pc3(){
//   this.pca3[this.i]=true;
//   this.pca2[this.i]=this.pca1[this.i]=this.pca4[this.i]=false;
// }
// pc4(){
//   this.pca4[this.i]=true;
//   this.pca2[this.i]=this.pca3[this.i]=this.pca1[this.i]=false;
// }