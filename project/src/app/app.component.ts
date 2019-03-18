import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'project';
  name =localStorage.getItem('key');
  
  constructor(public logn:LoginService){}
  
  logout(){
    this.logn.logged = false;
    this.logn.logged = false;
    this.logn.username ='';
    localStorage.removeItem('key');
  }

}

 
  