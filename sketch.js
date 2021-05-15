//Rainfall image

//Matter.js variables:
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

var thunderSprite,thunder1,thunder2,thunder3,thunder4;
var boy;
var drop=[];

function preload(){
    //thunder
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");

    //Boy
    boyA=loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png");
}

function setup(){
    createCanvas(400,675);
    engine=Engine.create();
    world=engine.world;
 
    //Ground:
    ground=new Ground(0,670,1000,20);

    //create rain
    for(i=0;i<300;i++){
        drop.push(new Water(random(0,500),random(0,50)));
    }

    //boy anime
    var options={
        isStatic:true
    }
    boy=Bodies.rectangle(200,450,140,130,options);
    World.add(world,boy);
    //boy.addimage("walk",boyA);

    Boy=createSprite(200,500,50,50);
    World.add(world,Boy);
    Boy.addAnimation("walking",boyA);
    Boy.scale=0.5;

}

function draw(){
    background("black");
    Engine.update(engine);

    //rain
    for(j=0;j<300;j++){
      drop[j].display();
      drop[j].update();
    }    

    //boy display
   /* imageMode(CENTER);
    image (boyA,200,530,300,300);*/
        
    //ground
    ground.display();

    //spawn thunder
    createThunder();
    drawSprites();
}   

function createThunder(){
    rand=Math.round(random(1,4));
    if (frameCount%80===0){
        thunderCreatedFrameSprite=frameCount;
        thunderSprite=createSprite(random(10,400),random(10,30),10,10);
        thunderSprite.lifetime=10;

        switch(rand){
            case 1: thunderSprite.addImage(thunder1);
            break;
            case 2:thunderSprite.addImage(thunder2);
            break;
            case 3:thunderSprite.addImage(thunder3);
            break;
            case 4:thunderSprite.addImage(thunder4);
            break;
            default:break;    
        }
    }
}
