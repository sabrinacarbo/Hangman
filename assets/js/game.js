//variables that will reset 
var win = 0
var guessLeft = 10
var guessed = 0

//Word array
var wordPool = ["Galaxy", "Planet", "Spaceship", "Force", "Lightsaber", "Jedi", "Padawan", "Yoda", "Sith", "Anakin", "Obi-Wan", "Grievous", "Clones", "Trooper", "Galactic", "Empire", "Darth", "Vader", "Death Star", "Stormtrooper", "Rebels", "Alliance", "Luke", "Skywalker", "Princess Leia", "Han Solo", "Millennium", "Falcon", "Wookie", "Chewbacca", "Droid", "TIE Fighter", "Destroyer", "Ewok", "Order", "Resistance"];
var letterPool = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


// This function is run whenever the DOM is loaded in the browser 

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("winCounter").innerHTML = win;
    document.getElementById("remGuess").innerHTML = guessLeft;
    document.getElementById("ltrGuess").innerHTML = guessed;
});

// Randomly chooses a choice from the Words array. 

var wordChoice = wordPool[Math.floor(Math.random() * wordPool.length)];

console.log(wordChoice);


//Makes an array to hold the random word generated

var answer = [];

//Replaces letters within the string to underscores

for (var i = 0; i < wordChoice.length; i++) {
    answer[i] = "_ ";
}

//Displays the underscores in the browser through the HTML id=currWord

document.getElementById("currWord").innerHTML = answer;


//Counts the number of spaces left within the random word generated
var spacesLeft = wordChoice.length;

console.log(spacesLeft)
console.log(answer);


//Counts the number of spaces within the random word **HOW TO EXCLUDE SPACES FOR TWO WORDS
var answerSpaces = [];

for (var j = 0; j < wordChoice.length; j++) {
    answerSpaces[j] = wordChoice.charAt(j);

}
// console.log(answerSpaces);


//Activates an event listener for when a key is pressed
document.onkeydown = function (event) {

    //Determines a key was pressed and the value
    var keyPress = event.key;

    console.log(keyPress);


    //if the letter pressed is a-z
    if ((keyPress === "a") || (keyPress === "b") || (keyPress === "c") || (keyPress === "d") || (keyPress === "e") || (keyPress === "f") || (keyPress === "g") || (keyPress === "h") || (keyPress === "i") || (keyPress === "j") || (keyPress === "k") || (keyPress === "l") || (keyPress === "m") || (keyPress === "n") || (keyPress === "o") || (keyPress === "p") || (keyPress === "q") || (keyPress === "r") || (keyPress === "s") || (keyPress === "t") || (keyPress === "u") || (keyPress === "v") || (keyPress === "w") || (keyPress === "x") || (keyPress === "y") || (keyPress === "z")) {

        var guessedLtrs = keyPress;  //****** NEED TO FIX

        //NEED FOR LOOP TO CHECK WORK****

        document.getElementById("currWord").innerHTML = keyPress;
    } else {
        document.getElementById("ltrGuess").appendChild = keyPress;
    }
    // 

    //Create a for loop to check keys against answer 

    // for (var k = 0; k < wordChoice.length; k++) {

    //     //Create variable to store letters pressed 
    //     var guessedLtrs = function (){


    //     }

    //     //Store letter in id="currWord" ***???
    //     document.getElementById("ltrGuessed").appendChild(guessedLtrs);

    //     //Set guessedLetters to capture letters pressed from letterPool***????
    //     guessedLtrs.text = (letterPool[i]);

    //     console.log(guessedLtrs)

    // }


    // });

    //if the letter pressed is NOT in the word, the letter is added to the Guessed List and Guesses Remaining goes down


}