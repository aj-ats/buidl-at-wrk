let randNum = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton; 
// declare function called checkGuess .
function checkGuess() {
    guessSubmit.addEventListener("click", checkGuess);
    const userGuess = Number(guessField.value);
    // if statement: if whats insise the () is true then run the code in the {} after .  if false the code dosnt run.  
    // this is where an else conditional comes in 
    // if guessCount is equal to 1 then display the string defined below in the <p>
    if(guessCount === 1){
        guesses.textContent = "Previous Guesses:";

    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;


// if userGuess is the same value ad randNUm we need to 1) display that they won    2)not let them guess again 3) give option to reset game w button
    if (userGuess === randNum){
        lastResult.textContent = "GAME OVER; U WON !!";
        lastResult.style.backgroundColor = "#65ff00"; 
        lowOrHi.textContent = "";
        setGameOver();

    } else if (guessCount === 10) { // if user has reached 10 guesses show game over in red 2) dont let guesss again 3)display reset game button
        lastResult.textContent = "0 guesses left GAME OVER";
        lowOrHi.textContent = ""
        setGameOver();
    } else {
        lastResult.textContent = "wrong guess again";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randNum) {
            lowOrHi.textContent = " guess to low"
        } else if (userGuess > randNum) {
            lowOrHi.textContent = "Last guess was too high!";
    }
  }
}

 