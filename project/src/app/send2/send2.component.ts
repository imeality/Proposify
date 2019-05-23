import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SendService } from '../send.service';

@Component({
  selector: 'app-send2',
  templateUrl: './send2.component.html',
  styleUrls: ['./send2.component.css']
})
export class Send2Component implements OnInit {

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
