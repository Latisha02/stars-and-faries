const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball
var myEngine, myWorld, ground;
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var option ={
    isStatic:true
  }
  ground = Bodies.rectangle(400,390,800,20,option);
  World.add(myWorld,ground);

  var ball_option={
    restitution: 1
    
  }

  ball=Bodies.circle(400,200,20,ball_option);
  World.add(myWorld,ball);


}

function draw() {
  background(0);  
  Engine.update(myEngine);
  fill(yellow")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
  
  fill("yellow")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}