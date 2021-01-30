
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustinSprite;
var ground;
function preload()
{
	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	dustbinSprite=createSprite(width/2,80,10,10)
	dustbinSprite.scale=0.2
 	
	ground=createSprite(400,400,10,10);
	ground.scale=0.2;

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
dustinSprite.display;
ground.display; 

keyPressed();
}
function keyPressed(){
	if(keyDown===UP_ARROW)	{
		Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:85});

	}

}


