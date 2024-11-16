// Well, I tried to use this import module stuff
// It was hard but it seesms to work
// No idea if this is best practices or not though
import {HangmanGame} from "./HangmanGame.js";
export {createAlphabetButtons};

function createAlphabetButtons() {
    const lettersSection = document.getElementById('letters');

    // Easiest way I could think of would be to just create this string of alphabet letter and loop through them
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const split = alphabet.split(''); // Creates an array of chars

    // Loop through the alphabet and create a button for each letter
    split.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter; // Set the button's text to the letter
        
        // Class for styling
        button.classList.add('alphabetButton'); // Add a class for styling

        // Add an event listener to the button
        button.addEventListener('click', () => {

  
        button.disabled = true;
        // Call the guessLetter function and pass the letter as an argument
        gameInstance.guessLetter(letter);


        // Update the image
        const currentGuess = gameInstance.maxAttempts - gameInstance.attemptsLeft;
        $gallowContainer.attr('src', `images/Gallows/Gallows${currentGuess}.png`);

        // Update the word display
        $wordReveal.text(gameInstance.getWordDisplay());
        
        if (gameInstance.isGameOver()) {
            disableAllButtons();
            
            // Check if win
            if(gameInstance.correctLetters.length === gameInstance.word.length){
                $winLosePopup.html("You Win 😊!<br>Please play again");
            }
            // else is a loss
            else{
                $winLosePopup.html("You Lose 😞 The word was: " + gameInstance.word + "<br>Please play again");    
            }
            
            popupInterval = setInterval(popup, interval);
            return; // If the game is over, don't allow any more guesses
        }
      });
  
      // Append the button to the letters section
      lettersSection.appendChild(button);
    });
  }
 

function disableAllButtons() {
    // Grab all the alphabet buttons and disable them
    const buttons = document.querySelectorAll('.alphabetButton');
    buttons.forEach(button => {
      button.disabled = true; 
    });
}

function newGame(){
    // Get a game instance with a new word
    word = wordFetcher.getWord();
    gameInstance    = new HangmanGame(word.word);
     // Reset picture
    $gallowContainer.attr('src', defaultImagePath);
   
    // Reset the popup
    opacityValue = 0;
    $winLosePopup.css("opacity", opacityValue);
    clearInterval(popupInterval);

    // Update the word display
    $wordReveal.text(gameInstance.getWordDisplay());
    $hint.text("Hint: " + word.hint);
}

// Function for play again button click
$playAgainButton.click(() => {
    newGame();
    // Grab all alphabet buttons
    const buttons = document.querySelectorAll('.alphabetButton');
    
    // Enable all buttons
    buttons.forEach(button => {
        button.disabled = false;
    });
    });


function popup()
{
    opacityValue += incrementer;
    if(opacityValue >= 1)
    {
        opacityValue = 1;
         // Stop the interval once opacity is fully set
        clearInterval(popupInterval);
        return;
    }
    
    $winLosePopup.css("opacity", opacityValue);
}    
 
    