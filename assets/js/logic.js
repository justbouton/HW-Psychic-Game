// VARIBLES //
    var charactersArry = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var userChoice = [];
    var winCount = 0;
    var looseCount = 0;
    var guessesLeft = "";

    // CREATE AS FUNCTION?

    // USE THIS FORMAT? document.querySelector("#question").innerHTML = "Game Over!";

    var userChoice_Display = document.querySelector("#userChoice_Display").innerHTML = userChoice;
    var winCount_Display = document.querySelector("#winCount_Display").innerHTML = winCount;
    var looseCount_Display = document.querySelector("#looseCount_Display").innerHTML = looseCount;
    var guessesLeft_Display = document.querySelector("#guessesLeft_Display").innerHTML = guessesLeft;
    

    // FUNCTIONS //
    //CREATE FUNCTIONS FOR VARS ABOVE?

    // Creates function userChoice_Display

// * Another option. //

//document.querySelector("#userChoice_Display").innerHTML = userChoice;
//access the document object with "querySelector" element of #userChoice_Display. 
// .innerHTML writes to the element userChoice which then adds to the value the the var called userChoice++;
   
    function userChoice_Display() { // Creates a function named userChoice_Display with empty varible (). Curly brackets open 
                                    // the function.
        document.getElementById("userChoice_Display").innerHTML = "userChoice";
    }   // Accesses the "document" element userChoice_Display. .innerHTML writes the output to the element userChoice_Display
    //  which is a global array and update the display.
    
    userChoice++ // adds the var to itself to update the user choice arrary // x = x + 1 
                // * spaces between characters with comma 

    console.log('---- winCount before userChoice++ ----')
    console.log(winCount)
    console.log(userChoice++)

    // ComputerChoice picks from characterArry with Math.floor to round the number down. Multiplies it by (Math.random *) 
    //which picks any character at random in charactersArry that asks for the numerical value of the array.
    var computerChoice = charactersArry[Math.floor(Math.random() * charactersArry.length)]; // length = 25 
    
    console.log(computerChoice)
  
    //  1. Document awaits any button pressed and released, creates a function (event)
   document.onkeyup = function(event) {
       // Get user input. _Next assign to userChoice
       // * // toLowerCase //

    // Determineed key was pressed   
    var userChoice = event.key; // This varible captures the key press and gives it the varible of userChoice. 
        // Should exclue anything but charactersArry

    console.log(userChoice); // Displays userChoice in console.log and send to arry userChoice. Next we need to display the button presses.
        
    // Should add +1 to win
    winCount++; // x = x + 1
   } // Close the funtion
    
    // * // var userChoice_Display = document.querySelector("#userChoice_Display").innerHTML = userChoice; 
        // Compare user userChoice to computerChoice; if userChoice match exactly then is === 'true' executive commands
        if (userChoice === computerChoice) {
            document.getElementById("userChoice_Display").innerHTML = "userChoice";
           // Accesses the "document" element userChoice_Display. .innerHTML writes the output to the element userChoice_Display
        //  which is a global array. Update the display.            winCount++;
            
            console.log('---- winCount before WinCount++ ----')
            console.log(winCount);
            winCount++
        }
            
    

        function initalizeGame() { // Set wins and losses to 0 guessesLeft to 9 clear userChoice_Display
        winCount = 0;
        looseCount = 1;
        guessesLeft = 6;
        userChoice = ("Press a character to begin...")
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