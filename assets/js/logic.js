// VARIBLES //
    var charactersArry = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var userChoice = ""; // HELP! IS NOT POPULATING WITH .push line 66
    var winCount = 0;  // Testing which works
    var looseCount = 0;  // Testing which works
    var guessesLeft = "";  // Testing which works

    // CREATE AS FUNCTION?

    // TEST WITH: document.querySelector("#question").innerHTML = "Game Over!";

    // var userChoice_Display = document.querySelector("#userChoice_Display").innerHTML = userChoice;
    // var winCount_Display = document.querySelector("#winCount_Display").innerHTML = winCount;
    // var looseCount_Display = document.querySelector("#looseCount_Display").innerHTML = looseCount;
    // var guessesLeft_Display = document.querySelector("#guessesLeft_Display").innerHTML = guessesLeft;
    // * // Eventually use this.display?


// FUNCTIONS //
// * // CREATE FUNCTIONS FOR VARS ABOVE?

// Creates function userChoice_Display
// * Another option. //

//document.getElementById("userChoice_Display").innerHTML = userChoice;
//access the document object with "querySelector" element of #userChoice_Display. 
// .innerHTML writes to the element userChoice which then adds to the value the the var called userChoice++;
   
    function userChoice_Display() { // Creates a function named userChoice_Display with empty varible (). Curly brackets open 
                                    // the function.
        document.querySelector("#userChoice_Display").innerHTML = userChoice; // HELP! WILL NOT UPDATE DISPLAY
        // Accesses the "document" element userChoice_Display. .innerHTML writes the output if UserChoice to the userChoice_Display array
    }    

// ComputerChoice picks from characterArry

    // .length runs first that asks for the numerical value of the array charactersArry. (Math.random() *) 
    //  picks a random value "between 1 and 25" and multiplies it by CharactersArry.length.
    // .length give you a numberical value equal to the number of characters in the array 25. "Math.floor rounds the number down. Run this first 
    // then Multiplies by the random in charactersArry number.  Max 25 from length 
    var computerChoice = charactersArry[Math.floor(Math.random() * charactersArry.length)];
    
    console.log('---- computerChoice ----')
    console.log(computerChoice);
  
    //  1. Document awaits any button pressed and released, creates a function (event)
   document.onkeyup = function(event) {
       // Get user input. _Next assign to userChoice
       // * // toLowerCase //

// Key was pressed   
    var keyPress = event.key; // This varible captures the key press and gives it the varible of userChoice. 
        // * // Should exclue anything but charactersArry
    
    console.log('---- keyPress ----')
    console.log(keyPress); // Displays userChoice in console.log and send to arry userChoice. Next we need to display the button presses.


// Compare user userChoice to computerChoice;

        // if userChoice match exactly then is === 'true' executive commands
        if (keyPress === computerChoice) {
           // Accesses the "document" element userChoice_Display. .innerHTML writes the output to the element userChoice_Display
        //  which is a global array. Update the display.            winCount++;
            
            userChoice.push
            winCount++; // x = x + 1
            console.log('---- winCount after WinCount++ ----')
            console.log(winCount);
            userChoice_Display // Updates display?
// // // resetRound // needs start from the begining without initalizeGame
        }

        else if (userChoice != computerChoice) {
            // function 
            looseCount++;
            console.log('---- looseCount after loose++ ----')
            console.log(looseCount);
            userChoice_Display // Updates display?
        }
    } // Close the funtion

    
            
        // else if (true) { //
            // document.getElementById("userChoice_Display").innerHTML = "userChoice";
    // * // var userChoice_Display = document.querySelector("#userChoice_Display").innerHTML = userChoice; 
        // }
    


// Outside of for loop resets everything



        function initalizeGame() { // Set wins and losses to 0 guessesLeft to 9 clear userChoice_Display
            winCount = 0;
            looseCount = 1;
            guessesLeft = 6;
            userChoice = "";
        }
            
    




        // WILL NOT WORK WITHOUT (true)
                                    // else if (true) {
                                    //     alert('Try again!')
                                    //     looseCount++
                                    //     guessesLeft--;
                                    //     userChoice++
                                    // }

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