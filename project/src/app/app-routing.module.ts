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
import { Resform2Component } from './resform2/resform2.component';
import { Resform3Component } from './resform3/resform3.component';
import { Resform1Component } from './resform1/resform1.component';
import { Propform1Component } from './propform1/propform1.component';
import { Propform2Component } from './propform2/propform2.component';
import { Proposal1Component } from './proposal1/proposal1.component';
import { Proposal2Component } from './proposal2/proposal2.component';
import { Propform3Component } from './propform3/propform3.component';
import { Propform4Component } from './propform4/propform4.component';
import { Proposal3Component } from './proposal3/proposal3.component';
import { Propform5Component } from './propform5/propform5.component';
import { Propform6Component } from './propform6/propform6.component';
import { Resume1Component } from './resume1/resume1.component';


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

    { path:'resume1',component:Resume1Component},
    { path:'resumeuserdetail',component:Resform1Component},
    { path:'resumeeducationaldetail',component:Resform2Component},
    { path:'resumejobdetail',component:Resform3Component},

    { path:'proposal1',component:Proposal1Component },
    { path:'proposalclientdetail',component:Propform1Component},
    { path:'proposalcompanydetail',component:Propform2Component},

    { path:'proposal2',component:Proposal2Component },
    { path:'proposalClientdetail',component:Propform3Component},
    { path:'proposalCompanydetail',component:Propform4Component},

    { path:'proposal3',component:Proposal3Component },
    { path:'proposalClientDetail',component:Propform5Component},
    { path:'proposalCompanyDetail',component:Propform6Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
