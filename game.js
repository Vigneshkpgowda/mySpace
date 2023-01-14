var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

var gamePattern = [];

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var n = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[n];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.indexOf(userChosenColour));

});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(document).keypress(function() {
  nextSequence();
  if (!started) {
    $("#level-title").text("Level " + level);
    started = true;
  }
});


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  } else {
    playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      startOver();
  }
}

function startOver(){
  $("h1").text("Game Over, Press Any Key to Restart");
  level = 0;
  gamePattern = [];
  started = false;
}
