import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview3',
  templateUrl: './preview3.component.html',
  styleUrls: ['./preview3.component.css']
})
export class Preview3Component implements OnInit {
  param1: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get("r3")
  }

}
