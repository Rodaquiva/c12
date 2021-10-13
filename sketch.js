var pisoImage;
var trex, trex_running;
var piso;
var pisoInvisible;
var algodon;
var algodonImage;

function preload() {
  //3 cargar archivos de imágenes o sonido
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

  //sprite = loadImage("imagen.png");
  pisoImage = loadImage("ground2.png");

  algodonImage = loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200)

  //1 crear sprite del t-rex.
  trex = createSprite(50, 160, 20, 50);
  //2 agregar la imagen precargada

  trex.addAnimation("running", trex_running); https://www.youtube.com/results?search_query=como+dibujar+agua+en+digital%C3%A7
  trex.scale = 0.5;
  trex.x = 60;
  edge = createEdgeSprites();
  piso = createSprite(200, 180, 400, 20);
  piso.addImage(pisoImage);
  //sprite.addImage(variable de la imagen);
  pisoInvisible = createSprite(200, 190, 400, 10);
  pisoInvisible.visible = false;

}

function draw() {
  background("white");
  // console.log(trex.y);
  // console.info("inicio de la funcion draw" + trex.y);
  // console.error("error");
  // console.warn("advertencia");


  if (keyDown("space") && trex.y >= 161) {
    trex.velocityY = -10;

  }
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(pisoInvisible);
  piso.velocityX = -2;
  if (piso.x < 0) {
    piso.x = piso.width / 2;
  }
  spawnCloud();



  //trex.collide(edge[2]);
  //0 derecha
  //1 izquierda
  //2 arriba
  //3 abajo
  drawSprites();
}

function spawnCloud() {
  if (frameCount % 60 === 0) {
    algodon = createSprite(600, 100, 30, 10);
    algodon.velocityX = -5;
    algodon.addImage(algodonImage);
    algodon.scale = 0.6;
    algodon.y = Math.round(random(10, 60));
    console.log(algodon.depth);
    console.log(trex.depth);
    algodon.depth=trex.depth;
    trex.depth = trex.depth+1;
  }




}
