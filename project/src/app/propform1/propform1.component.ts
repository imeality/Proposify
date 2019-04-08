import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-propform1',
  templateUrl: './propform1.component.html',
  styleUrls: ['./propform1.component.css']
})
export class Propform1Component implements OnInit {

  angForm:FormGroup;
  name =localStorage.getItem('key');

  constructor(private fb:FormBuilder, public logn:LoginService, private prop:ProposalService,private router:Router) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      Client_name:['',Validators.required],
      Client_address:['', Validators.required],
      Client_country:['', Validators.required],
      Client_state:['', Validators.required],
      Client_city :['', Validators.required],
      Client_mob1:['', Validators.required],
      Client_mob2:['', Validators.required],
    });
  }

  onClick(Client_name,Client_address,Client_country,Client_state,Client_city ,Client_mob1,Client_mob2) {
    console.log(Client_name,Client_address,Client_country,Client_state,Client_city ,Client_mob1,Client_mob2);
    this.prop.addUser1(Client_name,Client_address,Client_country,Client_state,Client_city ,Client_mob1,Client_mob2);
    this.router.navigate(['/proposalcompanydetail'])
    localStorage.setItem('cname',Client_name);
    localStorage.setItem('cadd',Client_address);
    localStorage.setItem('ccoun',Client_country);
    localStorage.setItem('cstat',Client_state);
    localStorage.setItem('ccity',Client_city);
    localStorage.setItem('cmob1',Client_mob1);
    localStorage.setItem('cmob2',Client_mob2);
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
