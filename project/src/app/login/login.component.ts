import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login} from '../login'
import { LoginService } from '../login.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  login:Login[];

  constructor(private logn:LoginService , private router:Router) { }

  ngOnInit() {
   this.logn.getUser().subscribe((data:Login[])=>{
    console.log(data);
    this.login=data;
    console.log(this.login);
    console.log(this.login["0"].Email);
    console.log(this.login["0"].Password);
     
    });
  }
  onClick(){
    if(this.login["0"].Email == this.email.nativeElement.value && this.login["0"].Password == this.password.nativeElement.value) {
      console.log(this.email.nativeElement.value);
      console.log(this.password.nativeElement.value);
      console.log('valid email or password');
      this.router.navigate(['/home']);
    }else{
      console.log('invalid email or password');
      this.router.navigate(['/login']);
    }
  }
}
