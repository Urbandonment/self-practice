'use strict';
let preOutput = document.getElementById('preValue');
let newOutput = document.getElementById('newValue');
let number = document.getElementsByClassName('number');

// Convert from Number to String to display decimal place
const formatNum = function (num) {
  return Number(num).toLocaleString('en');
};

// Revert the format number back to Number
const revertFormatNum = function (num) {
  let revertNum = String(num).replace(/,/g, '');
  return Number(revertNum);
};

// Display the previous operand
const printPreOutput = function (num) {
  preOutput.innerText = num;
};

// Display the current operand
const printNewOutput = function (num) {
  newOutput.innerText = num;
};

// Handle click action on number keys
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    let result = revertFormatNum(newOutput);
    if (result != NaN) {
      result += this.id;
      printNewOutput(result);
    }
  });
}
