window.onload = (function(){


//variables that will reset 
var win = 0;
var guessLeft = 10;
var guessed = 0;

//Makes an array to hold the random word generated

var answer = [];

//Word array
var wordPool = ["Galaxy", "Planet", "Spaceship", "Force", "Lightsaber", "Jedi", "Padawan", "Yoda", "Sith", "Anakin", "Obi-Wan", "Grievous", "Clones", "Trooper", "Galactic", "Empire", "Darth", "Vader", "Death Star", "Stormtrooper", "Rebels", "Alliance", "Luke", "Skywalker", "Princess Leia", "Han Solo", "Millennium", "Falcon", "Wookie", "Chewbacca", "Droid", "TIE Fighter", "Destroyer", "Ewok", "Order", "Resistance"];
var letterPool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];

// Randomly chooses a choice from the Words array. 
var wordChoice;

//=============================== FUNCTIONS ================================

// This function is run whenever the DOM is loaded in the browser 

function gameStart(){

     // Randomly chooses a choice from the wordPool array. 
    wordChoice = wordPool[Math.floor(Math.random() * wordPool.length)];
    console.log(wordChoice);

    //Replaces letters within the string to underscores
    for (var i = 0; i < wordChoice.length; i++) {
    answer[i] = "_ ";
    }
    console.log(answer);

    //setting the page html
    document.getElementById("currWord").innerHTML = answer;
    document.getElementById("winCounter").innerHTML = win;
    document.getElementById("remGuess").innerHTML = guessLeft;
    document.getElementById("ltrGuess").innerHTML = guessed;
 
}

gameStart();    




//Counts the number of spaces left within the random word generated
// var spacesLeft = wordChoice.length;

// console.log(spacesLeft)



//Counts the number of spaces within the random word **HOW TO EXCLUDE SPACES FOR TWO WORDS
// var answerSpaces = [];

// for (var j = 0; j < wordChoice.length; j++) {
//     answerSpaces[j] = wordChoice.charAt(j);

// }
// console.log(answerSpaces);


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
        document.getElementById("currWord").replace = wordChoice.charAt(j);
    }
   
        // .innerHTML = keyPress

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



});