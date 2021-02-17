
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,paper2,paper3,paper4,paper5;
var box;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(100,100)
	paper2 = new paper(125,100)
	paper3 = new paper(150,100)
	paper4 = new paper(175,100)
	paper5 = new paper(200,100)

	chain1 = new Chain(paper1,(100,200))
	chain2 = new Chain(paper2,(125,200))
	chain3 = new Chain(paper3,(150,200))
	chain4 = new Chain(paper4,(175,200))
	chain5 = new Chain(paper5,(200,200))

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



