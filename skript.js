//FOR MODAL
// Game Dev
var gameDevModal = document.getElementById("gameDevModal");
var openGameDevModal = document.getElementById("openGameDevModal");
var closeGameDev = gameDevModal.getElementsByClassName("close")[0];

openGameDevModal.onclick = function() {
  gameDevModal.style.display = "block";
}

closeGameDev.onclick = function() {
  gameDevModal.style.display = "none";
}

// Video Editing
var videoEditingModal = document.getElementById("videoEditingModal");
var openVideoEditingModal = document.getElementById("openVideoEditingModal");
var closeVideoEditing = videoEditingModal.getElementsByClassName("close")[0];

openVideoEditingModal.onclick = function() {
  videoEditingModal.style.display = "block";
}

closeVideoEditing.onclick = function() {
  videoEditingModal.style.display = "none";
}

// Programming
var programmingModal = document.getElementById("programmingModal");
var openProgrammingModal = document.getElementById("openProgrammingModal");
var closeProgramming = programmingModal.getElementsByClassName("close")[0];

openProgrammingModal.onclick = function() {
  programmingModal.style.display = "block";
}

closeProgramming.onclick = function() {
  programmingModal.style.display = "none";
}

// Close if clicked outside
window.onclick = function(event) {
  if (event.target == gameDevModal) {
    gameDevModal.style.display = "none";
  }
  if (event.target == videoEditingModal) {
    videoEditingModal.style.display = "none";
  }
  if (event.target == programmingModal) {
    programmingModal.style.display = "none";
  }
}

