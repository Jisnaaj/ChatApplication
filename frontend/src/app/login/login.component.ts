import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  loginForm!: FormGroup; 
  hide=true; 
  userMsg:any;
  
  constructor(public fb:FormBuilder,private serve:UserServiceService,private router:Router) { }

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
  this.serve.onsubmitLogin(values).subscribe((data)=>{
    var x=JSON.parse(JSON.stringify(data));
            if(x.user == true)
            {
              // this._auth.userActive('1',x.username).subscribe((data)=>{
                // console.log(data);
              // })
              localStorage.setItem('username',x.username);
              this.router.navigate(['chatboard']);
            }
            else{
              this.userMsg = "Invalid login or password. Please try again.";
            }
  })
  
  
  
  }   
}
