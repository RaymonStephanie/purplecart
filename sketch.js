var car, wall;

var speed, weight;

var deformation;

function setup() {
  createCanvas(800,400);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car = createSprite(50,200,20,20);
    car.velocityX = speed;
    car.shapeColor = "blue";
  wall = createSprite(700,200,60,200);
}

function draw() {
  background(0);

  if (car.x - wall.x < wall.width/2 + car.width/2 && wall.x-car.x < wall.width/2 + car.width/2
    && car.y- wall.y < wall.height/2 + car.height/2 && wall.y- car.y < wall.height/2 + car.height/2) {
      definedeformation();
  }

  drawSprites();
}

function definedeformation () {
  deformation = (0.5*weight*speed*speed/22509);
  
  if (deformation < 100) {
    car.shapeColor = "green";
    car.x = 50;
    car.velocityX = 0;
  }

  if (deformation>100 && deformation<180) {
    car.shapeColor = "yellow";
    car.x = 50;
    car.velocityX = 0;
  }

  if (deformation>180) {
    car.shapeColor = "red";
    car.x = 50;
    car.velocityX = 0;
  }

}