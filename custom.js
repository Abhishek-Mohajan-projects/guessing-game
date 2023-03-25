"use strict";

const form = document.querySelector("form");

const cardBody = document.querySelector(".card-body");

const guessingNumber = form.querySelector("#guessingNumber");

const checkButton = form.querySelector("#check");

const resultText = cardBody.querySelector(".resultText");

const remainingAttempts = cardBody.querySelector(".remainingAttempts");

const totalWonsMessage = document.createElement("p");

let totalAttempts = 5;

let attempts = 0;

let totalWons = 0;

let totalLosts = 0;


form.addEventListener("submit", function(event) {
    event.preventDefault();

    attempts++;

    if( attempts === 5 ) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    } if ( attempts < 6 ) {
       const guessNumber = Number(guessingNumber.value);
       checkResult(guessNumber);
       remainingAttempts.innerHTML = `Remaining Attempts : ${totalAttempts - attempts}`;
    }

    guessingNumber.value = "";
    
})



function checkResult(guessingNumber) {

    const randomNumber = getRandomNumber(5);

    if ( randomNumber === guessingNumber ) {
        resultText.innerHTML = `You Have Won`;
        totalWons++;
    } else {
        resultText.innerHTML = `You Have Lost, The Random Number Was : ${randomNumber}`;
        totalLosts++
    }
    totalWonsMessage.innerHTML = `Won : ${totalWons}, Lost : ${totalLosts}`;
    totalWonsMessage.classList.add(".large-text");
    cardBody.appendChild(totalWonsMessage);
}


function getRandomNumber(limit) {
    return Math.floor( Math.random() * limit ) +1;
}