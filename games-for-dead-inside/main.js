var zakatOriginal = new Audio();
zakatOriginal.src = "/Snake/audio/zakat-orig.mp3";

function catPlay() {
  zakatOriginal.play();
}
function catOff() {
  zakatOriginal.pause();
}

var letMeZXC = new Audio();
letMeZXC.src = "/audio/let-me.mp3";

function letMePlay() {
  letMeZXC.play();
}
function letMeOff() {
  letMeZXC.pause();
}

var minusZXC = new Audio();
minusZXC.src = "/Snake/audio/bg-music.mp3";

function minusPlay() {
  minusZXC.play();
}
function minusOff() {
  minusZXC.pause();
}

var fckMeZXC = new Audio();
fckMeZXC.src = "/audio/fck-me.mp3";

function fckMePlay() {
  fckMeZXC.play();
}
function fckMeOff() {
  fckMeZXC.pause();
}

tippy(".myButtonTooltip1", {
  theme: "light-theme",
  content: document.querySelector(".tippy-content-1"),
  interactive: true,
});
tippy(".myButtonTooltip2", {
  theme: "light-theme",
  content: document.querySelector(".tippy-content-2"),
  interactive: true,
});

