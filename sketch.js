//This project is for Newton's cradle
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, ground2, ball, ball2, ball3, ball4, ball5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground

	ground = new Ground(500,650,1000,10);
	ground2 = new Ground(500,280,500,40);
 	World.add(world, ground);


	Engine.run(engine);
    ball1 = new Ball(-200,280,30);
 	ball2 = new Ball(400,580,30);
  	ball3 = new Ball(500,580,30);
  	ball4 = new Ball(600,580,30);
  	ball5 = new Ball(700,580,30);

  	line1 = new Slingshot(ball1.body,{x: 300, y: 280});
  	line2 = new Slingshot(ball2.body,{x: 400, y: 280});
  	line3 = new Slingshot(ball3.body,{x: 500, y: 280});
  	line4 = new Slingshot(ball4.body,{x: 600, y: 280});
  	line5 = new Slingshot(ball5.body,{x: 700, y: 280});
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  ground.display();
  ground2.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
}



