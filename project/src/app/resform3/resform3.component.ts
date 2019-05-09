import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { ResumeService } from '../resume.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-resform3',
  templateUrl: './resform3.component.html',
  styleUrls: ['./resform3.component.css']
})
export class Resform3Component implements OnInit {

  email=localStorage.getItem('eid');
  name =localStorage.getItem('key');
  angForm:FormGroup;
  constructor(private route: ActivatedRoute,private fb:FormBuilder, public logn:LoginService, private resum:ResumeService,private router:Router) {
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
    this.resum.addUser3(Email,Company_name,Job_profile,Experience,Start_date,End_date,Achivement,Skills,Languages,Hobbies);
    this.router.navigate(['/resume',this.param1])
    localStorage.setItem('comnam',Company_name);
    localStorage.setItem('jobpro',Job_profile);
    localStorage.setItem('exper',Experience);
    localStorage.setItem('sdate',Start_date);
    localStorage.setItem('edate',End_date);
    localStorage.setItem('achiv',Achivement);
    localStorage.setItem('skil',Skills);
    localStorage.setItem('lang',Languages);
    localStorage.setItem('hobb',Hobbies);
  }
  param1: string;
  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get("id")
  }

  logout(){
    this.logn.logged = false;
    this.logn.logged = false;
    this.logn.username ='';
    localStorage.removeItem('key');
  }

}
