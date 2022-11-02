import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  loginForm!: FormGroup; 
  hide=true; 
  
  constructor(public fb:FormBuilder,private serve:UserServiceService) { }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
    email:['',[Validators.required,Validators.pattern('^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})$')]],
    password:['',[Validators.required,Validators.minLength(5)]]
    })
    
}
get login() {
    return this.loginForm.controls
    }
onsubmitLogin(values:any){
      this.submitted=true;
      console.log("success");
       this.serve.onsubmitLogin(values);
    }   
}
