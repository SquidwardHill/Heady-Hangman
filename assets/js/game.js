//declare vars
var $placeholder = document.getElementById("placeholder");
var $guessesRemaining = document.getElementById("guessesRemaining");
var $guessedLetters = document.getElementById("guessedLetters");
var $wins = document.getElementById("wins");
var $test = document.getElementById("test");



function headyGame() {
    var wins = 0;
    var guessesRemaining = 8;
    var guessedLetters = [];
    var placeholderArr = [];
    var headyWord = '';

    
    //create an array of variables
    var headyWordsArr = ['crystals', 'patchoulie', 'natural', 'dreads', 'flowers', 'festivals'];
    
    headyWord = headyWordsArr[Math.floor(Math.random() * headyWordsArr.length)];
    console.log(headyWord + headyWord.length);
    
    for (var i = 0; i < headyWord.length ; i++) {
        placeholderArr.push('_');
        console.log (placeholderArr.join(' '));
    }
    $placeholder.innerHTML = placeholderArr.join(' ');
    
};
headyGame();
