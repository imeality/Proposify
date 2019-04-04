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
import { Preview2Component } from './preview2/preview2.component';
import { Preview3Component } from './preview3/preview3.component';
import { Preview4Component } from './preview4/preview4.component';
import { Preview5Component } from './preview5/preview5.component';
import { Preview6Component } from './preview6/preview6.component';
import { Preview7Component } from './preview7/preview7.component';
import { ResformComponent } from './resform/resform.component';

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
    { path:'previewresume2',component:Preview2Component},
    { path:'previewresume3',component:Preview3Component},
    { path:'previewresume4',component:Preview4Component},
    { path:'previewresume5',component:Preview5Component},
    { path:'previewresume6',component:Preview6Component},
    { path:'previewresume7',component:Preview7Component},
    { path:'resumeform',component:ResformComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
