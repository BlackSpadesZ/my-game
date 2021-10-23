var bg,bgImg;
var player, playerImg;

function preload() {
    bgImg = loadImage('gameBg.png');
    playerImg = loadImage('shoot3.png');
}

function setup() {
    createCanvas(700, 550);
    bg = createSprite(650, 300 );
    bg.addImage(bgImg);
    bg.velocityX = -2;
    bg.scale = 1;

    player = createSprite(50, 500);
    player.addImage(playerImg);
}

function draw () {
    background(0);
    

    if(bg.x < 300) {
        bg.x = bg.width/2;
    }

    if(keyDown("UP_ARROW")){
        player.y = player.y - 4;
       }

       if(keyDown('DOWN_ARROW')){
           player.y = player.y + 4;
       }
    drawSprites();
}