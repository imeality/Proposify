import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TemplateComponent } from './template/template.component';
import { Preview1Component } from './preview1/preview1.component';

const routes: Routes = [
    { path:'',redirectTo:'/home',pathMatch:'full'},
    { path:'home', component:HomeComponent},
    { path:'login',component:LoginComponent},
    { path:'signup',component:SignupComponent},
    { path:'welcome',component:WelcomeComponent},
    { path:'forgot',component:ForgotComponent},
    { path:'dashboard',component:DashboardComponent},
    { path:'profile',component:ProfileComponent},
    { path:'template',component:TemplateComponent},
    { path:'previewresume1',component:Preview1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
