const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;   
    drop = new Drop(random(0, 400), random(0, 400)) 
    
}

function draw(){
    background("black")

    drop.display();

    for(var i = 0; i < maxDrops; i++){
        drops.push(new createDrop(random(0, 400), random(0, 400)))
    }

    if(drop > 400){
        drop === 0
    }
}   

