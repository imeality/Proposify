import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router,NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  subscription: Subscription;

  angForm:FormGroup;
  constructor(private fb:FormBuilder, private signup:LoginService,private router:Router) {
    this.createForm();
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
  });

   }

   createForm() {
    this.angForm = this.fb.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Mobile_no: ['', [Validators.required, Validators.minLength(8)]],
      Password: ['', Validators.required]
    });
  }

  onClick(Fname, Lname, Email ,Mobile_no ,Password) {
    console.log(Fname, Lname, Email ,Mobile_no ,Password);
    this.signup.addUser(Fname, Lname, Email ,Mobile_no ,Password);
    this.router.navigate(['/login'])

  }

  ngOnInit() {
  }

}
