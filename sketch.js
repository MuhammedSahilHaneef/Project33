var snow,bg;
var together;
var snow,snowImg1,snowImg2,snowImg3;
var snowwebp,snowImg4,snowImg5;

function preload() {
     bg = loadImage("images/snow.jpg");
     snowImg1 = loadAnimation("snow1.jpg.png");
     snowImg2 = loadAnimation("snow2.jpg.png");
     snowImg3 = loadAnimation("snow3.jpg.png");
     snowwebpImg4 = loadAnimation("snowwebp4.jpg.png");
     snowwebpImg5 = loadAnimation("snowwebp5.jpg.png");
}

function setup(){
  canvas = createCanvas(1000,800);

  snow = createSprite(870,600);
  snow.addAnimation("snowjpg",snowImg1,snowImg2,snowImg3);
  snow.scale = 0.2;

  snowwebp =  createSprite(200,600);
  snowwebp.addAnimation("snowwebp" , snowwebpImg4,snowwebpImg5);
  snowwebp.scale = 0.15;
}

function draw() {
  background(bg);
   if(snow.x - snowwebp.x < (snow.width - snowwebp.width)/2)
{
  snow.velocityX=0;
  snow.addAnimation("snowjpg",snowImg3);
  snow.x = 300;
  snow.scale=0.2;
 snow.changeAimation("snow3.jpg")
 snowwebp.addAnimation("snowwepb",snowwepb4);
 snowwebp.scale= 0.15;
 snowwebp.changeAnimation("snowwebp5");

}
  
  drawSprites();
}






