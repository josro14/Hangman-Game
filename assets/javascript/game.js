document.addEventListener("keypress", gameStart);
// This is the entire game function for the game to run
function gameStart() {

    // Word bank
    var words = ["aragorn", "arwen", "boromir", "elrond", "frodo", "gandalf", "gimli", "gollum", "legolas", "mordor", "rivendell", "samwise", "saruman", "shire", "bombadill"];

    // Random word generator
    var rand = words[Math.floor(Math.random() * words.length)];

    console.log(rand);
    var wins = 0;
    var guessesLeft = 10;




    function addLetter(event) {

    }

    usedLetter.addEventListener("keypress", addLetter);

    function updateGuesses() {
        document.getElementById("#guesses").innerHTML = guessesLeft;
    }
    updateGuesses();

    document.getElementById("wins").innerHTML = wins;

    document.getElementById("used-letter").innerHTML =
        document.getElementById("letterspot").innerHTML =
        removeHandler();
}

function removeHandler() {
    document.removeEventListener("keypress", gameStart);
}