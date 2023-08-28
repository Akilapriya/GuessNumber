var guessNumber = document.querySelector(".number");
var guessInput = document.querySelector(".guess");
var scoreVal = document.querySelector(".score");
var messageVal = document.querySelector(".message");
var highscoreVal = document.querySelector(".highscore");

var randomNumber;
var score = 0;
// var highscore = 0;

 var hs=localStorage.getItem("highScore");

// var hs = sessionStorage.getItem("highScore");
var highscore = hs ? hs : 0;
highscoreVal.textContent = highscore;

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  guessNumber.textContent = randomNumber;
}
getRandomNumber();

function checkNumber() {
  var guessInp = Number(guessInput.value);
  if (guessInp == randomNumber) {
    alert("Correct guess");
    getRandomNumber();
    guessInput.value = "";
    document.body.style.backgroundColor = "green";
    score += 2;
    messageVal.textContent = "Correct Guess !!";
    if (score > highscore) {
      highscore = score;
      highscoreVal.textContent = highscore;
      localStorage.setItem("highScore", highscore );
    //   sessionStorage.setItem("highScore", highscore);
    // }
  } else {
    alert("Wrong guess");
    document.body.style.backgroundColor = "red";
    if (score > 0) {
      score -= 1;
    }
    if (guessInp > randomNumber) {
      messageVal.textContent = "Wrong Guess.. Enter the smaller number";
    } else {
      messageVal.textContent = "Wrong Guess.. Enter the greater number";
    }
  }
  scoreVal.textContent = score;
}
}

function resetValues() {
  getRandomNumber();
  scoreVal.textContent = 0;
  guessInput.value = "";
  messageVal.textContent = "Start guessing...";
  document.body.style.backgroundColor = "";
}

function clearValues() {
  // localStorage.removeItem("highScore");
  localStorage.clear();
}
