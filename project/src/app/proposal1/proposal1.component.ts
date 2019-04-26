import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

declare var xepOnline: any;

@Component({
  selector: 'app-proposal1',
  templateUrl: './proposal1.component.html',
  styleUrls: ['./proposal1.component.css']
})
export class Proposal1Component implements OnInit {


// @ViewChild('content') content: ElementRef;

// makePdf() {
//   const filename  = 'ThisIsYourPDFFilename.pdf';

// 		html2canvas(document.querySelector('#content')).then(canvas => {
// 			let pdf = new jspdf('p', 'mm', 'a4');
// 			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
// 			pdf.save(filename);
// 		});

//return xepOnline.Formatter.Format('contentToConvert', {render: 'download'});

//   let data = document.getElementById('contentToConvert'); 
//  html2canvas(data).then(canvas => { 
//  // Few necessary setting options 
//  let imgWidth = 208; 
//  let pageHeight = 295; 
//  let imgHeight = canvas.height * imgWidth / canvas.width; 
//  let heightLeft = imgHeight; 
 
//  const contentDataURL = canvas.toDataURL('image/png') 
//  let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
//  let position = 0; 
//  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) 
//  pdf.save('MYPdf.pdf'); // Generated PDF  
//  }); 


  // let doc = new jspdf();
  
  // let specialElementsHandlers={
  //   '#editor' : function(element ,renderer){
  //     return true;
  //   }
  // };
  // let content = this.content.nativeElement;

  // doc.fromHTML(content.innerHTML, 20 ,10,{
  //   'width':100,
  //   'elementsHandlers' : specialElementsHandlers
  // });
  // doc.save('proposal.pdf');
  //}


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


  constructor() { }

  ngOnInit() {

    this.loadScript('../assets/JS/Canvas1.js');

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
