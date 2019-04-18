var canvas = this.__canvas = new fabric.Canvas('c');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background01.jpg', function(img) {
  img.left=5;
  img.scaleX=1.3;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas.requestRenderAll();sss
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas.add(img);
});


var canvas1 = this.__canvas = new fabric.Canvas('c1');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background02.jpg', function(img) {

  img.left=5;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas1.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas1.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas1.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas1.requestRenderAll();
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas1.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas1.add(img);
});

var canvas2 = this.__canvas = new fabric.Canvas('c2');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background03.jpg', function(img) {
  img.left=5;
  img.top=35;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas2.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas2.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas2.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas2.requestRenderAll();
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas2.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas2.add(img);
});

var canvas3 = this.__canvas = new fabric.Canvas('c3');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background04.jpg', function(img) {
  img.left=5;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas3.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas3.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas3.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas3.requestRenderAll();
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas3.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas3.add(img);
});

var canvas4 = this.__canvas = new fabric.Canvas('c4');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background05.jpg', function(img) {
  img.left=5;
  img.scaleX=1.3;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas4.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas4.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas4.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas4.requestRenderAll();
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas4.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas4.add(img);
});

var canvas5 = this.__canvas = new fabric.Canvas('c5');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background06.jpg', function(img) {
  img.left=5;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas5.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas5.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas5.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas5.requestRenderAll();
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas5.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas5.add(img);
});

var canvas6 = this.__canvas = new fabric.Canvas('c6');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background07.jpg', function(img) {
  img.left=5;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas6.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas6.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas6.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas6.requestRenderAll();
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas6.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas6.add(img);
});

var canvas7 = this.__canvas = new fabric.Canvas('c7');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background08.jpg', function(img) {
  img.left=-17;
  img.top=17;
  img.scaleX=1.3;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas7.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas7.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas7.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas7.requestRenderAll();
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas7.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas7.add(img);
});

var canvas8 = this.__canvas = new fabric.Canvas('c8');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background09.jpg', function(img) {
  img.left=-17;
  img.top=17;
  img.scaleX=1.3;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas8.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas8.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas8.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas8.requestRenderAll();
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas8.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas8.add(img);
});

var canvas9 = this.__canvas = new fabric.Canvas('c9');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background10.jpg', function(img) {
  img.left=5;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas9.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas9.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas9.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas9.requestRenderAll();
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas9.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas9.add(img);
});

var canvas10 = this.__canvas = new fabric.Canvas('c10');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAccounnting/background11.jpg', function(img) {
  img.left=5;
  var angleControl = $('angle-control');
  angleControl.oninput = function() {
    img.set('angle', parseInt(this.value, 10)).setCoords();
    canvas10.requestRenderAll();
  };

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    img.scale(parseFloat(this.value)).setCoords();
    canvas10.requestRenderAll();
  };

  var topControl = $('top-control');
  topControl.oninput = function() {
    img.set('top', parseInt(this.value, 10)).setCoords();
    canvas10.requestRenderAll();
  };

  var leftControl = $('left-control');
  leftControl.oninput = function() {
    img.set('left', parseInt(this.value, 10)).setCoords();
    canvas10.requestRenderAll();
  };

function updateControls() {
    scaleControl.value = img.scaleX;
    angleControl.value = img.angle;
    leftControl.value = img.left;
    topControl.value = img.top;
  }
  canvas10.on({
    'object:moving': updateControls,
    'object:rotating': updateControls,
    'object:scaling': updateControls,
    'object:resizing': updateControls,
  });
  canvas10.add(img);
});

var canvases = this.__canvases = [
  new fabric.Canvas('p1'), new fabric.Canvas('p2'), new fabric.Canvas('p3'), new fabric.Canvas('p4'), new fabric.Canvas('p5'), 
  new fabric.Canvas('p6'), new fabric.Canvas('p7'), new fabric.Canvas('p8'), new fabric.Canvas('p9'), new fabric.Canvas('p10'),
  new fabric.Canvas('p11'), new fabric.Canvas('p12'), new fabric.Canvas('p13'), new fabric.Canvas('p14'), new fabric.Canvas('p15'),
  new fabric.Canvas('p16'), new fabric.Canvas('p17'), new fabric.Canvas('p18'), new fabric.Canvas('p19'), new fabric.Canvas('p20'),
  new fabric.Canvas('p21'), new fabric.Canvas('p22'), new fabric.Canvas('p23'), new fabric.Canvas('p24'), new fabric.Canvas('p25'),
  new fabric.Canvas('p26'), new fabric.Canvas('p27'), new fabric.Canvas('p28'), new fabric.Canvas('p29'), new fabric.Canvas('p30'),
  new fabric.Canvas('p31'), new fabric.Canvas('p32'), new fabric.Canvas('p33'), new fabric.Canvas('p34'),
];

