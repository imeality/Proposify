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
import { Proposal3Component } from './proposal3/proposal3.component';
import { Resume1Component } from './resume1/resume1.component';
import { Resume2Component } from './resume2/resume2.component';
import { PaymentComponent } from './payment/payment.component';
import { Resume3Component } from './resume3/resume3.component';
import { Resume4Component } from './resume4/resume4.component';
import { Payment2Component } from './payment2/payment2.component';
import { ThanksComponent } from './thanks/thanks.component';


const routes: Routes = [
    { path:'',redirectTo:'/home',pathMatch:'full'},
    { path:'home', component:HomeComponent},
    { path:'login',component:LoginComponent},
    { path:'signup',component:SignupComponent},
    { path:'welcome',component:WelcomeComponent},
    { path:'forgot',component:ForgotComponent},
    { path:'payment/:id',component:PaymentComponent},
    { path:'Payment/:id',component:Payment2Component},
    { path:'Thanks',component:ThanksComponent},

    { path:'dashboard',component:DashboardComponent},
    { path:'profile',component:ProfileComponent},
    { path:'template',component:TemplateComponent},

    { path:'previewresume/:r1',component:Preview1Component},
    { path:'Previewresume/:r2',component:Preview2Component},
    { path:'previewResume/:r3',component:Preview3Component},
    { path:'PreviewResume/:r4',component:Preview4Component},

    { path:'previewproposal/:p1',component:Preview5Component},
    { path:'Previewproposal/:p2',component:Preview6Component},
    { path:'previewProposal/:p3',component:Preview7Component},

    { path:'resume/1',component:Resume1Component},
    { path:'resume/2',component:Resume2Component},
    { path:'resume/3',component:Resume3Component},
    { path:'resume/4',component:Resume4Component},
    { path:'resumeuserdetail/:id',component:Resform1Component},
    { path:'resumeeducationaldetail/:id',component:Resform2Component},
    { path:'resumejobdetail/:id',component:Resform3Component},

    { path:'proposal/1',component:Proposal1Component },
    { path:'proposal/2',component:Proposal2Component },
    { path:'proposal/3',component:Proposal3Component },
    { path:'proposalclientdetail/:id',component:Propform1Component},
    { path:'proposalcompanydetail/:id',component:Propform2Component},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
