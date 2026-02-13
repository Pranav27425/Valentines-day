const nobtn = document.getElementById("nobtn");
const yesbtn = document.getElementById("yesbtn");
const message = document.getElementById("message");
const modal = document.getElementById("modal");
const closebtn = document.getElementById("closebtn");
const safeArea = document.getElementById("safeArea");
const music = document.getElementById("bg-music");

function startMusic() {
  music.play();
  document.removeEventListener("mousemove" , startMusic);
  document.removeEventListener("touchstart" , startMusic);
}

document.addEventListener("mousemove" , startMusic);
document.addEventListener("touchstart" , startMusic);
const messages = [
  "Na na na😏" , 
  "😒😒",
  "Click on yes bbg💋", 
  "Aap mana kyu krna chahti ho😭😭",
  "Huhh! Ni jane dunga aaj😒",
  "No escaping bbg😋",
  "Ab maan bhi jaao na🥺",
  "Ab rooth jaunga mai🥺😭😠",
  "Kitni ziddi ho aap😔",
  "But mai bhi bhut ziddi hu yk na😚",
  "To fir se koshish krunga aapko manane ki😌🩷"
];

let currentIndex = 0;

function moveButton(){

  nobtn.style.position = "absolute";
  const maxX = window.innerWidth - nobtn.offsetWidth;
  const maxY = window.innerHeight - nobtn.offsetHeight;

  const safeRect = safeArea.getBoundingClientRect();

  let randomX , randomY;
  let isInsideSafeArea = true;

  while(isInsideSafeArea){
    randomX = Math.floor(Math.random() * maxX);
    randomY = Math.floor(Math.random() * maxY);

    const btnRect = {
      left:randomX, 
      right: randomX+nobtn.offsetWidth,
      top:randomY,
      bottom:randomY+nobtn.offsetHeight
    };

    isInsideSafeArea = 
      btnRect.right > safeRect.left &&
      btnRect.left < safeRect.right &&
      btnRect.bottom > safeRect.top &&
      btnRect.top < safeRect.bottom;
  }

  nobtn.style.left = randomX + "px";
  nobtn.style.top = randomY + "px";

  message.textContent = messages[currentIndex];
  currentIndex++;

  if(currentIndex>=messages.length){
    currentIndex = 0;
  }
}

nobtn.addEventListener("click" , moveButton);
nobtn.addEventListener("touchmove" , moveButton);

yesbtn.addEventListener("click" , () => {
  modal.classList.add("active");
  nobtn.style.pointerEvents = "none";
});

closebtn.addEventListener("click" , () => {
  modal.classList.remove("active");
  nobtn.style.pointerEvents = "auto";
});