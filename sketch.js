
var Amogh;

var link1;
var link2;


function setup() {
  createCanvas(200, 400);

  
  
    
  link1 = createA("https://www.youtube.com/channel/UCtMami_W4x0-dJ4834yNcsA", "Talented Beast");
  link1.size(100)
  link1.position(20, 80)

  link2 = createA("https://www.blogger.com/blog/posts/9100634708715725252", "Amogh Blog")
  link2.position(20, 120);
}

function draw() {
  background(180);

  fill("red")
  textSize(10)
  text("Visit My Channel", 20, 70);

  text("You Can Visit My blog By 👆", 20, 170);

  drawSprites();
  

}