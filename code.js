var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4296b826-0962-4de4-96cd-95ccad1b2150","d65c4be7-be7e-448e-8330-6b04dd9fff0c","3b305e4b-a4a2-4f1a-be12-e2800db17850","33d90666-5383-4e52-bdb8-411264ed97b4"],"propsByKey":{"4296b826-0962-4de4-96cd-95ccad1b2150":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png","frameSize":{"x":264,"y":370},"frameCount":1,"looping":true,"frameDelay":2,"version":"DK8.stYcZlziAImCg36Fa7yHu1S4LUhW","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":370},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png"},"d65c4be7-be7e-448e-8330-6b04dd9fff0c":{"name":"car1","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"AHp2jvI7.fKXCoAVKlA7bKeVEN6YOBcM","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/d65c4be7-be7e-448e-8330-6b04dd9fff0c.png"},"3b305e4b-a4a2-4f1a-be12-e2800db17850":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"33d90666-5383-4e52-bdb8-411264ed97b4":{"name":"store","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"oLbe43pjsXqEkRv8seSYv7aZLyZf01ne","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/33d90666-5383-4e52-bdb8-411264ed97b4.png"}}};
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

var life = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var glasses = createSprite(370,190,10,10);

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//add the velocity to make the car move.
car1.velocityY= 4;
car2.velocityY= -4;
car3.velocityY= 4;
car4.velocityY= -4;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);

// Add the condition to make the sam move left and right
if (keyDown(RIGHT_ARROW)) {
sam.x = sam.x +5;
}
if (keyDown(LEFT_ARROW)) {
sam.x = sam.x -5;
}
// Add the condition to reduce the life of sam if it touches the car.
if (sam.isTouching(car1)||sam.isTouching(car2)||
    sam.isTouching(car3)||sam.isTouching(car4)){
    life=life-1;
 }
 drawSprites();

}
sam.scale = 0.1;
sam.setAnimation("sam");
car1.scale = 0.25;
car1.setAnimation("car1");
car2.scale = 0.25;
car2.setAnimation("car1");
car3.scale = 0.25;
car3.setAnimation("car_yellow_1");
car4.scale = 0.25;
car4.setAnimation("car_yellow_1");
glasses.scale = 0.75;
glasses.setAnimation("store");

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
