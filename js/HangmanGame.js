export { HangmanGame };


const maxAttempts = 9;


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
            return false;
        }

        this.guessedLetters.push(letter);

        if (this.word.includes(letter)) {
            // Need to add letter to correctLetters array
            // But could be multiple instances of the letter!
            for (let existingLetter of this.word){
                if(existingLetter === letter){
                    this.correctLetters.push(letter);
                }                
            }

            return true; 
        }
        else {
            this.attemptsLeft--;
            return false;
        }
    }

    // Get the current word with blanks for unguessed letters
    getWordDisplay() {
        let display = '';
        for (let letter of this.word) {
            if (this.correctLetters.includes(letter)) 
            {
                display += letter + ' ';
            } 
            else 
            {
                display += '_ ';
            }
        }

        return display;
    }

    // Check if the game is over (win or lose)
    isGameOver() 
    {
        if (this.attemptsLeft === 0) {
            return true;
        } 
        else{
            return this.correctLetters.length === this.word.length;
        }
    }
}