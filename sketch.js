const Bodies = Matter.Bodies;
const Engine = Matter.Engine
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,ground,bac,mon;

function preload(){

    bac=loadImage("GamingBackground.png")

    mon = loadImage("Monster-01.png")
}

function setup(){
    var canvas = createCanvas(1800,600)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(900,400,1800,20)
    ground1 = new Ground(900,-25,1800,20)
    ground2 = new Ground(1500,275,100,20)
    ground3 = new Ground(900,-25,1800,20)
    ground4 = new Ground(900,-25,1800,20)

    /// box1 = new Box(900,100,70,70)
  //  box2 = new Box(900,100,70,70)
    box3 = new Box2(1500,250,100,100)
    box4 = new Box(800,100,70,70)
    box5 = new Box(800,100,70,70)
    box6 = new Box(800,100,70,70)
    box7 = new Box(800,100,70,70)
    box8 = new Box(800,100,70,70)

    box31 = new Box2(1500,250,100,100)
    box41= new Box(600,100,70,70)
    box51 = new Box(600,100,70,70)
    box61 = new Box(600,100,70,70)
    box71 = new Box(600,100,70,70)
    box81 = new Box(600,100,70,70)



    //ball
    man = new Man(100,100,150,80)


    rope = new Rope(man.body,{x:250,y:100})

}

function draw(){
    background(bac);
    Engine.update(engine);

   // ground.display();
   // ground2.display();
   // ground3.display();
    //ground4.display();

   // box1.display();
   // box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box31.display();
    box41.display();
    box51.display();
    box61.display();
    box71.display();
    box81.display();
  
   // rope.display();


    man.display();

}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rope.attach(man.body);
    }
}
function mouseDragged(){
    
        Matter.Body.setPosition(man.body, {x: mouseX , y: mouseY});
    
}
function monkey(){


    if(frameCount % 50==0){

        var mon= new Box(200,200,20,20)

    }

}