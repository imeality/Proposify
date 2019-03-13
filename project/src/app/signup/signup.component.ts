import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';
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
      Fname: [''],
      Lname: [''],
      Email: [''],
      Mobile_no: [''],
      Password: ['']
    });
  }

  onClick(Fname, Lname, Email ,Mobile_no ,Password) {
    console.log(Fname, Lname, Email ,Mobile_no ,Password);
    this.signup.addUser(Fname, Lname, Email ,Mobile_no ,Password);
    //this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
