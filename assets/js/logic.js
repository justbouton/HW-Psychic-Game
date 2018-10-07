// VARIBLES //
    var charactersArry = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var userChoice = []; // Blank array created
    var winCount = "";  // Start with blank placeholder
    var looseCount = "";  // Start with blank placeholder
    var guessCount = "";  // Start with blank placeholder
    var computerChoice = ""; // charactersArry[Math.floor(Math.random() * charactersArry.length)];



// GAME INITALIZES RESETS COUNTS

initalizeGame()


// CREATE AS FUNCTIONS?
    // var userChoice_Display = document.querySelector("#userChoice_Display").innerHTML = userChoice;
    // var winCount_Display = document.querySelector("#winCount_Display").innerHTML = winCount;
    // var looseCount_Display = document.querySelector("#looseCount_Display").innerHTML = looseCount;
    // var guessCount_Display = document.querySelector("#guessCount_Display").innerHTML = guessCount;


// FUNCTIONS //
// * // Eventually use this.display?

// * // CREATE FUNCTIONS FOR VARS ABOVE?
//  document.getElementById("userChoice_Display").innerHTML = userChoice;
    //accesses the document object with "querySelectorById" HTML element #userChoice_Display. 
    // .innerHTML writes the array userChoice to the element #userChoice_Display;
   
// * // Create for loop to utilize "any_Display" (Should be DRY)
// UPDATES element #userChoice_Display with global var userChoice
    function userChoice_Display() { // Creates function named userChoice_Display with empty varible (). Curly brackets open the function.
        document.querySelector("#userChoice_Display").innerHTML = userChoice;
    }   // Accesses the "document" element userChoice_Display. .innerHTML writes the value of UserChoice to the userChoice_Display array   

//  UPDATES element #winCount_Display with global var winCount
    function winCount_Display() { // Creates function named winCount_Display with empty varible (). Curly brackets open the function.
        document.querySelector("#winCount_Display").innerHTML = winCount; 
    }   // Accesses the "document" element userChoice_Display. .innerHTML writes the output if UserChoice to the userChoice_Display array   

//  UPDATES element #looseCount_Display with global var looseCount 
    function looseCount_Display() { // Creates function named looseCount_Display with empty varible (). Curly brackets open the function.
        document.querySelector("#looseCount_Display").innerHTML = looseCount;
    }   // Accesses the "document" element userChoice_Display. .innerHTML writes the output if UserChoice to the userChoice_Display array
    
//  UPDATES element #guessCount_Display with global var guessCount 
    function guessCount_Display() { // Creates function named guessCount_Display with empty varible (). Curly brackets open the function.
        document.querySelector("#guessCount_Display").innerHTML = guessCount;
    }   // Accesses the "document" element userChoice_Display. .innerHTML writes the output if UserChoice to the userChoice_Display array
    
// * // CREATE ONE FUNCTION TO UPDATE ALL DISPLAYS


// * // CREATE FUNCTION?
// //  COMPUTER PICKS RANDOM CHARACTER
    function computerChoiceChar() {
        computerChoice = charactersArry[Math.floor(Math.random() * charactersArry.length)];
    }


//  RESETS GAME
    function initalizeGame() { // Set wins and losses to 0 guessCount to 9 clear userChoice_Display
        console.log('---- initializeGame ----')
        winCount = 0; console.log('winCount: ' + winCount)
        looseCount = 0; console.log('looseCount: ' + looseCount)
        guessCount = 9; console.log('guessCount: ' + guessCount)
        userChoice.length = 0; console.log('userChoice array:' + userChoice)
        computerChoiceChar();
    }

//  RESET ROUND
    function resetRound() {
        guessCount = 9; // sets guessCount to 9
        userChoice.length = 0; // clears the array and allows keypress
        userChoice_Display(); 
        guessCount_Display();
        computerChoiceChar();
        // console.log('- - resetRound - -')
    }

// * // if guessCount = more then 0 the continue loop otherwise resetRound
    // functino guessUpdate


// ComputerChoice picks from characterArry
// CREATED var and function    // var computerChoice = charactersArry[Math.floor(Math.random() * charactersArry.length)];
    // .length runs first that asks for the numerical value of the array charactersArry. (Math.random() *) 
    //  picks a random value "between 1 and 25" and multiplies it by CharactersArry.length.
    // .length give you a numberical value equal to the number of characters in the array 25. "Math.floor rounds the number down. Run this first 
    // then Multiplies by the random in charactersArry number.  Max 25 from length 
    
    console.log('---- computerChoice ----');
    console.log(computerChoice);
  

    //  1. Document awaits any button pressed and released, creates a function (event)
   document.onkeyup = function(event) {
       // Get user input. _Next assign var keyPress
       // * // toLowerCase //

// Key was pressed   
    var keyPress = event.key; // This varible captures the key press and gives it the varible of keyPress. 
        // * // Should exclue anything but charactersArry
    
        // Store event.key to array userChoice
    userChoice.push(keyPress); // Storing to arry userChoice
    // * // Need to display the button presses.

    // Troublshooting userChoice
    // console.log('---- userChoice ----');
    // console.log(userChoice); // Displays userChoice in console.log. 

    userChoice_Display()

    if (guessCount > 1) { // Allows round to be played

        // console.log('after if guessCount: ' + guessCount)

// Compare user userChoice to computerChoice;

        // if userChoice match exactly then is === 'true' executive commands
        if (keyPress === computerChoice) {
           // Accesses the "document" element userChoice_Display. .innerHTML writes the output to the element userChoice_Display
        //  which is a global array. Update the display.            winCount++;
            
            winCount++; // x = x + 1
            winCount_Display(); // Update winCount_Display
            // console.log('Win - winCount: ' + winCount);
            // console.log(winCount); // Shortened to one line
// Moved into resetRound: userChoice_Display(); // Updates display
            guessCount--; // x = x - 1
// Moved into resetRound: guessCount_Display();  // Added () to fix updating
            resetRound() // needs start from the begining without initalizeGame
        }

        else if (userChoice != computerChoice) {
            // function 
            looseCount++;
            looseCount_Display();
            // console.log('Lost - looseCount: ' + looseCount);
            // console.log(looseCount); // Shortened to one line
            userChoice_Display(); // Updates display
            guessCount--;  // x = x - 1
            guessCount_Display(); // Updates display
            // console.log('Lost - guessCount: ' + guessCount);
        }
    } // Close the funtion 
    else {
        resetRound(); 
        console.log('- - resetRound triggered by 0 guessesLeft if statement - -');
    }
} // Close if guessesLeft != 0 line 95





    // var charsTyped = [];

    // document.onkeypress = function(evt) {
    //     evt = evt || window.event;
    
    //     // Ensure we only handle printable keys
    //     var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
    
    //     if (charCode) {
    //         charsTyped.push(String.fromCharCode(charCode));
    //     }
    //     console.log(evt)
    // };