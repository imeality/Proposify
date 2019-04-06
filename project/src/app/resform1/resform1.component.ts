import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { ResumeService } from '../resume.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-resform1',
  templateUrl: './resform1.component.html',
  styleUrls: ['./resform1.component.css']
})
export class Resform1Component implements OnInit {

  name =localStorage.getItem('key');
  email=localStorage.getItem('id');
  angForm:FormGroup;
  constructor(private fb:FormBuilder, public logn:LoginService,private resum:ResumeService,private router:Router) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      Name:['', Validators.required],
      DOB:['', Validators.required],
      Age:['', Validators.required],
      Mobile_no:['', Validators.required],
      Email:['', [Validators.required, Validators.email]],
      Address:['', Validators.required],
      Country:['', Validators.required],
      State:['', Validators.required],
      City:['', Validators.required],
    });
  }

  onClick(Name,DOB,Age,Mobile_no,Email,Address,Country,State,City) {
    console.log(Name,DOB,Age,Mobile_no,Email,Address,Country,State,City);
    this.resum.addUser1(Name,DOB,Age,Mobile_no,Email,Address,Country,State,City);
    this.router.navigate(['/resumeeducationaldetail']) 
    localStorage.setItem('id',Email);
  }
  
  ngOnInit() {
  }

  logout(){
    this.logn.logged = false;
    this.logn.logged = false;
    this.logn.username ='';
    localStorage.removeItem('key');
  }
}
