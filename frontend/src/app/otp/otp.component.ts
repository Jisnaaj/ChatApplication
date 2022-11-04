import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otpInput = '';
  msg = '';
  otpForm = new FormGroup({
  otp: new FormControl(this.otpInput,[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(4)
  ])
})
  constructor(private service:UserServiceService, private router:Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  get otp(){ return this.otpForm.controls.otp; } 
  onSubmitOTP(values:any){
    this._Activatedroute.paramMap.subscribe(params => { 
      let userId = params.get('_id'); 
      this.service.getUserById(userId).subscribe((data)=>{
        var x=JSON.parse(JSON.stringify(data));
        const otp = x.otp;
        const typedOTP = values.otp;
        if(otp == typedOTP){
          this.msg = '';
          console.log(userId);
          this.service.verifyOTP(userId).subscribe((data)=>{
            this.router.navigate(['username/'+userId]);
            // Swal.fire({
            //   icon: 'success',
            //   title: 'Account created successfully. Login to continue',
            //   showConfirmButton: true
            // }) 
          })
        }
        else{
          this.msg = 'Invalid OTP. Try again';
        }
      });
    });
  } 

}