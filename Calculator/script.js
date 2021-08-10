'use strict';
let preOutput = document.getElementById('preValue');
let newOutput = document.getElementById('newValue');
let number = document.getElementsByClassName('number');
let operator = document.getElementsByClassName('operator');
let isFinalResult = false;

newOutput.innerText = '0';
// Convert from Number to String to display decimal place
const formatNum = function (num) {
  return Number(num).toLocaleString('en');
};

// Revert the format number back to Number
const revertFormatNum = function (num) {
  let revertNum = String(num).replace(/,/g, '');
  return Number(revertNum);
};

// Display the operand and previous result
const printPreOutput = function (num) {
  preOutput.innerText = num;
};

// Display the current input and result
const printNewOutput = function (num) {
  if (num == '') {
    newOutput.innerText = num;
  } else {
    newOutput.innerText = formatNum(num);
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
    // if (isFinalResult) {
    //   isFinalResult = false;
    //   printPreOutput('');
    //   result = '';
    //   result = result + this.id;
    //   printNewOutput(result);
    // }
  });
}

// Handle operators button
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
    let result = revertFormatNum(newOutput.innerText);
    let preResult = preOutput.innerText;
    let finalResult;
    // Clear button (AC)
    if (this.id == 'clear') {
      isFinalResult = false;
      newOutput.innerText = '0';
      preOutput.innerText = '';
    }
    // Delete button (DEL)
    else if (this.id == 'delete') {
      if (!isFinalResult) {
        let deleteNum = new String(result).slice(0, -1);
        result = revertFormatNum(deleteNum);
        printNewOutput(result);
      }
    }
    // Operators button
    else {
      if (result != '') {
        preResult = preResult + result;
        printPreOutput(preResult);
        if (this.id == '=') {
          finalResult = eval(preResult);
          printNewOutput(finalResult);
          printPreOutput(preResult + this.id);
          printPreOutput('');
          isFinalResult = true;
        } else {
          preResult = preResult + this.id;
          printPreOutput(preResult);
          printNewOutput('');
        }
      }
    }
  });
}
