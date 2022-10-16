import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  loginForm!: FormGroup; 
  hide=true; 
  
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
    email:['',[Validators.required,Validators.pattern('^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})$')]],
    password:['',[Validators.required,Validators.minLength(5)]]
    })
    
}
get login() {
    return this.loginForm.controls
    }
    onsubmitlogin(values:any){
      this.submitted=true;
    }   
}
