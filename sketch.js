
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var rwall
var lwall
function preload()
{
	
}

function setup() {
	createCanvas(900, 900);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

var ball_option={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}
ball=Bodies.circle(100,400,20,ball_option)
World.add(world,ball)
	Engine.run(engine);
  ground=new Ground(200,530,1200,5)
  rwall=new Ground(500,490,5,80)
  lwall=new Ground(650,490,5,80)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ellipse(ball.position.x,ball.position.y,20,20)
 ground.show()
 rwall.show()
 lwall.show()
}
function keyPressed(){
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball,ball.position,{x:55,y:-55})

	}
}


