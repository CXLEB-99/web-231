"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Caleb Goforth
      Date: 10/09/2024

      Filename: project06-03.js
*/

// Declaring useShip variable, references element with id of "useShip"
let useShip = document.getElementById("useShip");

// Event Listener for useShip variable
useShip.addEventListener("click", copyShippingToBilling);

// copyShippingToBilling function
function copyShippingToBilling() {
  //Reference the useShip checkbox
  let useShip = document.getElementById("useShip");

  // Check if the useShip checkbox is checked
  if (useShip.checked) {
    // Copy values from shipping fields to billing fields
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;

    // Set the selectedIndex of the stateBill field to match stateShip
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }

}


// Declare the formElements var and store the node list
let formElements = document.querySelectorAll("input[type='text']");

// The fieldCount var set its value to the length of formElements node list
let fieldCount = formElements.length;

// Declare errorBox variable referencing element/w the element id "errorBox"
let errorBox = document.getElementById("errorBox");

// Iterate through each element in the formElements node list
for (let i = 0; i < fieldCount; i++) {
  // Add an event listener for the 'invalid' event on each form element
  formElements[i].addEventListener("invalid", showValidationError);
}


function showValidationError(evt) {
  // Prevent the browser's native invalid form handling
  evt.preventDefault();

  // Set the textContent of the errorBox to display an error message
  errorBox.textContent = "Complete all highlighted fields";
}