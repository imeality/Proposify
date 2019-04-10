import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-preview5',
  templateUrl: './preview5.component.html',
  styleUrls: ['./preview5.component.css']
})
export class Preview5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    
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
}
