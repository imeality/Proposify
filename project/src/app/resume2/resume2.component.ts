import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume2',
  templateUrl: './resume2.component.html',
  styleUrls: ['./resume2.component.css']
})
export class Resume2Component implements OnInit {

  @ViewChild('content') content: ElementRef;

public generatePDF() {
 
    let HTML_Width = $(".canvas_div_pdf").width();
    let HTML_Height = $(".canvas_div_pdf").height();
    let top_left_margin = 15;
    let PDF_Width = HTML_Width+(top_left_margin*2);
    let PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
    let canvas_image_width = HTML_Width;
    let canvas_image_height = HTML_Height;
    
    let totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
    
    
    html2canvas($(".canvas_div_pdf")[0],{allowTaint:true}).then(function(canvas) {
    canvas.getContext('2d');
    
    console.log(canvas.height+"  "+canvas.width);
    
    
    let imgData = canvas.toDataURL("image/png", 1.0);
    let pdf = new jspdf('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'PNG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
    
    
    for (let i = 1; i <= totalPDFPages; i++) { 
    pdf.addPage(PDF_Width, PDF_Height);
    pdf.addImage(imgData, 'PNG', top_left_margin, -(PDF_Height*i)+(top_left_margin*1),canvas_image_width,canvas_image_height);
    }
    
        pdf.save("Resume2.pdf");
           });
}

    name=localStorage.getItem('rname');
    dob=localStorage.getItem('dob');
    age=localStorage.getItem('age');
    mob=localStorage.getItem('rmob');
    eid=localStorage.getItem('eid');
    add=localStorage.getItem('radd');
    count=localStorage.getItem('rcount');
    stat=localStorage.getItem('rstat');
    rcity=localStorage.getItem('rcity');
    tensch=localStorage.getItem('tensch');
    tenper=localStorage.getItem('tenper');
    tenpass=localStorage.getItem('tenpass');
    twlsch=localStorage.getItem('twlsch');
    twlper=localStorage.getItem('twlper');
    twlpass=localStorage.getItem('twlpass');
    gcoll=localStorage.getItem('gcoll');
    gstr=localStorage.getItem('gstr');
    gper=localStorage.getItem('gper');
    gpass=localStorage.getItem('gpass');
    pgcoll=localStorage.getItem('pgcoll');
    pgstr=localStorage.getItem('pgstr');
    pgper=localStorage.getItem('pgper');
    pgpass=localStorage.getItem('pgpass');
    comnam=localStorage.getItem('comnam');
    jobpro=localStorage.getItem('jobpro');
    exper=localStorage.getItem('exper');
    sdate=localStorage.getItem('sdate');
    edate=localStorage.getItem('edate');
    achiv=localStorage.getItem('achiv');
    skil=localStorage.getItem('skil');
    lang=localStorage.getItem('lang');
    hobb=localStorage.getItem('hobb');
  constructor() { }

  ngOnInit() {
    this.loadScript('../assets/JS/proposal3.js');
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
