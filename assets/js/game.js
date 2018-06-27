window.onload = (function () {

    //variables that will reset per game
    var winCounter = 0;
    var guessCounter = 10;
    var lettersGuessed = 0;

    //Global arrays
    var wordPool = ["Galaxy", "Planet", "Spaceship", "Force", "Lightsaber", "Jedi", "Padawan", "Yoda", "Sith", "Anakin", "Obi Wan", "Grievous", "Clones", "Trooper", "Galactic", "Empire", "Darth", "Vader", "Death Star", "Stormtrooper", "Rebels", "Alliance", "Luke", "Skywalker", "Princess Leia", "Han Solo", "Millennium", "Falcon", "Wookie", "Chewbacca", "Droid", "TIE Fighter", "Destroyer", "Ewok", "Order", "Resistance"];
    
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

    function gameStart() {

        // Randomly chooses a choice from the wordPool array. 
        wordChoice = wordPool[Math.floor(Math.random() * wordPool.length)];
        console.log(wordChoice);

        //Word split up by letters
        answer = wordChoice.split("");

        console.log(answer);

        //Letter counter
        wordSpaces = answer.length;

        //Resets each round's guesses
        guessesNBlanks = [];

        //Resets each round's wrong guesses container
        wrongLetterContainer = [];

        //Replaces letters within the string to underscores
        for (var i = 0; i < answer.length; i++) {
            answer[i] = "_ ";
        }
        console.log(guessesNBlanks);

        //setting the page html upon game start
        document.getElementById("currWord").innerHTML = answer.join(" ");
        document.getElementById("winCounter").innerHTML = winCounter;
        document.getElementById("remGuess").innerHTML = guessCounter;
        document.getElementById("ltrGuess").innerHTML = lettersGuessed;

    }

    // Function to compare letters
    function compareLetters(letter) {

        // Is the letter guessed within the word?
        var letterInGuess = false;

        // Loop to check letter
        for (var j = 0; j < letterInGuess; j++) {

            if (answer[j] === letter) {

                // If letter guessed is in the word = true
                letterInGuess = true;

                console.log("Correct letter!")
            }
        }

        // CHecking word for letter
        if (letterInGuess) {


            for (var k = 0; k < letterInGuess; k++) {

                //If guessed letter is found in word, replace with letter
                if (answer[k] === letter) {

                    guessesNBlanks[k] = letter;
                }
            }

            console.log(guessesNBlanks);
        }

        // If the letter doesn't exist at all...
        else {

            // Move incorrect guess to container
            wrongLetterContainer.push(letter);

            // Subtract from guess counter
            guessCounter--;

        }

    }

    // Function once round has been completed
    function completedRound() {

        // console.log("WinCount: " + winCounter + " | NumGuesses: " + guessCounter);

        // Update the HTML 
        document.getElementById("remGuess").innerHTML = guessCounter;
        document.getElementById("currWord").innerHTML = guessesNBlanks.join(" ");
        document.getElementById("ltrGuess").innerHTML = wrongLetterContainer.join(" ");

        // If the word is guessed correctly, then add a win
        if (answer.toString() === guessesNBlanks.toString()) {

            winCounter++;

            alert("Winner!!");

            // Update the HTML
            document.getElementById("winCounter").innerHTML = winCounter;

            // Start the game over
            startGame();
        }

    }



    // MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
    // ==================================================================

    // Starts the game
    gameStart();

    // Event listener for key presses
    document.onkeyup = function (event) {

        keyGuesses = String.fromCharCode(event.which).toUpperCase();

        compareLetters(keyGuesses);

        completedRound();
    };

});