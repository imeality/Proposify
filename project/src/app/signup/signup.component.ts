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
  constructor(private fb:FormBuilder, private logn:LoginService,private router:Router) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      Fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      Lname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      Email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')]],
      Mobile_no: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onClick(Fname, Lname, Email ,Mobile_no ,Password) {
    this.logn.addUser(Fname, Lname, Email ,Mobile_no ,Password);
    this.logn.logged = true;
    localStorage.setItem('key',Fname);
    this.router.navigate(['/welcome'])

  }

  ngOnInit() {
    var nn =localStorage.getItem('key');    
  }

}
