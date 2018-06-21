//pre-defined word shows up in window (array)

//User presses key (event - onkeyup/event.key)

//Compare key selected to word/letters (ifElse)

//

//Word pool
 var words = ["Galaxy", "Planet", "Spaceship", "Force", "Lightsaber", "Jedi", "Padawan", "Yoda", "Sith", "Anakin", "Obi-Wan", "Grievous", "Clones", "Trooper", "Galactic", "Empire", "Darth", "Vader", "Death Star", "Stormtrooper", "Rebels", "Alliance", "Luke", "Skywalker", "Princess Leia", "Han Solo", "Millennium", "Falcon", "Wookie", "Chewbacca", "Droid", "TIE Fighter", "Destroyer", "Ewok", "Order", "Resistance"
];

//variables that will reset 
var wins = 0
var guessLeft = 0
var guessed = 0

//user presses a key to start

document.onKeyup = function(event) {

    var keyPress = event.key;

//need to randomly choose a word from our array

var wordChoice = words[Math.floor(Math.random() * words.length)];

//if the letter pressed is in the word, the letter is added to the Current Word
if ((keyPress === "a") || (keyPress === "b") || (keyPress === "c") || (keyPress === "d") || (keyPress === "e") || (keyPress === "f") || (keyPress === "g") || (keyPress === "h") || (keyPress === "i") || (keyPress === "j") || (keyPress === "k") || (keyPress === "l") || (keyPress === "m") || (keyPress === "n") || (keyPress === "o") || (keyPress === "p") || (keyPress === "q") || (keyPress === "r") || (keyPress === "s") || (keyPress === "t") || (keyPress === "u") || (keyPress === "v") || (keyPress === "w") || (keyPress === "x") || (keyPress === "y") || (keyPress === "z")) {


}

//if the letter pressed is NOT in the word, the letter is added to the Guessed List and Guesses Remaining goes down




   

}