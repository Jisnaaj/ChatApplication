import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OTPComponent } from './otp/otp.component';
import { UsernameComponent } from './username/username.component';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:SignupComponent},
  {path:'otp/:userId',component:OTPComponent},
  {path:'username/:userId',component:UsernameComponent},
  {path:'chatboard',canActivate:[AuthGuardService],component:ChatboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
