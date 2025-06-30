let [minutes, seconds, milliseconds] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;

function updateDisplay() {
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;
  display.innerText = `${m}:${s}:${ms}`;
}

function startStopwatch() {
  if (interval) return;
  interval = setInterval(() => {
    milliseconds += 10;
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10);
}

function pauseStopwatch() {
  clearInterval(interval);
  interval = null;
}

function resetStopwatch() {
  pauseStopwatch();
  [minutes, seconds, milliseconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;
  let lap = document.createElement("li");
  lap.innerText = `Lap: ${m}:${s}:${ms}`;
  document.getElementById("laps").appendChild(lap);
}
