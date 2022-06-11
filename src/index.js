// DOM
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");

btnStart.addEventListener("click", startChronometer);
btnReset.addEventListener("click", resetChronometer);
btnStop.addEventListener("click", stopChronometer);

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
let secondsValue = 0;
let minutesValue = 0;
let hoursValue = 0;
let currentTime;
function startChronometer() {
  currentTime = setInterval(() => {
    btnStart.style.display = "none";
    btnStop.style.display = "inline-block";
    btnReset.style.display = "inline-block";
    secondsValue++;
    if (secondsValue === 60) {
      secondsValue = 0;
      minutesValue++;
    }
    if (minutesValue === 60) {
      minutesValue = 0;
      hoursValue++;
    }
    seconds.textContent = formatTime(secondsValue);
    minutes.textContent = formatTime(minutesValue);
    hours.textContent = formatTime(hoursValue);
  }, 10);
}

function formatTime(time) {
  return `0${time}`.slice(-2);
}

function hidden(btn){
    `${btn}.style.display = "none"`;
}

function visible(btn){
    `${btn}.style.display = "inline-block"`;
}

function stopChronometer() {
  clearInterval(currentTime);
  btnStart.style.display = "block";
  btnStop.style.display = "none";
}

function resetChronometer() {
  secondsValue = 0;
  minutesValue = 0;
  hoursValue = 0;
  seconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";
  stopChronometer();
  btnReset.style.display = "none";
}
