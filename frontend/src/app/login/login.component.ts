import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submittedlogin=false;
  nameinput = '';
  passwordinput = '';

  loginForm = new FormGroup({

    username: new FormControl(this.nameinput,[
    Validators.required,
    Validators.minLength(1)
      ]),

      password: new FormControl(this.passwordinput,[
        Validators.required,
        Validators.minLength(6)
      ]),

    })
  userMsg: string='';
  constructor(private _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  get username(){ return this.loginForm.controls.username; }
  
  get password(){ return this.loginForm.controls.password; }
  

  
  onsubmitlogin(values:any)
{
this.submittedlogin=true;
this._auth.loginUser(values).subscribe((data)=>{
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
