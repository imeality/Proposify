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

