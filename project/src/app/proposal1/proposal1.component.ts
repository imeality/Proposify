import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { PaymentService } from '../payment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proposal1',
  templateUrl: './proposal1.component.html',
  styleUrls: ['./proposal1.component.css']
})
export class Proposal1Component implements OnInit {

  @ViewChild('content') content: ElementRef;

public generatePDF() {

  this.pay.payed = false;
    this.pay.payed = false;
    this.pay.username ='';
 
    let HTML_Width = $("#canvas_div_pdf").width();
    let HTML_Height = $("#canvas_div_pdf").height();
    let top_left_margin = 15;
    let PDF_Width = HTML_Width+(top_left_margin*2);
    let PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
    let canvas_image_width = HTML_Width;
    let canvas_image_height = HTML_Height;
    
    let totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
    
    
    html2canvas($("#canvas_div_pdf")[0],{allowTaint:true}).then(function(canvas) {
    canvas.getContext('2d');
    
    console.log(canvas.height+"  "+canvas.width);
    
    
    let imgData = canvas.toDataURL("image/png", 1.0);
    let pdf = new jspdf('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'PNG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
    
    
    for (let i = 1; i <= totalPDFPages; i++) { 
    pdf.addPage(PDF_Width, PDF_Height);
    pdf.addImage(imgData, 'PNG', top_left_margin, -(PDF_Height*i)+(top_left_margin*1),canvas_image_width,canvas_image_height);
    }
    
        pdf.save("ProposalACCOUNT.pdf");
           });
            this.router.navigate(['/Send/1']);
}
  


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


  constructor(public pay:PaymentService,private router:Router) { }
  param1= 1;
  ngOnInit() {

    this.loadScript('../assets/JS/proposal3.js');

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
