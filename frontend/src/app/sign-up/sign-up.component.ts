import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signuphide=true;
  submittedsignup=false;
  signupForm!: FormGroup;

constructor(private fb:FormBuilder,private service:UserServiceService,
private router:Router) { }

ngOnInit(): void {
  this.signupForm =this.fb.group({
      name:['',[Validators.required]],
      
      email:['',[Validators.required,Validators.pattern('^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})$')]],
      password:['',[Validators.required,Validators.minLength(5)]],
      confirmpassword:['',[Validators.required]]
      },{
        validator:()=>{
          if(this.signupForm?.controls?.['password'].value !=this.signupForm?.controls?.['confirmpassword'].value){
          this.signupForm.controls?.['confirmpassword'].setErrors({passwordMismatch:true})
           }
        }
    
      })
      
}
get signup(){
  return this.signupForm.controls
} 
 
onsubmitsignup(values:any){
  this.submittedsignup=true;
  
    var otp = Math.floor(1000 + Math.random() * 9000);
    this.service.submitsignup(values,otp).subscribe((data)=>{
      var x = JSON.parse(JSON.stringify(data));
      const userId = x._id;
      this.router.navigate(['/otp/' + userId]);
    }); 
    this.service.sendOTP(values,otp).subscribe((data2)=>{
      console.log(data2);
    })
  
}
}
  





  
    