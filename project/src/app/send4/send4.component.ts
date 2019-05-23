import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SendService } from '../send.service';

@Component({
  selector: 'app-send4',
  templateUrl: './send4.component.html',
  styleUrls: ['./send4.component.css']
})
export class Send4Component implements OnInit {
  emal =localStorage.getItem('key2');

  constructor(private router:Router,private route: ActivatedRoute,public send: SendService) { }
  param1: string;
  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get("id")
  }
  onClick(from,email,subject,message,file) {
    this.send.sendMessage(from,email,subject,message,file);
    console.log(from,email,subject,message,file);
    this.router.navigate(['/Thanks']);  
  }

}
