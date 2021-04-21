
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, paperObject,groundObject;	
var world;
var wallleft, wallright, walltop;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,690,width,20);
	dustbinObj=new Dustbin(1200,670);
	wallleft = new Wall(0,0,20,3200);
	wallright = new Wall(1600,0,20,3200);
	walltop = new Wall(0,0,3200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
 
}

function keyPressed() {
  	if (keyCode === RIGHT_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
    
  	}

	  if (keyCode === LEFT_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-130,y:-145});
    
  	}

	  if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:4,y:-145});
    
  	}

	  if (keyCode === DOWN_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-4,y:145});
    
  	}
}





