var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var particle =[];
var divisions;
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,175));
 }

 for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,275));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,375));
 }
 
 ground = new Ground (600,height,1200,20);
  

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  ground.display();

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  drawSprites();
}