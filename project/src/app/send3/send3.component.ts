import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SendService } from '../send.service';

@Component({
  selector: 'app-send3',
  templateUrl: './send3.component.html',
  styleUrls: ['./send3.component.css']
})
export class Send3Component implements OnInit {
  emal =localStorage.getItem('key2');

  constructor(private router:Router,private route: ActivatedRoute,public send: SendService) { }
  param1: string;
  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get("id")
  }
  onClick(email,subject,message,file) {
    this.send.sendMessage(email,subject,message,file);
    console.log(email,subject,message,file);
    this.router.navigate(['/Thanks']);  
  }
}
