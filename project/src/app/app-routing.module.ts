import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [
  { path:'home',component:AppComponent},
  { path:'',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'welcome',component:WelcomeComponent},
  { path:'forgot',component:ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
