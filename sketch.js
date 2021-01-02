//Variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1;

//Constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//Loading Images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
 //Creating a package sprite and adding an image to it 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1;

 //Creating a helicopter sprite and adding an image to it 
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

 //Creating a ground sprite and adding color to it 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    //Creating the engine as 'engine'
	engine = Engine.create();

	//The world is inside the engine 
	world = engine.world;
	
	//Defining packagebody
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	//Adding it to the world
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	//Creating each object in one line as thier properties are already defined in Box class
	rect1 = new Box(400,650,200,20);
	rect2 = new Box(300,610,20,100);
	rect3 = new Box(500,610,20,100);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  //Displaying the objects
  rect1.display();
  rect2.display();
  rect3.display();  
  
  //Calling the function 'keyPressed'
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   //Make the package fall 
    Matter.Body.setStatic(packageBody, false)
    
  }
}



