import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
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
import { ResumeService} from './resume.service';
import { Resform2Component } from './resform2/resform2.component';
import { Resform3Component } from './resform3/resform3.component';
import { Resform1Component } from './resform1/resform1.component';
import { Resume1Component } from './resume1/resume1.component';
import { Propform1Component } from './propform1/propform1.component';
import { Propform2Component } from './propform2/propform2.component';
import { ProposalService} from './proposal.service';
import { Proposal1Component } from './proposal1/proposal1.component';
import { Proposal2Component } from './proposal2/proposal2.component';
import { Propform3Component } from './propform3/propform3.component';
import { Propform4Component } from './propform4/propform4.component';
import { Proposal3Component } from './proposal3/proposal3.component';
import { Propform5Component } from './propform5/propform5.component';
import { Propform6Component } from './propform6/propform6.component';
import { Resform4Component } from './resform4/resform4.component';
import { Resform5Component } from './resform5/resform5.component';
import { Resform6Component } from './resform6/resform6.component';
import { Resume2Component } from './resume2/resume2.component';
import { PaymentComponent } from './payment/payment.component';
import { Payment4Component } from './payment4/payment4.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    ForgotComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    TemplateComponent,
    Preview1Component,
    Preview2Component,
    Preview3Component,
    Preview4Component,
    Preview5Component,
    Preview6Component,
    Preview7Component,
    Resform2Component,
    Resform3Component,
    Resform1Component,
    Resume1Component,
    Propform1Component,
    Propform2Component,
    Proposal1Component,
    Proposal2Component,
    Propform3Component,
    Propform4Component,
    Proposal3Component,
    Propform5Component,
    Propform6Component,
    Resform4Component,
    Resform5Component,
    Resform6Component,
    Resume2Component,
    PaymentComponent,
    Payment4Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,ResumeService,ProposalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
