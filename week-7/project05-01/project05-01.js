"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Caleb Goforth
      Date: 10/2/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];


// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;
// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

// Event Handler for starting the quiz
startQuiz.onclick = function() {
  overlay.className = "showquiz";

  // Start the countdown function, repeating every 1 second
  timeID = setInterval(countdown, 1000);
};

// The countdown function to update the quiz clock
function countdown() {
  if (timeLeft === 0) { // Check if time has run out
     clearInterval(timeID); // Stop the countdown timer

     // Declare and store the total number of correct answers
     let totalCorrect = checkAnswers();

     // Check if the student got 100% correct answers
     if (totalCorrect === correctAnswers.length) {
        alert("Congratulations! You got 100%!");
     } else {
        // Display the number of incorrect answers and reset the quiz
        alert(`You got ${correctAnswers.length - totalCorrect} incorrect answer(s) out of ${correctAnswers.length} questions.`);
        timeLeft = quizTime; // Reset the time
        quizClock.value = timeLeft; // Update the clock
        overlay.className = "hidequiz"; // Hide the quiz overlay
     }
  } else { // If timeLeft is not 0, keep decreasing the time
      timeLeft--; //Decrease timeLeft by 1
      quizClock.value = timeLeft; //Update the quiz clock display
  }
}

















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

