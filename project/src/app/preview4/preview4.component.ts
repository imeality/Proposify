import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview4',
  templateUrl: './preview4.component.html',
  styleUrls: ['./preview4.component.css']
})
export class Preview4Component implements OnInit {
  param1: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get("r4")
    console.log(this.param1);
  }

}
