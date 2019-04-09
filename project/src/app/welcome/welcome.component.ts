import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   name;
  constructor(private router:Router) { }

  ngOnInit() {
    var nn =localStorage.getItem('key');
    this.name=nn;
  }
  onClick() {
    this.router.navigate(['/login'])
    
  }
}
