import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login} from '../login'
import { LoginService } from '../login.service';
import { ViewChild, ElementRef } from '@angular/core';
import { browserRefresh } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  login:Login[];
  public browserRefresh: boolean;

  constructor(private logn:LoginService , private router:Router) { }

  
  ngOnInit() {
   this.logn.getUser().subscribe((data:Login[])=>{
    console.log(data);
    this.login=data;
    console.log(this.login);
    for( var i=0;i<this.login.length;i++){
    console.log(this.login[i].Email);
    console.log(this.login[i].Password);
    this.browserRefresh = browserRefresh;
      } 
    });
  }

  
    onClick(){
   for( var i=0;i<this.login.length;i++){
    if(this.login[i].Email == this.email.nativeElement.value && this.login[i].Password == this.password.nativeElement.value) {
      console.log(this.email.nativeElement.value);
      console.log(this.password.nativeElement.value);
      console.log('valid');
      this.router.navigate(['/home']);
      break
    }else{
      console.log('invalid email or password'); 
      this.router.navigate(['/login']);
      }
    }
  }
}
