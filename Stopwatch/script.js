'use strict';

const timer = document.getElementById('timer');
let min = 0;
let sec = 0;
let milisec = 0;
let interval;
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnReset = document.getElementById('btn-reset');

const startTimer = function () {
  clearInterval(interval);
  interval = setInterval(timerCycle, 10);
};

const stopTimer = function () {
  clearInterval(interval);
};

const resetTimer = function () {
  clearInterval(interval);
  timer.innerHTML = '00:00:00';
  min = 0;
  sec = 0;
  milisec = 0;
};

const timerCycle = function () {
  min = parseInt(min);
  sec = parseInt(sec);
  milisec = parseInt(milisec);
  milisec++;
  if (milisec > 99) {
    sec++;
    milisec = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
    milisec = 0;
  }
  if (milisec < 10 || milisec == 0) {
    milisec = '0' + milisec;
  }
  if (sec < 10 || sec == 0) {
    sec = '0' + sec;
  }
  if (min < 10 || min == 0) {
    min = '0' + min;
  }
  timer.innerHTML = min + ':' + sec + ':' + milisec;
};

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);
