// ====================================================
// Hangman Game - JavaScript
// COMP 2132 Final Project
// WordFetcher class for fetching words from JSON
// Jesse Singer
// November 22, 2024
// ====================================================

export { WordFetcher };

const fetch_file_location = "data/json/words.json";

// Class to fetch words from a JSON file
class WordFetcher {

    constructor() {
      this.words = [];
    }

    // Fetch the words from the JSON file
    // To avoid await here, it looks as though I should have put
    // Non WordFetcher code in a then(), ie filling the HangmanGame and HTML here
    // But I was trying to follow GRASP principles
    // Ie information expert, low coupling
    // So I had to make this an async function
    // So it could be called in main project.js
    async fetchWords() {
        try {
            // Await the response from the fetch
            const response = await fetch(fetch_file_location);
            if (response.ok) {
                // If good response, await the JSON data
                const data = await response.json();

                // Set the words for future use
                this.words = data.words;
            } else {
                console.log("Network error: fetch failed");
            }
        } catch (error) {
            console.log("Network error: fetch failed", error);
        }
    }

    // Get a random word from the list
    getWord(){
        // Ensure it is an integer by flooring it
        const random = Math.floor(Math.random() * this.words.length);

        return this.words[random];
    }   
}