var iText1 = new fabric.IText('ACCOUNTING \n\ PROPOSAL', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 64,
    fill:'white',
  });
  canvases[0].add(iText1);

  var iText2 = new fabric.IText('COVER LETTER', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 54,
    fill:'white',
  });
  canvases[1].add(iText2);

  var iText3 = new fabric.IText('Is pleased to present this proposal to provide \n\ professional accounting, consulting and financial\n\ managements services to you. Our experience in providing\n\ (INSERT INDUSTRY, ie. medical, small-business, etc)\n\ accounting services in over the last # years, provides us with\n\ a solid understanding of your business environment and\n\ needs.\n\ \n\  We have over # of clients that work in the INDUSTRY. This\n\ represents #% of the business completed by infosys. We are\n\active members in the INDUSTRY community and believe that\n\ we can provide you with outstanding expert service that is\n\ unmatched by other accounting companies.\n\ We have developed this package that follows with you in mind,\n\providing information that is most relevant to your current\n\ business needs.\n\ \n\ If you are interested in any additional information, do not\n\ hesitate to contact us. We look forward to serving you.\n\ \n\ \n\  Sincerely,', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[2].add(iText3);

  var iText4 = new fabric.IText('ABOUT US', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 54,
    fill:'white',
  });
  canvases[3].add(iText4);

  var iText5 = new fabric.IText('\n\ With more than x years of service, we are focused on \n\providing our clients advice on taxation, accounting and\n\ consulting services that reflect their needs. Our company has been\n\ located in the area, providing our accounting, tax and\n\ consulting services focussed on [industry 1], [industry 2], and\n\ [industry 3].\n\ \n\ Our team has X people dedicated to our PROPOSED CLIENT INDUSTRY, with an additional\n\ # people supporting them in the practice. Our team of consultants provides strategic\n\ support for your planning, marketing assessment, facility planning, capital planning,\n\ operational needs and leadership needs.\n\ \n\ We pride ourselves on being experts in the INSERT INDUSTRY, offering insight that stems\n\  beyond accounting and can help guide strategy and operations in your company - helping\n\ you to manage revenues, build market share and comply with continually changing\n\ regulations.\n\ \n\ If you are interested in any additional information, do not\n\ hesitate to contact us. We look forward to serving you.\n\ \n\ ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[4].add(iText5);

  var iText6 = new fabric.IText('Client Experience', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 23,
    fill:'orange',
  });
  canvases[5].add(iText6);

  var iText7 = new fabric.IText('Some of our related client experience includes:\n\ \n\ Coldwell Partners \n\ MacKenzie Cross \n\ JG Graphic Design \n\ Proposify', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 15,
    fill:'white',
  });
  canvases[6].add(iText7);

  var iText8 = new fabric.IText('MEET OUR TEAM', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 54,
    fill:'white',
  });
  canvases[7].add(iText8);

  var iText9 = new fabric.IText('James McIntyre', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 25,
    fill:'orange',
  });
  canvases[8].add(iText9);

  var iText10 = new fabric.IText('CPA, Team Lead \n\ \n\ James has over 20 years experience with INDUSTRY \n\ finance and operations, working with INDUSTRY \n\ EXAMPLE ORGANIZATIONS. He has consulted \n\ on a wide variety of financial management and \n\ operation issues including: \n\ \t\ • Preparation of facility operating and capital budgets \n\ \t\ • Reimbursement and billing issues \n\ \t\ • Evaluating financial managementoperations \n\ \n\ PROFESSIONAL / CIVIC ORGANIZATIONS \n\ \t\ • Member of the American Institute of CPAs \n\ \t\ • INDUSTRY association', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[9].add(iText10);

  var iText11 = new fabric.IText('PROPOSAL', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 54,
    fill: 'white'
  });
  canvases[10].add(iText11);

  var iText12 = new fabric.IText('QuickBooks Startup (20 hrs) ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 25,
    fill: 'orange'
  });
  canvases[11].add(iText12);

  var iText13 = new fabric.IText(' \n\ • Build the QuickBooks file based on existing Chart of Accounts (CSA) \n\ • Routing of vendor invoices, statements, and paperless bank debit transactions \n\ • Process for communicating cash position and A/P Aging for client approval \n\ • Customer Payments and Deposit Detail', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[12].add(iText13);

  var iText14 = new fabric.IText('Data Migration (20 Hrs) ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 25,
    fill: 'orange'
  });
  canvases[13].add(iText14);

  var iText15 = new fabric.IText(' \n\ • Customer and Vendor List \n\ • Customer Balance Summary \n\ • Daily Customer Invoice Summary (report to QB as journal entry - sales and A/R)', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[14].add(iText15);

  var iText16 = new fabric.IText('PROPOSAL', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 54,
    fill: 'white'
  });
  canvases[15].add(iText16);

  var iText17 = new fabric.IText('QuickBooks Data Build (40 hrs) ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 25,
    fill: 'orange'
  });
  canvases[16].add(iText17);

  var iText18 = new fabric.IText(' \n\ • Quote/Order/Invoice construction \n\ • Remote check deposit, EFT payment, CC processing \n\ • Warehouse database (as inventory items) \n\ • Remote access and/or publishing of Customer data (login) \n\ • Rolling bank reconciliation and cash flow analysis.', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[17].add(iText18);

  var iText19 = new fabric.IText('Overall', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 25,
    fill: 'orange'
  });
  canvases[18].add(iText19);

  var iText20 = new fabric.IText(' \n\ • Customer and Vendor List \n\ • Customer Balance Summary \n\ • Daily Customer Invoice Summary (report to QB as journal entry - sales and A/R)', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,                                                                                                                                                                                                                                                                                                                                         
  });
  canvases[19].add(iText20);

  var iText21 = new fabric.IText('SERVICE & PRICING', {
    styles: { },
    top:15,
    fontFamily: 'Arial,serif',
    fontSize: 54,
    fill: 'white'
  });
  canvases[20].add(iText21);

  var iText22 = new fabric.IText('SERVICE & PRICING', {
    styles: { },
    top:15,
    fontFamily: 'Arial,serif',
    fontSize: 54,
    fill: 'white'
  });
  canvases[21].add(iText22);

  var iText23 = new fabric.IText('NEXT STEPS', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 54,
    fill: 'white'
  });
  canvases[22].add(iText23);

  var iText24 = new fabric.IText('NEProject Kick-Off / Requirements DocumentationXT STEPS', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 20,
    fill: 'orange'
  });
  canvases[23].add(iText24);


  var iText25 = new fabric.IText(' During this phase, our collective teams will meet to review overall project goals, establish \n\ review annual tax preparation requirements and determine specific accounting \n\ responsibilities of your company and of Accounting Experts to confirm they align with the \n\ scope of the proposal. \n\ ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[24].add(iText25);

  var iText26 = new fabric.IText('System Configuration', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 20,
    fill: 'orange'
  });
  canvases[25].add(iText26);

  var iText27 = new fabric.IText(' Set up QuickBooks accounting software to services the needs of PROPOSAL COMPANY. \n\ ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[26].add(iText27);

  var iText28 = new fabric.IText('Data Migration', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 20,
    fill: 'orange'
  });
  canvases[27].add(iText28);

  var iText29 = new fabric.IText(' During this phase we will upload files for: \n\ • Customer, vendors, beginning balances, general ledger month-end balances for 12months prior \n\ • Open invoices and bills as of planned production dates \n\ • Chart of accounts', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[28].add(iText29);

  var iText30 = new fabric.IText('Training', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 20,
    fill: 'orange'
  });
  canvases[29].add(iText30);

  var iText31 = new fabric.IText(' Training of PROPOSAL COMPANY staff on QuickBooks System. \n\ ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[30].add(iText31);

  var iText32 = new fabric.IText('Ongoing', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 20,
    fill: 'orange'
  });
  canvases[31].add(iText32);

  var iText33 = new fabric.IText(' Provide monthly services as agreed upon in the contract. \n\ ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[32].add(iText33);

  var iText34 = new fabric.IText('CONTACT US', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 54,
    fill: 'white'
  });
  canvases[33].add(iText34);



