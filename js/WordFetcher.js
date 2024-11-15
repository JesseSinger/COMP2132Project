export { WordFetcher };


const fetch_file_location = "data/json/words.json";


class WordFetcher {

    constructor() {
      this.words = [];
    }

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

    getWord(){

        // Get a random word from the list
        const random = Math.floor(Math.random() * this.words.length);
        return this.words[random];
    }   
}
