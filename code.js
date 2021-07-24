var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal1 = createSprite(200,18,100,20);
goal1.shapeColor = ("yellow");
var goal2 = createSprite(200,382,100,20);
goal2.shapeColor = ("yellow");
var ball = createSprite(200,200,10,10);
ball.shapeColor = "white";
var playerPaddle = createSprite(200,350,50,10);
playerPaddle.shapeColor = "black";
var computerPaddle = createSprite(200,50,50,10);
computerPaddle.shapeColor = "black";
var playerScore = 0;
var computerScore = 0;
var gamestate = 'serve';

function draw() {
  background("green");
  for (var i = 0; i < 410; i = i + 20) {
    var middle_line = createSprite(i,200, 10, 5 );
    }
  if (gamestate == 'serve') {
    fill('Brown');
    textSize(24);
    text('Welcome Press space to strike', 50, 180);
     if (keyDown("Space")) {
    ball.velocityX = 7;
    ball.velocityY = 7;
    computerPaddle.velocityX = 20;
    gamestate = 'play';
  }
  }
  if (gamestate == 'play') {
    playerPaddle.x = World.mouseX ;
  }
  
  createEdgeSprites();
  ball.bounceOff(edges);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  playerPaddle.bounceOff(edges);
  computerPaddle.bounceOff(edges);
  
  fill('Maroon');
  textSize(24);
  text(playerScore, 20, 225);
  fill('Maroon');
  textSize(24);
  text(computerScore, 20, 185);
  if (ball.isTouching(goal1)) {
    playerScore = playerScore + 1;
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    computerPaddle.velocityX = 0;
 }
  if (ball.isTouching(goal2)) {
    computerScore = computerScore + 1;
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    computerPaddle.velocityX = 0;
 }
 if (playerScore == 5) {
  fill('Maroon');
  textSize(24);
  text('Game Over - You win', 100, 180);
  ball.velocityX = 0;
  ball.velocityY = 0;
  computerPaddle.velocityX = 0;
 }
 if (computerScore == 5) {
  fill('Maroon');
  textSize(24);
  text('Game Over - You lose', 100, 180);
  ball.velocityX = 0;
  ball.velocityY = 0;
  computerPaddle.velocityX = 0;
 }
  drawSprites();
  }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
