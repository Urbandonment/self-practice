'use strict';
let preOutput = document.getElementById('preValue');
let newOutput = document.getElementById('newValue');
let number = document.getElementsByClassName('number');
let operator = document.getElementsByClassName('operator');

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
  if (num == '') {
    newOutput.innerText = num;
  } else {
    newOutput.innerText = revertFormatNum(num);
  }
};

// Handle numbers button
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    let result = revertFormatNum(newOutput.innerText);
    if (result != NaN) {
      result = result + this.id;
      printNewOutput(result);
    }
  });
}

// Handle operators button
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
    let result = revertFormatNum(newOutput.innerText);
    // Clear button (AC)
    if (this.id == 'clear') {
      newOutput.innerText = '';
    }
    // Delete button (DEL)
    if (this.id == 'delete') {
      let deleteNum = new String(result).slice(0, -1);
      result = revertFormatNum(deleteNum);
      printNewOutput(result);
    }
  });
}
