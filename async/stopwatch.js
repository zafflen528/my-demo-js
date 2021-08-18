function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector('.clock').textContent = time;
}

displayTime();
const createClock = setInterval(displayTime, 1000);

let elapsed = 0;
let myInterval;

const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const displayStopWatch = document.querySelector('.stopwatch');

function start(){
    let hours = Math.floor(elapsed/3600);
    let minutes = Math.floor((elapsed % 3600) / 60);
    let seconds = Math.floor(elapsed%60);

    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    displayStopWatch.textContent = displayHours + ':' 
        +displayMinutes+':'+displaySeconds;

    elapsed++;
}

displayStopWatch.textContent = "00:00:00";

startButton.addEventListener('click',()=>{
    myInterval= setInterval(start,1000);
    startButton.disabled = true;
});

stopButton.addEventListener('click', ()=>{
    clearInterval(myInterval);
    startButton.disabled = false;
});


resetButton.addEventListener('click', ()=>{
    clearInterval(myInterval);
    elapsed = 0;
    startButton.disabled = false;
    start();
});


