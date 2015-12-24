var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var backwardButton = document.querySelector("#backward");
var forwardButton = document.querySelector("#forward");
var volumeControl = document.querySelector("#volume");

var seekBar = document.querySelector("#seekBar");

var player = document.querySelector("audio");


playButton.addEventListener("click", playMusic);
pauseButton.addEventListener("click", pauseMusic);
backwardButton.addEventListener("click", backwardMusic);
forwardButton.addEventListener("click", forwardMusic);
volumeControl.addEventListener("change", changeVolume);
seekBar.addEventListener("change", changeCurrentTime);
window.addEventListener("load", initialize);

function initialize(){
  pauseButton.hidden = true;
  volumeControl.value = Math.floor(player.volume * 100);
  seekBar.max = player.duration;
  seekBar.step = 1;
}

function playMusic(){
  pauseButton.hidden = false;
  playButton.hidden = true;
  player.play();
}

function pauseMusic(){
  pauseButton.hidden = true;
  playButton.hidden = false;

  player.pause();
}

function backwardMusic(){
  player.currentTime = Math.max(0, player.currentTime - 10);
}

function forwardMusic(){
  player.currentTime = Math.min(player.duration, player.currentTime + 10);
}

function changeVolume(event){
  console.log(event);
  player.volume = volumeControl.value / 100;
}

function updateSeekBar(){
  seekBar.value = player.currentTime;
}

function changeCurrentTime(){
  player.currentTime = seekBar.value;
}
