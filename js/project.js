// ====================================================
// Hangman Game - JavaScript
// COMP 2132 Final Project
// Main JavaScript file for Hangman Game
// Jesse Singer
// November 22, 2024
// ====================================================

// This is the main javascript file for the project
// Just activates variables needed

import {WordFetcher} from "./WordFetcher.js";
import {HangmanGame} from "./HangmanGame.js";
import {createAlphabetButtons } from './functions.js';

// Call the function to generate the buttons
createAlphabetButtons();

// Read in words file
wordFetcher = new WordFetcher();
await wordFetcher.fetchWords(); // Not 100% sure why I needed to do this, something about it only returning a Promise object otherwise

// Get a random word
currentWord = wordFetcher.getWord();

// Start the game
gameInstance = new HangmanGame(currentWord.word);
$wordReveal.text(gameInstance.getWordDisplay());
$hint.text("Hint: " + currentWord.hint);
