export { HangmanGame };


const maxAttempts = 6;


class HangmanGame {
    constructor(word) {
        // Each hangman game has a unique word to guess
        this.word = word.toUpperCase(); 

        // Max attempts allowed
        this.maxAttempts = maxAttempts;
        
        // Number of attempts left
        this.attemptsLeft = maxAttempts;

        // Stores guessed letters
        this.guessedLetters = []; 

        // Stores correctly guessed letters
        this.correctLetters = [];
    }

    // Check if the letter is part of the word
    guessLetter(letter) {

        letter = letter.toUpperCase();

        if (this.guessedLetters.includes(letter)) {

            return { success: false, message: "You already guessed that letter." };
        }

        this.guessedLetters.push(letter);

        if (this.word.includes(letter)) {
            this.correctLetters.push(letter);
            return { success: true, message: "Correct guess!" };
        } else {
            this.attemptsLeft--;
            return { success: false, message: "Incorrect guess!" };
        }
    }

    // Get the current word with blanks for unguessed letters
    getWordDisplay() {
        let display = '';
        for (let letter of this.word) {
            if (this.correctLetters.includes(letter)) {
                display += letter + ' ';
            } else {
                display += '_ ';
            }
        }
        return display.trim();
    }

    // Check if the game is over (win or lose)
    isGameOver() {
        if (this.attemptsLeft === 0) {
            return { gameOver: true, message: `You lost! The word was: ${this.word}` };
        }
        if (this.correctLetters.length === [...new Set(this.word)].length) {
            return { gameOver: true, message: "You won! Congratulations!" };
        }
        return { gameOver: false };
    }
}