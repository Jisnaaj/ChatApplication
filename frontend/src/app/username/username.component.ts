import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username="";
 User_form  = new FormGroup({
nickname : new FormControl(this.username,[Validators.required]),

})
  unameMsg: string = '';
  isExist: any= 0 ;
  constructor(private router:Router,private service:UserServiceService, private _Activatedroute:ActivatedRoute ) { }

  ngOnInit(): void {
  }
  get nickname(){return this.User_form.controls.nickname;}
  onSubmitNAME(values:any){
    this._Activatedroute.paramMap.subscribe(params => { 
      let userId = params.get('userId'); 

    this.service.nickname(values,userId).subscribe((data)=>{   // data show
       console.log(data);
       this.router.navigate(['login']);

    })
    })
  }

  checkusername(event:any){
    event = event.target as HTMLInputElement;
    const checkname = event.value;
    // console.log(checkname);
     this.service.checkname(checkname).subscribe((data)=>{ 
       console.log(typeof data); 
      
      if 
      (typeof data == 'object' && Object.keys(data).length === 0) {
        this.unameMsg = '';
        this.isExist = 0;
        console.log(this.isExist);
      }
      else{
        this.unameMsg = 'User name already exists';
        this.isExist = 1;
        console.log(this.isExist);
      }

     })
  }

  

}
