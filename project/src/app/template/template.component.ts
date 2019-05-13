import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  name =localStorage.getItem('key');

  constructor(public logn:LoginService) { }

  ngOnInit() {
    this.loadScript('../assets/JS/Template.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
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
