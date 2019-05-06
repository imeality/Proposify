var name=localStorage.getItem('rname');
console.log(name);

var dob=localStorage.getItem('dob');
var age=localStorage.getItem('age');
var mob=localStorage.getItem('rmob');
var eid=localStorage.getItem('eid');
var add=localStorage.getItem('radd');
var count=localStorage.getItem('rcount');
var stat=localStorage.getItem('rstat');
var rcity=localStorage.getItem('rcity');
var tensch=localStorage.getItem('tensch');
var tenper=localStorage.getItem('tenper');
var tenpass=localStorage.getItem('tenpass');
var twlsch=localStorage.getItem('twlsch');
var twlper=localStorage.getItem('twlper');
var twlpass=localStorage.getItem('twlpass');
var gcoll=localStorage.getItem('gcoll');
var gstr=localStorage.getItem('gstr');
var gper=localStorage.getItem('gper');
var gpass=localStorage.getItem('gpass');
var pgcoll=localStorage.getItem('pgcoll');
var pgstr=localStorage.getItem('pgstr');
var pgper=localStorage.getItem('pgper');
var pgpass=localStorage.getItem('pgpass');
var comnam=localStorage.getItem('comnam');
var jobpro=localStorage.getItem('jobpro');
var exper=localStorage.getItem('exper');
var sdate=localStorage.getItem('sdate');
var edate=localStorage.getItem('edate');
var achiv=localStorage.getItem('achiv');
var skil=localStorage.getItem('skil');
var lang=localStorage.getItem('lang');
var hobb=localStorage.getItem('hobb');


var canvases = this.__canvases = [
    new fabric.Canvas('p1'), new fabric.Canvas('p2'), new fabric.Canvas('p3'), new fabric.Canvas('p4'), new fabric.Canvas('p5'), 
    new fabric.Canvas('p6'), new fabric.Canvas('p7'), new fabric.Canvas('p8'), new fabric.Canvas('p9'), new fabric.Canvas('p10'),
    new fabric.Canvas('p11'), new fabric.Canvas('p12'), new fabric.Canvas('p13'), new fabric.Canvas('p14'), new fabric.Canvas('p15'),
    new fabric.Canvas('p16'), new fabric.Canvas('p17'), new fabric.Canvas('p18'), new fabric.Canvas('p19'), new fabric.Canvas('p20'),
    new fabric.Canvas('p21'), new fabric.Canvas('p22'), new fabric.Canvas('p23'), new fabric.Canvas('p24'), new fabric.Canvas('p25'),
    new fabric.Canvas('p26'), new fabric.Canvas('p27'), new fabric.Canvas('p28'), new fabric.Canvas('p29'), new fabric.Canvas('p30'),
    new fabric.Canvas('p31'), new fabric.Canvas('p32'), new fabric.Canvas('p33'), new fabric.Canvas('p34'),
  ];
  
  var iText1 = new fabric.IText(name, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 42,
      fill:'rgb(27, 68, 145)',
    });
    canvases[0].add(iText1);
  
    var iText2 = new fabric.IText(add+' '+count+' '+stat+' '+rcity+ '\n' + eid+ '\n' + mob+ '\n' + dob+ '\n' + age+ 'Years' , {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
    });
    canvases[1].add(iText2);
  
    var iText3 = new fabric.IText('OBJECTIVE', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 24,
      fill:'rgb(27, 68, 145)',
    });
    canvases[2].add(iText3);
  
    var iText4 = new fabric.IText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim \n\viverra nibh sed varius. Proin bibendum nunc in sem ultrices posuere. \n\Aliquam ut aliquam lacus.', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 16,
    });
    canvases[3].add(iText4);
  
    var iText5 = new fabric.IText('EDUCATION', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 24,
      fill:'rgb(27, 68, 145)',
    });
    canvases[4].add(iText5);
  
    var iText6 = new fabric.IText('10th', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
      fill:'#7b90b5',
    });
    canvases[5].add(iText6);
  
    var iText7 = new fabric.IText(tensch+ '\n'+ 'Percentage  :- \t' + tenper+'%'+'\n'+'Passing Year  :- \t'+tenpass, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
    });
    canvases[6].add(iText7);
  
    var iText8 = new fabric.IText('12th', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
      fill:'#7b90b5',
    });
    canvases[7].add(iText8);
  
    var iText9 = new fabric.IText(twlsch+ '\n'+ 'Percentage  :- \t' + twlper+'%'+'\n'+'Passing Year  :- \t'+twlpass, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
    });
    canvases[8].add(iText9);
  
    var iText10 = new fabric.IText('Graduation', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
      fill:'#7b90b5'
    });
    canvases[9].add(iText10);
  
    var iText11 = new fabric.IText(gcoll+ '\n'+'Stream  :- \t'+ gstr+'\n'+'Percentage  :- \t' + gper+'%'+'\n'+'Passing Year  :- \t'+gpass, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
    });
    canvases[10].add(iText11);
  
    var iText12 = new fabric.IText('Post Graduation', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
      fill:'#7b90b5'  
    });
    canvases[11].add(iText12);
  
    var iText13 = new fabric.IText(pgcoll+ '\n'+'Stream  :- \t'+ pgstr+'\n'+'Percentage  :- \t' + pgper+'%'+'\n'+'Passing Year  :- \t'+pgpass, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
    });
    canvases[12].add(iText13);
  
    var iText14 = new fabric.IText('EXPERIENCE', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 24,
      fill:'rgb(27, 68, 145)', 
    });
    canvases[13].add(iText14);
  
    var iText15 = new fabric.IText(sdate +'\t - \t'+ edate, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 16,
      fill:'#7b90b5'  
    });
    canvases[14].add(iText15);
  
    var iText16 = new fabric.IText(comnam+ '\n'+'Job Profile :- \t'+ jobpro+'\n'+'Year of Experience :- \t' + exper, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
    });
    canvases[15].add(iText16);
  
    var iText17 = new fabric.IText('SKILLS', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 24,
      fill:'rgb(27, 68, 145)',
    });
    canvases[16].add(iText17);
  
    var iText18 = new fabric.IText('Techinical Skills', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 16,
      fill:'#7b90b5'
    });
    canvases[17].add(iText18);
  
    var iText19 = new fabric.IText('• \t'+skil, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
    });
    canvases[18].add(iText19);
  
    var iText20 = new fabric.IText('Achivement', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 16,
      fill:'#7b90b5'
    });
    canvases[19].add(iText20);
  
    var iText21 = new fabric.IText('• \t'+achiv, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
    });
    canvases[20].add(iText21);
  
    var iText22 = new fabric.IText('Languages', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 16,
      fill:'#7b90b5'
    });
    canvases[21].add(iText22);
  
    var iText23 = new fabric.IText('• \t'+lang, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
    });
    canvases[22].add(iText23);
  
    var iText24 = new fabric.IText('Hobbies', {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 16,
      fill:'#7b90b5'
    });
    canvases[23].add(iText24);
  
  
    var iText25 = new fabric.IText('• \t'+hobb, {
      styles: { },
      fontFamily: 'Arial,serif',
      fontSize: 18,
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
  