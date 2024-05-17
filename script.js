let clockInterval;
let paused = false;
let remainingTime = 0;

window.onload = function() {

  startClock();
  document.getElementById('updateButton').addEventListener('click', toggleClock);
  document.getElementById('resumeButton').addEventListener('click', resumeClock);
}

function startClock() {
  if (!clockInterval) {
    clockInterval = setInterval(updateClock, 1000);
  }
}

function stopClock() {

  clearInterval(clockInterval);
  clockInterval = null;
}

function toggleClock() {

  if (!paused) {
    stopClock();
    paused = true;
  } else {
    paused = false;
    remainingTime = 0; 
    startClock();
  }
}

function resumeClock() {
  
  if (!paused) return; 

  paused = false;
  startClock();
}

function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  document.getElementById('digitalClock').innerHTML = formatTime(hour) + ':' + formatTime(minute) + ':' + formatTime(second);
  let hourAngle = (hour % 12) * 30 + minute / 2;
  let minuteAngle = minute * 6;
  let secondAngle = second * 6;

  document.getElementById('hourHand').style.transform = 'rotate(' + hourAngle + 'deg)';
  document.getElementById('minuteHand').style.transform = 'rotate(' + minuteAngle + 'deg)';
  document.getElementById('secondHand').style.transform = 'rotate(' + secondAngle + 'deg)';

  if ((hour === 3 && minute === 0) || (hour === 4 && minute === 0)) {
    document.getElementById('saludo').innerHTML = '¡Hola! ¡Es un nuevo minuto!';
  } else {
    document.getElementById('saludo').innerHTML = '';
  }

  if (paused) {
    remainingTime = 1000 - now.getMilliseconds(); 
    stopClock(); 
  } else if (remainingTime > 0) {
    setTimeout(() => {
      startClock(); 
    }, remainingTime);
    remainingTime = 0; 
  }
}

function formatTime(time) {
  return (time < 10 ? '0' : '') + time;
}
