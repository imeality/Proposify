import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal1',
  templateUrl: './proposal1.component.html',
  styleUrls: ['./proposal1.component.css']
})
export class Proposal1Component implements OnInit {

  cname=localStorage.getItem('cname');
  cadd =localStorage.getItem('cadd');
  ccoun =localStorage.getItem('ccoun');
  cstat =localStorage.getItem('cstat');
  ccity =localStorage.getItem('ccity');
  cmob1 =localStorage.getItem('cmob1');
  cmob2 =localStorage.getItem('cmob2');
  comname =localStorage.getItem('comname');
  comemail =localStorage.getItem('comemail');
  comadd =localStorage.getItem('comadd');
  comcont =localStorage.getItem('comcont');
  comstat =localStorage.getItem('comstat');
  comcity =localStorage.getItem('comcity');
  comdate =localStorage.getItem('comdate');


  constructor() { }

  ngOnInit() {
  }

}
