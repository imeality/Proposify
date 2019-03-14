import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  angForm:FormGroup;
  constructor(private fb:FormBuilder, private signup:LoginService,private router:Router) {
    this.createForm();
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
    this.router.navigate(['/login']);

  }

  ngOnInit() {
  }

}
