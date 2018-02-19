document.addEventListener("keypress", gameStart);
// This is the entire game function for the game to run
function gameStart() {

    // Word bank
    var words = ["aragorn", "arwen", "boromir", "elrond", "frodo", "gandalf", "gimli", "gollum", "legolas", "mordor", "rivendell", "samwise", "saruman", "shire", "bombadill"];

    // Random word generator
    var randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);

    // Create the underscore for each letter of the random word
    var answerArray = [];
    for (var i = 0; i < randWord.length; i++) {
        answerArray[i] = "_";
    }

    // Make variable to track letters to be guessed
    var lettersLeft = randWord.length;
    
    //actual game
    while (lettersLeft > 0) {
        var emptyLetter = document.getElementById("letterspot");
        emptyLetter.innerHTML = answerArray.join (" "); 
        var guess = prompt("Guess a letter, or click cancel to stop playing");
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert ("Please enter a single letter!");
        } else {
            for (var j = 0; j < randWord.length; j++) {
                if (randWord[j] === guess) {
                    answerArray[j] = guess;
                    lettersLeft--;
                }
            }
        }
    }

    emptyLetter.innerHTML = answerArray.join(" ");
    alert("good job, the answer was " + randWord + ".");

    var wins = 0;
    
    document.getElementById("wins").innerHTML = wins;
    
    var guessesLeft = 10;

    document.getElementById("guesses").innerHTML = guessesLeft;

    var emptyLetter = document.getElementById("letterspot");
    emptyLetter.innerHTML = answerArray;
    emptyLetter.innerHTML = answerArray.join (" "); 
    

        removeHandler(); 
}

function removeHandler() {
    document.removeEventListener("keypress", gameStart);
}