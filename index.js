// STOPWATCH
const display = document.getElementById("display");
let timer = 0;
let startTime = null;
let elipseTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elipseTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
    if(isRunning){
        clearInterval(timer);
         elipseTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elipseTime = 0;
    isRunning = false;
    display.textContent = `00:00:00:00`;

}

function update() {
    const currentTime = Date.now();
    elipseTime = currentTime- startTime;

    let hours = Math.floor(elipseTime / (1000 * 60 * 60));
    let minutes = Math.floor(elipseTime / (1000 * 60) % 60);
    let seconds = Math.floor(elipseTime / 1000 % 60);
    let milliSeconds = Math.floor(elipseTime % 1000 / 10 );

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliSeconds = String(milliSeconds).padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;

}
