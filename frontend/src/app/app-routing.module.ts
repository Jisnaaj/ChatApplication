import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsernameComponent } from './username/username.component';


const routes: Routes = [{path:"login",component:LoginComponent},
{path:"signup/:otp",component:SignUpComponent},
{path:"otp",component:OtpComponent},
{path:'username/:userId',component:UsernameComponent},
{path:'chatboard',component:ChatboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
