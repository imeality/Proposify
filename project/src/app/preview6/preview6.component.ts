import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview6',
  templateUrl: './preview6.component.html',
  styleUrls: ['./preview6.component.css']
})
export class Preview6Component implements OnInit {
  param1: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.param1 = this.route.snapshot.paramMap.get("p2")

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
