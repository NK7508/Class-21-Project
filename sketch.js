class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(0);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}
class Left 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(0);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}
class Right 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(0);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let world
let engine
var ball
var ball_options = {isStatic:false, restitution:0.3,friction:0,density:1.2}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,8,ball_options)
	World.add (world,ball)

	

	Engine.run(engine);
  
}

function keyPressed (){
	if (keyCode == UP_ARROW){
		Force ()
	}

}
function Force (){
	Matter.Body.applyForce (ball, {x:0,y:0},{x:1,y:0})
	Matter.Body.applyForce (ball, {x:0,y:0},{x:0,y:-4})
  }
function draw() {
  rectMode(CENTER);
  background(51);
  var groundObj = new Ground (400,670,800,20)
  var leftSide = new Left (600,600,20,120)
  var rightSide = new Right (700,600,20,120)
  groundObj.display ()
  leftSide.display ()
  rightSide.display ()
  ellipse (ball.position.x,ball.position.y, 30)
  Engine.update(engine);
  drawSprites();
 
}



