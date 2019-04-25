import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { ResumeService } from '../resume.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-resform5',
  templateUrl: './resform5.component.html',
  styleUrls: ['./resform5.component.css']
})
export class Resform5Component implements OnInit {

  angForm:FormGroup;
  name =localStorage.getItem('key');
  email=localStorage.getItem('eid');
  constructor(private fb:FormBuilder, public logn:LoginService, private resum:ResumeService,private router:Router) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      Email:[''],
      tenth_school:['', Validators.required],
      tenth_per:['', Validators.required],
      tenth_Passingyear:['', Validators.required],
      twelth_school :['', Validators.required],
      twelth_per:['', Validators.required],
      twelth_Passingyear:['', Validators.required],
      Graduation_Collage:['', Validators.required],
      Graduation_Stream:['', Validators.required],
      Graduation_per:['', Validators.required],
      Graduation_Passingyear:['', Validators.required],
      PG_collage:[' '],
      PG_Stream:[' '],
      PG_per:[' '],
      PG_Passingyear:[' '],
    });
  }

  onClick(Email,tenth_school,tenth_per,tenth_Passingyear,twelth_school,twelth_per,twelth_Passingyear,Graduation_Collage,Graduation_Stream,Graduation_per,Graduation_Passingyear,PG_collage,PG_Stream,PG_per,PG_Passingyear) {
    console.log(Email,tenth_school,tenth_per,tenth_Passingyear,twelth_school,twelth_per,twelth_Passingyear,Graduation_Collage,Graduation_Stream,Graduation_per,Graduation_Passingyear,PG_collage,PG_Stream,PG_per,PG_Passingyear);
    this.resum.addUser2(Email,tenth_school,tenth_per,tenth_Passingyear,twelth_school,twelth_per,twelth_Passingyear,Graduation_Collage,Graduation_Stream,Graduation_per,Graduation_Passingyear,PG_collage,PG_Stream,PG_per,PG_Passingyear);
    this.router.navigate(['/Resumejobdetail'])
    localStorage.setItem('tensch',tenth_school);
    localStorage.setItem('tenper',tenth_per);
    localStorage.setItem('tenpass',tenth_Passingyear);
    localStorage.setItem('twlsch',twelth_school);
    localStorage.setItem('twlper',twelth_per);
    localStorage.setItem('twlpass',twelth_Passingyear);
    localStorage.setItem('gcoll',Graduation_Collage);
    localStorage.setItem('gstr',Graduation_Stream);
    localStorage.setItem('gper',Graduation_per);
    localStorage.setItem('gpass',Graduation_Passingyear);
    localStorage.setItem('pgcoll',PG_collage);
    localStorage.setItem('pgstr',PG_Stream);
    localStorage.setItem('pgper',PG_per);
    localStorage.setItem('pgpass',PG_Passingyear);
  }

  ngOnInit() {
  }

  logout(){
    this.logn.logged = false;
    this.logn.logged = false;
    this.logn.username ='';
    localStorage.removeItem('key');
    localStorage.removeItem('id');
  }

}

