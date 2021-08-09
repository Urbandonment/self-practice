'use strict';

const clock = document.getElementById('clock');

const showClock = function () {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let meridiem = 'AM';

  if (hr >= 12) {
    hr = hr - 12;
    meridiem = 'PM';
  }

  if (hr < 10) {
    hr = '0' + hr;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }

  clock.innerHTML = hr + ':' + min + ':' + sec + '<br>' + meridiem;
  setTimeout(showClock, 1000);
};
showClock();
