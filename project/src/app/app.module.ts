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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
