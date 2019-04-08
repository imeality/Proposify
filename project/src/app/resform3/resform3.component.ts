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
      Company_name:[''],
      Job_profile:[''],
      Experience:[''],
      Start_date:[''],
      End_date:[''],
      Achivement:[''],
      Skills:[''],
      Languages:[''],
      Hobbies:['']
    });
  }

  onClick(Company_name,Job_profile,Experience,Start_date,End_date,Achivement,Skills,Languages,Hobbies) {
    console.log(Company_name,Job_profile,Experience,Start_date,End_date,Achivement,Skills,Languages,Hobbies);
    this.resum.addUser3(Company_name,Job_profile,Experience,Start_date,End_date,Achivement,Skills,Languages,Hobbies);
    this.router.navigate(['/welcome'])

  }

  ngOnInit() {
    $('.multi-field-wrapper').each(function() {
      var $wrapper = $('.multi-fields', this);
      $(".add-field", $(this)).click(function(e) {
          $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
      });
      $('.multi-field .remove-field', $wrapper).click(function() {
          if ($('.multi-field', $wrapper).length > 1)
              $(this).parent('.multi-field').remove();
      });
  });
  }

  logout(){
    this.logn.logged = false;
    this.logn.logged = false;
    this.logn.username ='';
    localStorage.removeItem('key');
  }

}
