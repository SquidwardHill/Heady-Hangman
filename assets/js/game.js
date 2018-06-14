//DOM vars
var $startGameBtn = document.getElementById("startGame");
var $placeholderStr = document.getElementById("placeholder");
//counter
var $guessesRemainingNum = document.getElementById("guessesRemaining");
//shows incorrect letter guesses
var $guessedLettersStr = document.getElementById("guessedLetters");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");



$startGameBtn.addEventListener('click', startGame);


function startGame(){
 //create an array of variables
 var wordBankArr = ['crystals', 'patchoulie', 'natural', 'dreads', 'flowers', 'festivals'];
 var placeholderArr = [];
 var guessedLettersArr = [];


 var headyWord = wordBankArr[Math.floor(Math.random() * wordBankArr.length)];
 console.log(headyWord);
    for (var i = 0; i < headyWord.length; i++) {
        console.log(headyWord[i]);
    }
}


function looper(loop){
    for (var i = 0; i < loop.length; i++) {
        console.log(loop[i]);
    }
}


function makeLowerCase(convert){
    convert.toLowercase;
};


function keypressTracker(){
    
}
















