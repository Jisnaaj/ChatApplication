import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( private service:AuthService, private route:Router) { }
  canActivate():boolean{
    if(this.service.loggedin()){
     return true;
    }
    else{
      this.route.navigate(['/']);
      return false;
    }
  }

}
