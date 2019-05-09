import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview1',
  templateUrl: './preview1.component.html',
  styleUrls: ['./preview1.component.css']
})
export class Preview1Component implements OnInit {
  param1: string;
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get("r1")
  }
}
