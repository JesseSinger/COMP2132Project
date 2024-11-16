import {WordFetcher} from "./WordFetcher.js";
import {HangmanGame} from "./HangmanGame.js";



// JQuery variables
const $wordReveal                       = $("#wordReveal");
const $gallowContainer              = $("#gallowContainer");
const $guessButton              = $("#guessButton");
const $playAgainButton              = $("#playAgainButton");
const $guess              = $("#guess");
const $letters              = $("#letters");



// Read in words file

const wordFetcher = new WordFetcher();
await wordFetcher.fetchWords(); // Not 100% sure why I needed to do this, something about it only returning a Promise object otherwise
const word = wordFetcher.getWord();

// Image
let gameInstance = new HangmanGame(word.word);
$gallowContainer.attr('src', `images/Gallows/Gallows0.png`);


// Word

$wordReveal.text(gameInstance.getWordDisplay());

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
        // Call the guessLetter function and pass the letter as an argument
        if (gameInstance.isGameOver().gameOver) {
            return; // If the game is over, don't allow any more guesses
        }
        button.disabled = true;

        gameInstance.guessLetter(letter);
  
        // Update the word display
        $wordReveal.text(gameInstance.getWordDisplay());
  
        // Update the image
        const currentGuess = gameInstance.maxAttempts - gameInstance.attemptsLeft;
        $gallowContainer.attr('src', `images/Gallows/Gallows${currentGuess}.png`);
  
        // Check if the game is over
        if (gameInstance.isGameOver().gameOver) {
          // If the game is over, display the message
          alert(gameInstance.isGameOver().message);
          disableAllButtons(); // Disable all buttons when the game is over
        }
      });
  
      // Append the button to the letters section
      lettersSection.appendChild(button);
    });
  }
  
  // Call the function to generate the buttons
createAlphabetButtons();




function disableAllButtons() {
    const buttons = document.querySelectorAll('.alphabetButton');
    buttons.forEach(button => {
      button.disabled = true; // Disable each button
    });
  }

$playAgainButton.click(() => {
     gameInstance    = new HangmanGame(word.word);
     // Reset 
     $gallowContainer.attr('src', `images/Gallows/Gallows0.png`);
          // Update the word display
    $wordReveal.text(gameInstance.getWordDisplay());
     const buttons = document.querySelectorAll('.alphabetButton');
    buttons.forEach(button => {
      button.disabled = false; // Enable each button
    });
    });