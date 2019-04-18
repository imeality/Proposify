import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-proposal2',
  templateUrl: './proposal2.component.html',
  styleUrls: ['./proposal2.component.css']
})
export class Proposal2Component implements OnInit {

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

    this.loadScript('../assets/JS/Canvas2.js');

    $("#a1").click(function(){
      $(".tr1").toggle();
    });
    $("#a2").click(function(){
      $(".tr2").toggle();
    });
    $("#a3").click(function(){
      $(".tr3").toggle();
    });
    $("#a4").click(function(){
      $(".tr4").toggle();
    });
    $("#a5").click(function(){
      $(".tr5").toggle();
    });
    $("#a6").click(function(){
      $(".tr6").toggle();
    });
    $("#a7").click(function(){
      $(".tr7").toggle();
    });
    $("#a8").click(function(){
      $(".tr8").toggle();
    });
    $("#a9").click(function(){
      $(".tr9").toggle();
    });
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
}
