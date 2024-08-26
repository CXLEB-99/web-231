/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author:Caleb Goforth
      Date: 8/25/2024

      Filename: project02-02.js
 */

function verifyForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  //Conditional operator to check if all fields are filled
  name && email && phone
  ? window.alert("Thank you")
  : window.alert("Please fill in all fields");
}

// Event listener, attached to element with id "submit"
document.getElementById("submit").addEventListener("click", function(event) {
  verifyForm();
});