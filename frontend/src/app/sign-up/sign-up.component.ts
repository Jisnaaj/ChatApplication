import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submittedsignup=false;
  signupForm!: FormGroup;
  signuphide=true;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm =this.fb.group({
        name:['',[Validators.required]],
        user:['',[Validators.required]],
        email:['',[Validators.required,Validators.pattern('^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})$')]],
        password:['',[Validators.required,Validators.minLength(5)]],
        // confirmpassword:['',[Validators.required]]
        // },{
        //   validator:()=>{
        //     if(this.signupForm?.controls?.['password'].value !=this.signupForm?.controls?.['confirmpassword'].value){
        //     this.signupForm.controls?.['confirmpassword'].setErrors({passwordMismatch:true})
        //      }
        //   }
      
        })
        
  }
  get signup(){
    return this.signupForm.controls
  } 
  
onsubmitsignup(values:any){
  this.submittedsignup=true;}  

}
