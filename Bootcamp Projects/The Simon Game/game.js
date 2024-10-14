const colors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let userPattern = [];
let level = 0;

const startButton = document.getElementById("start-button");
const circles = document.querySelectorAll(".circle");

function playSound(color) {
  const audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
}

function flash(color) {
  const element = document.getElementById(color);
  element.style.opacity = "0.5";
  playSound(color);
  setTimeout(() => {
    element.style.opacity = "1";
  }, 300);
}

function playSequence() {
  let delay = 0;
  gamePattern.forEach(color => {
    setTimeout(() => {
      flash(color);
    }, delay);
    delay += 600;
  });
}

function nextSequence() {
  userPattern = [];
  level++;
  startButton.textContent = `Level ${level}`;

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  gamePattern.push(randomColor);

  setTimeout(playSequence, 500);
}

function checkAnswer(currentLevel) {
  if (userPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    playSound("wrong");
    startButton.textContent = "Game Over! Start Again?";
    level = 0;
    gamePattern = [];
  }
}

startButton.addEventListener("click", () => {
  if (level === 0) {
    nextSequence();
  }
});

circles.forEach(circle => {
  circle.addEventListener("click", () => {
    if (level !== 0) {
      const userColor = circle.id;
      userPattern.push(userColor);

      flash(userColor);
      checkAnswer(userPattern.length - 1);
    }
  });
});