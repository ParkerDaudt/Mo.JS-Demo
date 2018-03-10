var redCirc = new mojs.Shape({
  shape: 'circle',
  //isShowStart:true,
  left: 0, top: 0,
  stroke: 'red',
  fill: 'none',
  radius: 15,
  strokeWidth: 10,
  duration: 300

}).then({
  strokeWidth: 0,
  scale: { to: 2, easing: 'sin.in' },
  duration: 500
});

var sparks = new mojs.Burst({
  radius: { 0: 50 },
  angle: { 0: 90 },
  left: 0, top: 0,
  count: 30,
  children: {
    shape: 'cross',
    points: 15,
    stroke: 'white',
    fill: 'none',
    duration: 300

  }
});

var redSparks = new mojs.Burst({
  left: 0, top: 0,
  count: 8,
  radius: { 150: 350 },
  angle: { 0: 90, easing: 'cubic.out' },
  children: {
    shape: 'line',
    stroke: { 'red': 'transparent' },
    strokeWidth: 5,
    scaleX: { 0.5: 0 },
    degreeShift: 'rand(-90, 90)',
    radius: 'rand(20, 300)',
    duration: 200,
    delay: 'rand(0,150)' }
});

var triangles = new mojs.Burst({
  radius: { 0: 1000, easing: 'cubic.out' },
  angle: { 1000: 0, easing: 'quad.out' },
  left: 0, top: 0,
  count: 20,
  children: {
    shape: 'polygon',
    points: 3,
    angle: { 1000: 0 },
    radius: { 10: 100 },
    fill: ['red', 'yellow', 'blue', 'green'],
    duration: 3000
  }

});

var lines = new mojs.Burst({
  radius: { 0: 1000, easing: 'cubic.out' },
  angle: { 0: 1400, easing: 'cubic.out' },
  left: 0, top: 0,
  count: 50,
  children: {
    shape: 'line',
    radius: { 1: 100, easing: 'elastic.out' },
    fill: 'none',
    stroke: ['red', 'orange'],
    delay: 'stagger(10)',
    duration: 1000
  }

});

document.addEventListener('click', function (e) {

  redCirc.tune({ x: e.pageX, y: e.pageY }).replay();

  sparks.tune({ x: e.pageX, y: e.pageY }).replay();

  redSparks.tune({ x: e.pageX, y: e.pageY }).replay().generate();

  triangles.tune({ x: e.pageX, y: e.pageY }).replay();

  lines.tune({ x: e.pageX, y: e.pageY }).replay();
});