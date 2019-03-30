import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //isShow=false;
  fname =localStorage.getItem('key');
  lname =localStorage.getItem('key1');
  emal =localStorage.getItem('key2');
  mob =localStorage.getItem('key3');
  angForm:FormGroup;
  Login: any = {};

  constructor(private route: ActivatedRoute,public logn:LoginService,private fb:FormBuilder,private router:Router) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Mobile_no: ['', Validators.required],
      Password: ['', Validators.required],
      conPassword: ['', Validators.required],
    });
  }

  onClick(Fname, Lname, Email ,Mobile_no ,Password) {
    console.log(Fname, Lname, Email ,Mobile_no ,Password);
    this.logn.updateUser(Fname, Lname, Email ,Mobile_no ,Password);
    this.logn.logged = true;
    localStorage.setItem('key',Fname);
    this.router.navigate(['/dashboard'])

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.logn.editUser().subscribe(res => {
        this.Login = res;
      });
    });
  }

  logout(){
    this.logn.logged = false;
    this.logn.logged = false;
    this.logn.username ='';
    localStorage.removeItem('key');
    localStorage.removeItem('key1');
    localStorage.removeItem('key2');
    localStorage.removeItem('key3');
  }

}
