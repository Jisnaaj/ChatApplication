import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {

  otpinput = '';
 
  OTP_form = new FormGroup({
  typedotp: new FormControl(this.otpinput,[
    Validators.required,
    
      ]),
})

  constructor(private router:Router, private _Activatedroute:ActivatedRoute ,private service:AuthService) { }

  ngOnInit(): void {
  }

  msg = "";
     get typedotp(){return this.OTP_form.controls.typedotp;}
    onSubmitOTP(values:any){
      // console.log("onotp");
    this._Activatedroute.paramMap.subscribe(params => { 
      let userId = params.get('userId'); 
      console.log(userId);
      this.service.getUserById(userId).subscribe((data)=>{
        var x=JSON.parse(JSON.stringify(data));
        // console.log(x);
        const otp = x.otp;
        const typedotp = values.typedotp;
        console.log("otp="+otp);
        console.log("typedotp="+typedotp);
        if(otp == typedotp){
          this.msg = '';
          console.log(userId);
    
            this.router.navigate(['/username/'+userId]);
          
        }
        else{
          this.msg = 'Invalid OTP. Try again';
        }
      });
    });
  }
 
  onCancel(){
    this.router.navigate(['/']);
  }

}
