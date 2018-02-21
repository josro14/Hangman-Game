var guessesLeft = 10;
var wins = 0;
var splitWord,randWord; 
var correctGuess;
var attemptedWrong, guessesLeft, wins;
// Word bank
var words = ["aragorn", "arwen", "boromir", "elrond", "frodo", "gandalf", "gimli", "gollum", "legolas", "mordor", "rivendell", "samwise", "saruman", "shire", "bombadill"];
document.addEventListener("keypress", gameStart);

function hideTheWord() {
    for (var i = 0; i < splitWord.length; i++) {
        correctGuess [i] = "_";
    }
    document.getElementById("bestCoder").innerHTML = correctGuess.join(" ");
}
function generateRandomWord() {
    randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);
    splitWord = randWord.split("");
}

function guessLetter(letter) {
    var correctLetter = false;
    for (var i = 0; i < splitWord.length; i++) {
        if (splitWord [i] === letter) {
            correctGuess [i] = letter;
            correctLetter = true;
            document.getElementById("bestCoder").innerHTML = "";
            document.getElementById("bestCoder").innerHTML = correctGuess.join(" ");
            }
        } 
        if (!correctLetter && !attemptedWrong[letter]) {
            attemptedWrong[letter] = true;
            console.log(attemptedWrong);
            guessesLeft--;
            updateGuesses();
            document.getElementById("used-letters").innerHTML = Object.keys(attemptedWrong).join (" ");
        }
        if (correctGuess.join("") === randWord) {
            wins++;
            playGame();
        }
}
//actual game
function setupKeyLogging() {
    document.onkeyup = function(event) {
        guessLetter(event.key.toLowerCase());
    }
}

function updateGuesses() {
    document.getElementById("guesses").innerHTML = guessesLeft;
    if (guessesLeft === 0) {
        alert("GAME OVER!!! You will never know the answer...");
        gameStart();
    }
}

function resetCounters() {
    splitWord = [];
    correctGuess = [];
    attemptedWrong = {};
    guessesLeft = 10;
    wins = 0;
}

/*function showPicture() {
    if 
} */

function playGame() {
    resetCounters();
    generateRandomWord();
    hideTheWord(); 
    document.getElementById("guesses").innerHTML = guessesLeft;
    var lettersLeft = randWord.length;
    console.log(randWord);
    setupKeyLogging();
    document.getElementById("wins").innerHTML = wins;
    removeHandler(); 
}
// This is the entire game function for the game to run
function gameStart() {
    resetCounters();
    generateRandomWord();
    hideTheWord(); 
    document.getElementById("guesses").innerHTML = guessesLeft;
    // Make variable to track letters to be guessed
    var lettersLeft = randWord.length;
    console.log(randWord);

    setupKeyLogging();
    
    document.getElementById("wins").innerHTML = wins;
    
  


        removeHandler(); 
}

function removeHandler() {
    document.removeEventListener("keypress", gameStart);
}
