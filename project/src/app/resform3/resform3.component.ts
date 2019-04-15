import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { ResumeService } from '../resume.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-resform3',
  templateUrl: './resform3.component.html',
  styleUrls: ['./resform3.component.css']
})
export class Resform3Component implements OnInit {

  email=localStorage.getItem('id');
  name =localStorage.getItem('key');
  angForm:FormGroup;
  constructor(private fb:FormBuilder, public logn:LoginService, private resum:ResumeService,private router:Router) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      Email:[''],
      Company_name:[''],
      Job_profile:[''],
      Experience:[''],
      Start_date:[''],
      End_date:[''],
      Achivement:[''],
      Skills:['',Validators.required],
      Languages:['',Validators.required],
      Hobbies:['',Validators.required]
    });
  }

  onClick(Email,Company_name,Job_profile,Experience,Start_date,End_date,Achivement,Skills,Languages,Hobbies) {
    console.log(Email,Company_name,Job_profile,Experience,Start_date,End_date,Achivement,Skills,Languages,Hobbies);
    this.resum.addUser3(Email,Company_name,Job_profile,Experience,Start_date,End_date,Achivement,Skills,Languages,Hobbies);
    this.router.navigate(['/welcome'])

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
