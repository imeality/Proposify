import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview2',
  templateUrl: './preview2.component.html',
  styleUrls: ['./preview2.component.css']
})
export class Preview2Component implements OnInit {
  param1: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get("r2")
  }

}
