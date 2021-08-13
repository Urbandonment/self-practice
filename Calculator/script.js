// 'use strict';
let preOutput = document.getElementById('preValue');
let newOutput = document.getElementById('newValue');
let number = document.getElementsByClassName('number');
let operator = document.getElementsByClassName('operator');
let negate = document.getElementById('negate');
let finalResult = '';
let ansNum = '';
let isFinalResult = false;
let isNegate = false;
let decimalAllowed = true;
newOutput.innerText = '0';

// -- Remove the leading zero
const removeZero = function (num) {
  return String(num).replace(/^0+/, '');
};

// // -- Add the thousand separators
// const thousandSep = function (num) {
//   const pattern = /(\d)(?=(\d{3})+(?!\d))/g;
//   const repl = '$1,';
//   const string = String(num);
//   return string.replace(pattern, repl);
// };

// -- Display the operand and previous result
const printPreOutput = function (num) {
  preOutput.innerText = num;
};

// -- Display the current input and result
const printNewOutput = function (num) {
  newOutput.innerText = num;
};

// -- Check whether negative is enabled
const checkNegate = function (num) {
  if (String(num).charAt(0) == '-') {
    isNegate = true;
  } else {
    isNegate = false;
  }
};

// -- Handle numbers button
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    let result = removeZero(newOutput.innerText);
    result += this.id;
    printNewOutput(result);
    // -- Alert if reached maximum input
    if (result.length >= 22) {
      alert('Maximum input reached !');
      result = result.toString().substr(0, 21);
      printNewOutput(result);
    }
    checkNegate(result);
    if (isFinalResult) {
      decimalAllowed = true;
      printPreOutput('');
      result = '';
      result += this.id;
      printNewOutput(result);
      isFinalResult = false;
    }
  });
}

// -- Handle operators button
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
    let result = newOutput.innerText;
    let preResult = preOutput.innerText;
    checkNegate(result);
    // -- Clear button (AC)
    if (this.id == 'clear') {
      isFinalResult = false;
      isNegate = false;
      decimalAllowed = true;
      newOutput.innerText = '0';
      preOutput.innerText = '';
    }
    // -- Delete button (DEL)
    else if (this.id == 'delete') {
      let deleteNum;
      if (result.endsWith('.')) {
        decimalAllowed = true;
      } else {
        decimalAllowed = false;
      }
      if (!isFinalResult) {
        if (isNegate) {
          deleteNum = new String(result).slice(1, -1);
        } else {
          deleteNum = new String(result).slice(0, -1);
        }
        result = deleteNum;
        printNewOutput(result);
        decimalAllowed = true;
      }
    }
    // -- Negate button (+/-)
    else if (this.id == 'negate') {
      if (!isNegate) {
        result = '-' + result;
        printNewOutput(result);
        isNegate = true;
      } else {
        result = String(result).slice(1);
        printNewOutput(result);
        isNegate = false;
      }
    }
    // -- Decimal button (.)
    else if (this.id == '.') {
      if (decimalAllowed) {
        result += this.id;
        printNewOutput(result);
        decimalAllowed = false;
      }
      if (result.startsWith('0')) {
      }
    }
    // -- Operators button
    else {
      if (result != '') {
        isFinalResult = false;
        preResult += result;
        printPreOutput(preResult);
        if (this.id == '=') {
          if (preResult.includes('.')) {
            finalResult = eval(preResult).toFixed(1);
          } else {
            finalResult = eval(preResult);
          }
          printNewOutput(finalResult);
          printPreOutput('');
          isFinalResult = true;
        } else {
          decimalAllowed = true;
          preResult += this.id;
          printPreOutput(preResult);
          printNewOutput('');
        }
      }
    }
  });
}
