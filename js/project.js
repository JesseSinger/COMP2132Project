import {WordFetcher} from "./WordFetcher.js";
import {HangmanGame} from "./HangmanGame.js";



// JQuery variables
const $wordReveal                       = $("#wordReveal");
const $gallowContainer              = $("#gallowContainer");
const $guessButton              = $("#guessButton");
const $guess              = $("#guess");



// Read in words file

const wordFetcher = new WordFetcher();
await  wordFetcher.fetchWords();
const word = wordFetcher.getWord();






// Image
const gameInstance = new HangmanGame(word.word);
const currentGuess = gameInstance.maxAttempts - gameInstance.attemptsLeft;
$gallowContainer.attr('src', `images/Gallows/Gallows${currentGuess}.png`);


// Word

$wordReveal.text(gameInstance.getWordDisplay());

$guessButton.click(function(){
    console.log("a")
    //gameInstance.guessLetter($guess.val());
})