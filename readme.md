const userClickedPattern = [];

nextSequence();

  $(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
  });



function playSound(){
  $(".btn").click(function(){
    var audio = new Audio('sounds/' + this.id + '.mp3');
    audio.play();
  });
}

playSound();


function nextSequence() {





  var audio = new Audio('sounds/' + randomChosenColour + '.mp3');
  audio.play();
}









// document.addEventListener("keypress",function(event){
//   if(event.key === "a" || "A"){
//     $("h1").text("Level 1");
//     nextSequence();
//   }
//   });