canvases.forEach(function(c) {
  c.item(0) && c.item(0).setCoords();
  c.calcOffset();
  // back reference
  c.wrapperEl.canvas = c;
});

function setStyle(object, styleName, value) {
  if (object.setSelectionStyles && object.isEditing) {
    var style = { };
    style[styleName] = value;
    object.setSelectionStyles(style);
  }
  else {
    object[styleName] = value;
  }
}
function getStyle(object, styleName) {
  return (object.getSelectionStyles && object.isEditing)
    ? object.getSelectionStyles()[styleName]
    : object[styleName];
}

function addHandler(id, fn, eventName) {
  document.getElementById(id)[eventName || 'onclick'] = function() {
    var el = this;
    canvases.forEach(function(canvas, obj) {
      if (obj = canvas.getActiveObject()) {
        fn.call(el, obj);
        canvas.renderAll();
      }
    });
  };
}
	
addHandler('super-script', function(obj) {
  if (obj.selectionStart !== obj.selectionEnd) {
    obj.setSuperscript();
  }
});

addHandler('sub-script', function(obj) {
  if (obj.selectionStart !== obj.selectionEnd) {
    obj.setSubscript();
  }
});

addHandler('bold', function(obj) {
  var isBold = getStyle(obj, 'fontWeight') === 'bold';
  setStyle(obj, 'fontWeight', isBold ? '' : 'bold');
});

addHandler('italic', function(obj) {
  var isItalic = getStyle(obj, 'fontStyle') === 'italic';
  setStyle(obj, 'fontStyle', isItalic ? '' : 'italic');
});

addHandler('color', function(obj) {
  setStyle(obj, 'fill', this.value);
}, 'onchange');

addHandler('bg-color', function(obj) {
  setStyle(obj, 'textBackgroundColor', this.value);
}, 'onchange');

addHandler('size', function(obj) {
  setStyle(obj, 'fontSize', parseInt(this.value, 10));
}, 'onchange');

addHandler('font-family', function(obj) {
  setStyle(obj, 'fontFamily', this.value);
}, 'onchange');

