//pre-defined word shows up in window (array)

//User presses key (event - onkeyup/event.key)

//Compare key selected to word/letters (ifElse)


//variables that will reset 
var win = 0
var guessLeft = 10
var guessed = 0

//*** NEED TO ADJUST
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("#winCounter").innerHTML(win);
//  });

//  document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("#remGuess").innerHTML(guessLeft);
//  });

//  document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("#ltrGuess").innerHTML(guessed);
//  });

//Word array
var words = ["Galaxy", "Planet", "Spaceship", "Force", "Lightsaber", "Jedi", "Padawan", "Yoda", "Sith", "Anakin", "Obi-Wan", "Grievous", "Clones", "Trooper", "Galactic", "Empire", "Darth", "Vader", "Death Star", "Stormtrooper", "Rebels", "Alliance", "Luke", "Skywalker", "Princess Leia", "Han Solo", "Millennium", "Falcon", "Wookie", "Chewbacca", "Droid", "TIE Fighter", "Destroyer", "Ewok", "Order", "Resistance"];



// This function is run whenever the user presses a key to start.

// document.onKeyup = function() {
// document.onkeyup = function () {

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("#winCounter").innerHTML(win);
        document.getElementById("#remGuess").innerHTML(guessLeft);
        document.getElementById("#ltrGuess").innerHTML(guessed);
     });

    // // Randomly chooses a choice from the Words array. 

    var wordChoice = words[Math.floor(Math.random() * words.length)];
    
    console.log(wordChoice);


    //Makes an array from the random word generated
    var answer = [];

    for (var i = 0; i < wordChoice.length; i++){
        answer[i]= "_";
    }
        

    //Counts the number of spaces left within the random word generated
    var spacesLeft = wordChoice.length;

    console.log(spacesLeft)
    console.log(answer);


    //Counts the number of spaces within the random word **HOW TO EXCLUDE SPACES
    var answerSpaces = [];

    for (var j = 0; j < wordChoice.length; j++){
        answerSpaces [j]= wordChoice.charAt(j);
        
    }
    console.log(answerSpaces);


    

    //tell it where to populate word


    //make word underline/placeholders



    // //if the letter pressed is on the keyboard
    // if ((keyPress === "a") || (keyPress === "b") || (keyPress === "c") || (keyPress === "d") || (keyPress === "e") || (keyPress === "f") || (keyPress === "g") || (keyPress === "h") || (keyPress === "i") || (keyPress === "j") || (keyPress === "k") || (keyPress === "l") || (keyPress === "m") || (keyPress === "n") || (keyPress === "o") || (keyPress === "p") || (keyPress === "q") || (keyPress === "r") || (keyPress === "s") || (keyPress === "t") || (keyPress === "u") || (keyPress === "v") || (keyPress === "w") || (keyPress === "x") || (keyPress === "y") || (keyPress === "z")) {

    // console.log("Random word: " + wordChoice);
    // }
    // }

    // This function is run whenever the user presses a key.
    // document.onKeyup = function(event) {

    // // Determines which key was pressed.
    //     var keyPress = event.key;

    // //if the letter pressed is in the word, the letter is added to the Current Word
    // if ((keyPress === "a") || (keyPress === "b") || (keyPress === "c") || (keyPress === "d") || (keyPress === "e") || (keyPress === "f") || (keyPress === "g") || (keyPress === "h") || (keyPress === "i") || (keyPress === "j") || (keyPress === "k") || (keyPress === "l") || (keyPress === "m") || (keyPress === "n") || (keyPress === "o") || (keyPress === "p") || (keyPress === "q") || (keyPress === "r") || (keyPress === "s") || (keyPress === "t") || (keyPress === "u") || (keyPress === "v") || (keyPress === "w") || (keyPress === "x") || (keyPress === "y") || (keyPress === "z")) {


    // }

    //if the letter pressed is NOT in the word, the letter is added to the Guessed List and Guesses Remaining goes down

// //**** How to get html linked??????
//     var html =

//         "<div>" +
//         "<div>" +

//             "<p>Press any key to get started!</p>" +

//             "<p>Wins</p>" +

//             // Counter for wins
//             "<p>" + wins + "</p>" +

//             "<p>Current Word</p>" +

//             // Where word populates
//             "<p>" + wordChoice + "</p>" +

//             "<p>Number of guesses remaining</p>" +

//             // Number of guesses left
//             "<p>" + guessLeft + "</p>" +

//             "<p>Letters already guessed</p>" +

//             // List of letters guessed ****Still need
//             "<p>{Guessed letters here}</p>" +

//         "</div>"
//         "</div>"

// **Unsure if I need this or not?

    // document.body.innerHTML = document.body.innerHTML.replace("win", "guessLeft", "guessed");
    // console.log(html) 
   
// }

// }