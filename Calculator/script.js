'use strict';

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

const calculate = function (event) {
  const clickedButtonValue = event.target.value;
  display.value += clickedButtonValue;

  if (clickedButtonValue == 'C') {
    display.value = '';
  }
};

buttons.forEach(function (button) {
  button.addEventListener('click', calculate);
});
