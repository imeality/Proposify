import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login} from '../login'
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login[];

  constructor(private log:LoginService , private router:Router) { }

  ngOnInit() {
   this.log.getUser().subscribe((data)=>{
    console.log(data[0].Email);
      //this.login=data;
     
    });
  }
  onClick(){
    this.router.navigate(['/home']);
  }
}
