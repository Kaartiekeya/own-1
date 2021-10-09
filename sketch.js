function preload(){
backgroundImage=loadImage("morningbackgroundImage");
}


function setup(){
    createCanvas(800,800);
}

function draw(){
    background(backgroundImage);
drawSprites();
}