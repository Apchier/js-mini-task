const outputMinutes = document.getElementById('minutes');
const outputSeconds = document.getElementById('seconds');
const outputTens = document.getElementById('tens');
const buttonStart = document.getElementById('btn-start');
const buttonStop = document.getElementById('btn-stop');
const buttonReset = document.getElementById('btn-reset');

let minutes = 0;
let seconds = 0;
let tens = 0;
let interval;

buttonStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
});

function startTime() {
    tens++;
    if (tens > 99) {
        tens = 0;
        seconds++;
    }
    if (seconds > 59) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    outputTens.textContent = tens < 10 ? '0' + tens : tens;
    outputSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    outputMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
}
