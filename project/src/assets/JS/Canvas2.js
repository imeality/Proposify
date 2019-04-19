var canvas = this.__canvas = new fabric.Canvas('c');
  fabric.Object.prototype.transparentCorners = false;

 var $ = function(id){return document.getElementById(id)};

fabric.Image.fromURL('/assets/proposalAgency/background01.jpg', function(img) {
  img.left=5;
  img.top=5;
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

fabric.Image.fromURL('/assets/proposalAgency/background02.jpg', function(img) {
  img.top=5;
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

fabric.Image.fromURL('/assets/proposalAgency/background03.jpg', function(img) {
  img.left=5;
  img.top=7;
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

fabric.Image.fromURL('/assets/proposalAgency/background04.jpg', function(img) {
  img.left=5;
  img.top=7;
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

fabric.Image.fromURL('/assets/proposalAgency/background05.jpg', function(img) {
  img.left=5;
  img.top=7;
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

fabric.Image.fromURL('/assets/proposalAgency/background06.jpg', function(img) {
  img.left=5;
  img.top=7;
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

fabric.Image.fromURL('/assets/proposalAgency/background07.jpg', function(img) {
  img.left=5;
  img.top=7;
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

fabric.Image.fromURL('/assets/proposalAgency/background08.jpg', function(img) {
  img.left=-5;
  img.top=7;
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

fabric.Image.fromURL('/assets/proposalAgency/background09.jpg', function(img) {
  img.left=5;
  img.top=7;
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

fabric.Image.fromURL('/assets/proposalAgency/background10.jpg', function(img) {
  img.left=5;
  img.top=7;
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


var canvases = this.__canvases = [
  new fabric.Canvas('p1'), new fabric.Canvas('p2'), new fabric.Canvas('p3'), new fabric.Canvas('p4'), new fabric.Canvas('p5'), 
  new fabric.Canvas('p6'), new fabric.Canvas('p7'), new fabric.Canvas('p8'), new fabric.Canvas('p9'), new fabric.Canvas('p10'),
  new fabric.Canvas('p11'), new fabric.Canvas('p12'), new fabric.Canvas('p13'), new fabric.Canvas('p14'), new fabric.Canvas('p15'),
  new fabric.Canvas('p16'), new fabric.Canvas('p17'), new fabric.Canvas('p18'), new fabric.Canvas('p19'), new fabric.Canvas('p20'),
  new fabric.Canvas('p21'), new fabric.Canvas('p22'), new fabric.Canvas('p23'), new fabric.Canvas('p24'), new fabric.Canvas('p25'),
  new fabric.Canvas('p26'), new fabric.Canvas('p27'), new fabric.Canvas('p28'), new fabric.Canvas('p29'), new fabric.Canvas('p30'),
  new fabric.Canvas('p31'), new fabric.Canvas('p32'), new fabric.Canvas('p33'), new fabric.Canvas('p34'),
];

var iText1 = new fabric.IText('Project Management \n\You Can Count On', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 44,
    fill:'rgb(241,47,106)',
  });
  canvases[0].add(iText1);

  var iText2 = new fabric.IText('Agency Project Management Services', {
    styles: { },
    fontFamily: 'Arial',
    fontSize: 20,
    fill:'white',
  });
  canvases[1].add(iText2);

  var iText3 = new fabric.IText('\n\ Dear Ms. Arthur, \n\ \n\ \n\Your company, is preparing to take on a large and complex project. You need\n\ professional project management to help you navigate complicated regulations, ensure\n\ contractors and suppliers are in place when and where you need them, and communicate \n\ with project stakeholders.\n\ \n\With so many moving parts, the need to stay on track and be organized is obvious. We \n\ knows big projects. We have the training and skills you need to ensure your venture   \n\ happens on time and on budget with buy-in from colleagues and partners, all while \n\ managing risk. \n\ \n\ It has the knowledge, systems, tools, and track record to steward your project from concept\n\ to completion. We will make sure that the project you dream up is the project you get -  \n\ without pain, without compromises, and without surprises. \n\ \n\ The attached proposal outlines the assessment, design, implementation, and management \n\ strategies we bring to the table. We are confident that our approach is a perfect fit for the \n\ project management needs of yours.\n\ \n\ \n\ Sincerely, \n\ ', {
    styles: { },
    fontFamily: 'Arial',
    fontSize: 13,
  });
  canvases[2].add(iText3);

  var iText4 = new fabric.IText('Project Summary', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 44,
    fill:'rgb(241,47,106)',
  });
  canvases[3].add(iText4);

  var iText5 = new fabric.IText('\n\ Successful project management is all about assessing a client\'s needs and choosing the right tools \n\for the job. We work to understand all aspects of your project, build custom solutions to move it\n\ forward, and implement a plan to complete it on time - on or under budget. \n\ \n\ Key Deliverables \n\ \n\ \t\ • A unique project profile that will guide the project management team and help all \n\ \t\ \t\  stakeholders focus on the goals and purpose of the project. \n\ \t\ • A customized plan tailored to the specific needs of the vaibhav patel project. This includes\n\ \t\ \t\ protocols, systems, tools, and templates to keep everyone in the loop and ensure that the\n\ \t\ \t\ supplies, information, and people you need are there when you need them. \n\ \t\ • Management and support as the project plans rolls out. This includes continuous\n\ \t\ \t\ monitoring of goals and objectives to ensure timely completion of benchmarks,\n\ \t\ \t\ communication across the organization and to external stakeholders, and a comprehensive\n\ \t\ \t\ risk management strategy. \n\ \t\ • Your project - completed your way.\n\ ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[4].add(iText5);

  var iText6 = new fabric.IText('Project Activities', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 44,
    fill:'rgb(241,47,106)',
  });
  canvases[5].add(iText6);

  var iText7 = new fabric.IText('Phase 1: Initial Consultation', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 15,
    fill:'rgb(194,172,17)',
  });
  canvases[6].add(iText7);

  var iText8 = new fabric.IText('In a series of three meetings, we\'ll get to know you and your project. We\'ll assess the  \n\strengths and weaknesses within your internal project team and systems, and identify \n\the expertise you  need to get going.', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[7].add(iText8);

  var iText9 = new fabric.IText('Phase 2: Solution Design and Modelling', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 15,
    fill:'rgb(194,172,17)',
  });
  canvases[8].add(iText9);

  var iText10 = new fabric.IText('Using project management best practices, we\'ll create your project solution design. \n\This is a set of recommendations and plans, including project management software, \n\tools, and benchmarks for success. This model for how your project will roll out allows \n\you to back up your decisions with evidence and keep everybody on the same page. \n\The plan encompasses every aspect of your project: the purpose, scope, cost, and \n\ timeline.', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[9].add(iText10);

  var iText11 = new fabric.IText('Phase 3: Implementation', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 15,
    fill:'rgb(194,172,17)',
  });
  canvases[10].add(iText11);

  var iText12 = new fabric.IText('This is where we press the start button and get your project rolling. Your solution design \n\ guarantees your project aligns with your company values. The implementation phase\n\ ensures your employees work better themselves and with their teams, get agreement on \n\ priorities, commit to a schedule, manage risk, keep the plan updated, and finish \n\ the project on time.', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[11].add(iText12);

  var iText13 = new fabric.IText(' Phase 4: Management and Support', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 15,
    fill:'rgb(194,172,17)',
  });
  canvases[12].add(iText13);

  var iText14 = new fabric.IText('Once the project is underway, we\'re here to manage both the day-to-day workflow and the  \n\ big picture priorities. We also support your people to learn the principles of project  \n\ management, so they can take ownership of the process from start to finish.', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[13].add(iText14);

  var iText15 = new fabric.IText('Accountabilities ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 44,
    fill:'rgb(241,47,106)',
  });
  canvases[14].add(iText15);

  var iText16 = new fabric.IText('\n\• A team of expert project managers and consultants that matches your project profile \n\• Access to advice, software, tools, templates, and systems to implement the project plan ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[15].add(iText16);

  var iText17 = new fabric.IText('The responsibilities of your\'s include:', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 15,
    fill:'rgb(194,172,17)',
  });
  canvases[16].add(iText17);

  var iText18 = new fabric.IText('\n\• Assigning a leader within the organization to work directly with the project manager. \n\• Providing access to senior management as needed. \n\• Remote access and/or publishing of Customer data (login) needed. \n\• Working collaboratively in a series of weekly meetings to move the project forward. ', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,
  });
  canvases[17].add(iText18);

  var iText19 = new fabric.IText('About Us', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 44,
    fill:'rgb(241,47,106)'
  });
  canvases[18].add(iText19);

  var iText20 = new fabric.IText(' \n\ • Customer and Vendor List \n\ • Customer Balance Summary \n\ • Daily Customer Invoice Summary (report to QB as journal entry - sales and A/R)', {
    styles: { },
    fontFamily: 'Arial,serif',
    fontSize: 13,                                                                                                                                                                                                                                                                                                                                         
  });
  canvases[19].add(iText20);

  var iText21 = new fabric.IText('About Us', {
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