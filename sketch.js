
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage,treeImage;
var villageImage;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;
var boy, stone, ground, tree,slingShot;

function preload()
{
	boyImage = loadImage("sprites/plucking mangoes/boy.png");
	treeImage = loadImage("sprites/plucking mangoes/tree.png");
	//villageImage = loadImage("sprites/plucking mangoes/images.jpg");
	
}

function setup() {
	createCanvas(1300, 600);
	background(0);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	mango1 = new Mango(1300,300,60);
	mango2 = new Mango(1180,230,60);
	mango3 = new Mango(1340,230,60);
	mango4 = new Mango(1380,390,60);
	mango5 = new Mango(1000,320,60);
	mango6 = new Mango(1190,340,60); 
	mango7 = new Mango(1250,170,60);
	mango8 = new Mango(1420,310,60);
    mango9 = new Mango(1080,340,60);

	ground = new Ground (700,500,1400,10);

	slingShot = new SlingShot(stone.body, {x:272 , y:555});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

    boy = createSprite(200,500,30,50);
	boy.addImage(boyImage);
	boy.scale = 0.12;

    tree = createSprite(1000,300,30,50);
	tree.addImage(treeImage);
	tree.scale = 0.5;

  drawSprites();

	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	hold.display();
	stone.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);

 
}

  // textSize(30);
  // text("Press 'SPACE' to get second chance",400,50);


function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function detectCollision(lstone, lmango)
{
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:280, y:575})
		hold.attach(stone.body);
	}
}

