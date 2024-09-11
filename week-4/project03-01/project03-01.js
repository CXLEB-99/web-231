/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Caleb Goforth
      Date: 9/11/2024

      Filename: project03-01.js
*/

let menuItem = document.getElementsByClassName('menuItem');

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', function() {
    calcTotal(); // Call calcTotal() when the item is clicked
  });
}

function calcTotal() {
  let orderTotal = 0;
  for (let i = 0; i < menuItem.length; i++) {
    if (menuItem[i].checked) {
      orderTotal += Number(menuItem[i].value);
    }
  }

  document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }