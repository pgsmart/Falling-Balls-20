const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var bar1, bar2;
var ground;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8;
var spinner1, spinner2, spinner3;

var angle1 = 60;
var angle2 = 60;
var angle3 = 60;


function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options={
      isStatic: true
    }

    bar1 = Bodies.rectangle(125,500,225,50,ground_options);
    World.add(world,bar1);
    bar2 = Bodies.rectangle(450,500,225,50,ground_options);
    World.add(world,bar2);
    ground = Bodies.rectangle(300,590,600,10,ground_options);
    World.add(world,ground);

    var ball_options={
      restitution: 0.5,
      friction: 0.02
    }

    ball1 = Bodies.circle(random(200,400),0,20,ball_options);
    World.add(world,ball1);
    ball2 = Bodies.circle(random(200,400),0,20,ball_options);
    World.add(world,ball2);
    ball3 = Bodies.circle(random(200,400),0,20,ball_options);
    World.add(world,ball3);
    ball4 = Bodies.circle(random(200,400),0,20,ball_options);
    World.add(world,ball4);
    ball5 = Bodies.circle(random(200,400),0,20,ball_options);
    World.add(world,ball5);
    ball6 = Bodies.circle(random(200,400),0,20,ball_options);
    World.add(world,ball6);
    ball7 = Bodies.circle(random(200,400),0,20,ball_options);
    World.add(world,ball7);
    ball8 = Bodies.circle(random(200,400),0,20,ball_options);
    World.add(world,ball8);

    var spinner_options={
      isStatic: true
    }

    spinner1 = Bodies.rectangle(300,200,300,20,spinner_options);
    World.add(world,spinner1);
    spinner2 = Bodies.rectangle(300,200,300,20,spinner_options);
    World.add(world,spinner2);
    spinner3 = Bodies.rectangle(300,200,300,20,spinner_options);
    World.add(world,spinner3);

    fill(255,0,0);
    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw(){
    background("lightgreen");

    Engine.update(engine);
    
    // Ground and two bars
    rect(bar1.position.x,bar1.position.y,225,50);
    rect(bar2.position.x,bar2.position.y,225,50);
    rect(ground.position.x,ground.position.y,600,10);

    // Falling Balls
    ellipse(ball1.position.x,ball1.position.y,20);
    ellipse(ball2.position.x,ball2.position.y,20);
    ellipse(ball3.position.x,ball3.position.y,20);
    ellipse(ball4.position.x,ball4.position.y,20);
    ellipse(ball5.position.x,ball5.position.y,20);
    ellipse(ball6.position.x,ball6.position.y,20);
    ellipse(ball7.position.x,ball7.position.y,20);
    ellipse(ball8.position.x,ball8.position.y,20);
    

    // Spinners
    Matter.Body.rotate(spinner1,angle1)
    push();
    translate(spinner1.position.x,spinner1.position.y);
    rotate(angle1);
    rect(0,0,300,20);
    pop();
    angle1 +=0.2;

    Matter.Body.rotate(spinner2,angle1)
    push();
    translate(spinner2.position.x,spinner2.position.y);
    rotate(angle2);
    rect(0,0,300,20);
    pop();
    angle2 +=0.3;

    Matter.Body.rotate(spinner3,angle1)
    push();
    translate(spinner3.position.x,spinner3.position.y);
    rotate(angle3);
    rect(0,0,300,20);
    pop();
    angle3 +=0.1;
 
}
