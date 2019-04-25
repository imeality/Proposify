import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume2',
  templateUrl: './resume2.component.html',
  styleUrls: ['./resume2.component.css']
})
export class Resume2Component implements OnInit {

    name=localStorage.getItem('rname');
    dob=localStorage.getItem('dob');
    age=localStorage.getItem('age');
    mob=localStorage.getItem('rmob');
    eid=localStorage.getItem('eid');
    add=localStorage.getItem('radd');
    count=localStorage.getItem('rcount');
    stat=localStorage.getItem('rstat');
    rcity=localStorage.getItem('rcity');
    tensch=localStorage.getItem('tensch');
    tenper=localStorage.getItem('tenper');
    tenpass=localStorage.getItem('tenpass');
    twlsch=localStorage.getItem('twlsch');
    twlper=localStorage.getItem('twlper');
    twlpass=localStorage.getItem('twlpass');
    gcoll=localStorage.getItem('gcoll');
    gstr=localStorage.getItem('gstr');
    gper=localStorage.getItem('gper');
    gpass=localStorage.getItem('gpass');
    pgcoll=localStorage.getItem('pgcoll');
    pgstr=localStorage.getItem('pgstr');
    pgper=localStorage.getItem('pgper');
    pgpass=localStorage.getItem('pgpass');
    comnam=localStorage.getItem('comnam');
    jobpro=localStorage.getItem('jobpro');
    exper=localStorage.getItem('exper');
    sdate=localStorage.getItem('sdate');
    edate=localStorage.getItem('edate');
    achiv=localStorage.getItem('achiv');
    skil=localStorage.getItem('skil');
    lang=localStorage.getItem('lang');
    hobb=localStorage.getItem('hobb');
  constructor() { }

  ngOnInit() {
  }

}
