import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'welcome',component:WelcomeComponent},
  { path:'forgot',component:ForgotComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
