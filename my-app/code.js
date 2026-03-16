

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c51b5136-6a43-4573-bc98-94251ed7e8cb","dc829c1d-baf4-4790-8f7a-12c1ae561044"],"propsByKey":{"c51b5136-6a43-4573-bc98-94251ed7e8cb":{"name":"rainbow","sourceUrl":"assets/api/v1/animation-library/gamelab/oxL0ak8K0_DZMb1sQi0VfaI8XrHTF6Jd/category_backgrounds/background_rainbow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"oxL0ak8K0_DZMb1sQi0VfaI8XrHTF6Jd","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oxL0ak8K0_DZMb1sQi0VfaI8XrHTF6Jd/category_backgrounds/background_rainbow.png"},"dc829c1d-baf4-4790-8f7a-12c1ae561044":{"name":"wing_bot","sourceUrl":"assets/api/v1/animation-library/gamelab/quoa4.I3I2BmotFDbwakNBk9f39n50S_/category_characters/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"quoa4.I3I2BmotFDbwakNBk9f39n50S_","loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/quoa4.I3I2BmotFDbwakNBk9f39n50S_/category_characters/wing_bot.png"}}};
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

var backdrop = createSprite(200,200);
backdrop.setAnimation("rainbow");
var flyer = createSprite(200,200);
flyer.setAnimation("wing_bot");

function draw() {
if (keyDown("up")) {
  flyer.y = flyer.y - 5;
}
if (keyDown("down")) {
  flyer.y = flyer.y + 5;
}
if (keyDown("left")) {
  flyer.x = flyer.x - 5;
}
if (keyDown("right")) {
  flyer.x = flyer.x + 5;
}

  //1) Add code to move the sprite left when the left arrow is pressed

  //2) Add code to move the sprite right when the right arrow is pressed

  //3) Add code to move the sprite up when the up arrow is pressed

  //4) Add code to move the sprite down when the down arrow is pressed

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
