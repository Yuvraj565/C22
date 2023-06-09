const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground;
var backgroundIMG;
var tower, towerIMG;
var cannon;

function preload() {
  backgroundIMG = loadImage("./assets/background.gif");
  towerIMG = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  options={
  isStatic:true
  }

  ground = Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  angle = 20
  cannon = new Cannon(180, 110, 130, 100, angle)

 
}

function draw() {
  image(backgroundIMG, 0, 0, 1200, 602);
  Engine.update(engine);
 
  rect(ground.position.x, ground.position.y,width*2,1);
  push();
  imageMode(CENTER);
  image(towerIMG, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  
}
