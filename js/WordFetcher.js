export { WordFetcher };


const fetch_file_location = "data/json/words.json";


class WordFetcher {

    constructor() {
      this.words = [];
    }

    // Fetch the words from the JSON file
    async fetchWords() {

        try {
            const response = await fetch(fetch_file_location);
            if (response.ok) {
                const data = await response.json();
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
