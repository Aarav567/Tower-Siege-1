const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var stand1;


function setup(){
    createCanvas(1000, 400);
	engine = Engine.create();
	world = engine.world;
    stand1 = new Stand(300,200,100,20);




	Engine.run(engine);
}
function draw(){
    background("black");



    stand1.display();
    drawSprites();
}