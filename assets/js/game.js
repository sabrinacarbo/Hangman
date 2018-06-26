window.onload = (function(){

//variables that will reset per game
var winCounter = 0;
var guessCounter = 10;
var lettersGuessed = 0;

//Global arrays
var wordPool = ["Galaxy", "Planet", "Spaceship", "Force", "Lightsaber", "Jedi", "Padawan", "Yoda", "Sith", "Anakin", "Obi-Wan", "Grievous", "Clones", "Trooper", "Galactic", "Empire", "Darth", "Vader", "Death Star", "Stormtrooper", "Rebels", "Alliance", "Luke", "Skywalker", "Princess Leia", "Han Solo", "Millennium", "Falcon", "Wookie", "Chewbacca", "Droid", "TIE Fighter", "Destroyer", "Ewok", "Order", "Resistance"];
var letterPool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];

// Randomly chooses a choice from the wordPool array. 
var wordChoice;

//Array to hold the random word generated
var answer = [];

// //Holds letters that have been guessed **** MAY NOT NEED
// var lettersGuessedArray = [];

//Number of letters in current word being guessed
var wordSpaces = 0;

//Guesses and blank spaces
var guessesNBlanks = [];

//Container for wrong keys guessed
var wrongLetterContainer = [];

//Variable for individual letters guessed by users
var keyGuesses = "";


//=============================== FUNCTIONS ================================

// This function is run whenever the DOM is loaded in the browser 

function gameStart(){

     // Randomly chooses a choice from the wordPool array. 
    wordChoice = wordPool[Math.floor(Math.random() * wordPool.length)];
    console.log(wordChoice);

    //Word split up by letters
    answer = wordChoice.split("");

    console.log(wordChoice);

    //Letter counter
    wordSpaces = answer.length;

    //Resets each round's guesses
    guessesNBlanks = [];

    //Resets each round's wrong guesses container
    wrongLetterContainer = [];

    //Replaces letters within the string to underscores
    for (var i = 0; i < answer.length; i++) {
    guessesNBlanks.push = "_ ";
    }
    console.log(guessesNBlanks);

    //setting the page html upon game start
    document.getElementById("currWord").innerHTML = guessesNBlanks.join("");
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("remGuess").innerHTML = guessCounter;
    document.getElementById("ltrGuess").innerHTML = lettersGuessed.join("");
 
}
//Calls the gameStart function
gameStart();    


//Activates an event listener for when a key is pressed
document.onkeydown = function (event) {

    //Determines a key was pressed and the value
    var keyPress = event.key;

    console.log(keyPress);

    //if the letter pressed is a-z
   if (letterPool.indexOf(keyPress) > -1){

        console.log("Is a letter");

        var guessedLtrs = keyPress;  //****** NEED TO FIX

        //NEED FOR LOOP TO CHECK WORK****
    for (var l; l < wordChoice.length; l++){

        guessedLtrs[j] = wordChoice.charAt(j);
        document.getElementById("currWord").replace = wordChoice.indexOf(j);
    }
   
        // .innerHTML = keyPress

    } else {
        document.getElementById("ltrGuess").appendChild = keyPress;
    }

}

//HOW TO LINK TO AN AUDIO FILE *******
    //   // Use the following link inside the Audio function below:
    //   // https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
    //   var audio = new Audio("LINK AN AUDIO FILE HERE");

});

//Somehow use to split words and check for letters
//var name = array[i].split();