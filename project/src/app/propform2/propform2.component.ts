import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-propform2',
  templateUrl: './propform2.component.html',
  styleUrls: ['./propform2.component.css']
})
export class Propform2Component implements OnInit {

  angForm:FormGroup;
  name =localStorage.getItem('key');

  constructor(private fb:FormBuilder, public logn:LoginService, private prop:ProposalService,private router:Router) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      Company_name:['',Validators.required],
      Company_email:['', Validators.required],
      Company_address:['', Validators.required],
      Company_country:['', Validators.required],
      Company_state :['', Validators.required],
      Company_city:['', Validators.required],
      Date:['', Validators.required],
    });
  }

  onClick(Company_name,Company_email,Company_address,Company_country,Company_state ,Company_city,Date) {
    this.prop.addUser2(Company_name,Company_email,Company_address,Company_country,Company_state ,Company_city,Date);
    this.router.navigate(['/proposal1'])
    localStorage.setItem('comname',Company_name);
    localStorage.setItem('comemail',Company_email);
    localStorage.setItem('comadd',Company_address);
    localStorage.setItem('comcont',Company_country);
    localStorage.setItem('comstat',Company_state);
    localStorage.setItem('comcity',Company_city);
    localStorage.setItem('comdate',Date);
  }

  logout(){
    this.logn.logged = false;
    this.logn.logged = false;
    this.logn.username ='';
    localStorage.removeItem('key');
    localStorage.removeItem('id');
  }

  ngOnInit() {
  }

}
