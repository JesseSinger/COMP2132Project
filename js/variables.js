// JQuery variables
const $wordReveal               = $("#wordReveal");
const $hint                     = $("#hint");
const $gallowContainer          = $("#gallowContainer");
const $guessButton              = $("#guessButton");
const $playAgainButton          = $("#playAgainButton");
const $guess                    = $("#guess");
const $letters                  = $("#letters");
const $winLosePopup             = $("#winLosePopup");

const defaultImagePath          = 'images/Gallows/Gallows0.png';

// Game variables
word                            = "";
gameInstance                    = null;
wordFetcher                     = null;

//determine delay in milliseconds
        
const fadeInMilliseconds        = 3000; // 3 second fade in
const start                     = Date.now();

const interval                  = 100;
 // This allows smooth transition
const incrementer               = interval / fadeInMilliseconds;

let opacityValue                 = 0;

let popupInterval;
