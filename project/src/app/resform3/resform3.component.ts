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
    localStorage.removeItem('key');
    localStorage.removeItem('key1');
    localStorage.removeItem('key2');
    localStorage.removeItem('key3');
    localStorage.removeItem('cname');
    localStorage.removeItem('cadd');
    localStorage.removeItem('ccoun');
    localStorage.removeItem('cstat');
    localStorage.removeItem('ccity');
    localStorage.removeItem('cmob1');
    localStorage.removeItem('cmob2');
    localStorage.removeItem('comname');
    localStorage.removeItem('comemail');
    localStorage.removeItem('comadd');
    localStorage.removeItem('comcont');
    localStorage.removeItem('comstat');
    localStorage.removeItem('comcity');
    localStorage.removeItem('comdate');
    localStorage.removeItem('rname');
    localStorage.removeItem('dob');
    localStorage.removeItem('age');
    localStorage.removeItem('rmob');
    localStorage.removeItem('eid');
    localStorage.removeItem('radd');
    localStorage.removeItem('rcount');
    localStorage.removeItem('rstat');
    localStorage.removeItem('rcity');
    localStorage.removeItem('tensch');
    localStorage.removeItem('tenper');
    localStorage.removeItem('tenpass');
    localStorage.removeItem('twlsch');
    localStorage.removeItem('twlper');
    localStorage.removeItem('twlpass');
    localStorage.removeItem('gcoll');
    localStorage.removeItem('gstr');
    localStorage.removeItem('gper');
    localStorage.removeItem('gpass');
    localStorage.removeItem('pgcoll');
    localStorage.removeItem('pgstr');
    localStorage.removeItem('pgper');
    localStorage.removeItem('pgpass');
    localStorage.removeItem('comnam');
    localStorage.removeItem('jobpro');
    localStorage.removeItem('exper');
    localStorage.removeItem('sdate');
    localStorage.removeItem('edate');
    localStorage.removeItem('achiv');
    localStorage.removeItem('skil');
    localStorage.removeItem('lang');
    localStorage.removeItem('hobb');
  }

}
