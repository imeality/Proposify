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

  constructor(private logn:LoginService , private router:Router ) { }

  
  ngOnInit() {
    this.logn.getUser().subscribe((data:Login[])=>{
    this.login=data;
    for( var i=0;i<this.login.length;i++){    
      } 
    });
  }
  
    onClick(){
   for( var i=0;i<this.login.length;i++){
    if(this.login[i].Email == this.email.nativeElement.value && this.login[i].Password == this.password.nativeElement.value) {
      localStorage.setItem('key',this.login[i].Fname); 
      localStorage.setItem('key1',this.login[i].Lname);
      localStorage.setItem('key2',this.login[i].Email);
      localStorage.setItem('key3',this.login[i].Mobile_no); 
      var nn =localStorage.getItem('key');
      this.logn.logged = true;
      this.router.navigate(['/dashboard']);
      break
    }else{
      this.router.navigate(['/login']);
      document.getElementById("demo").innerHTML = "Invalid Email address or Password";
      document.getElementById("demo").style.color = "red";
      }
    }
    
  }
}
