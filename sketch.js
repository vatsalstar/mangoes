const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground,tree,boy,mango1,mango2,mango3,mango4,mango5,chain,stone;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

   ground =new Ground(width/2,600,width,20);
   mango1 =new Mango(950,100,10);
   mango2 =new Mango(1020,130,10);
   mango3 =new Mango(1050,200,10);
   mango4 =new Mango(1200,120,10);
   mango5 =new Mango(1200,250,10);
   tree = new Tree(1050,280,500,600);
   boy = new Boy(400,470,300,500);
   stone = new Stone(400,800);
   chain = new Chain(stone.body,{x:320,y:380});

	Engine.run(engine);
  
}
function mouseDragged(){ 
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}); 
} 
function mouseReleased()
{ chain.fly(); 
}

function draw() {
  rectMode(CENTER);
  background("#87CEEB");
//if(keyIsPressed===true){
  //chain.attach();
//}
  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain.display();
  stone.display();
}



