const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy ,mangoes;
var backgroundImg,platform;
var bird, slingshot;
function  preload(){
    treeimage = loadImage("tree.png")
    boyimage = loadImage("boy.png")
}
function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    stoneObj = new Stone(100, 300, 10, 10)
    ground = new Ground(width/2, height-70, width,10);
   

    mango2 = new Mango(700,320);
    mango3 = new Mango(920,320);
    mango4 = new Mango(810, 350);
    mango5 = new Mango(810,260);

    mango6 = new Mango(700,240);
    mango7 = new Mango(920,240);
    mango8 = new Mango(810, 220);

    stoneObj =  new Stone(200,180);
    
    
   launcher = new Launcher(stoneObj.body, {x:210, y:510})
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    image(treeimage,650,150,300,500)
    image(boyimage,200,480,100,200)
   
    mango2.display()
    mango3.display()
    mango4.display()
    mango5.display()
    mango6.display()
    mango7.display()
    mango8.display()
    stoneObj.display()
    ground.display()

    launcher.display()

    detectollision(stoneObj,mango2);
    detectollision(stoneObj,mango3);
    detectollision(stoneObj,mango4);
    detectollision(stoneObj,mango5);
    detectollision(stoneObj,mango6);
    detectollision(stoneObj,mango7);
    detectollision(stoneObj,mango8);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
    launcher.fly()
}
function keyPressed(){
    if( keyCode==UP_ARROW){
        launcher.attach(stoneObj.body)
    }
}

function detectollision(stoneObj,mango){
    mangoBodyPosition=mango.body.position
    stoneBodyPosition=stoneObj.body.position

    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
        if(distance<=mango.width/2+stoneObj.width/2)
        {
            Matter.Body.setStatic(mango.body,false);
        }

}


    






