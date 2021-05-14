// **************************************************************************** //
// App Stopwatch Function

let [milliseconds, seconds, minutes] = [0, 0, 0];
let displayStopwatchShow = document.querySelector(".display_stopwatch h4");
let displayStopwatchCount = document.querySelector(".display_stopwatch span");
let startStopwatch = document.getElementById("startStopwatch");
let pauseStopwatch = document.getElementById("pauseStopwatch");
let stopStopwatch = document.getElementById("stopStopwatch");
let int = null;

startStopwatch.addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(stopwatch, 10);
});

pauseStopwatch.addEventListener("click", () => {
    clearInterval(int);
});

stopStopwatch.addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    displayStopwatchShow.innerText = "00 : 00";
    displayStopwatchCount.innerText = "00";
});

function stopwatch() {
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }

    let mn = minutes < 10 ? "0" + minutes : minutes;
    let sc = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    displayStopwatchShow.innerText = `${mn} : ${sc}`;
    displayStopwatchCount.innerText = `${ms}`;
}

// **************************************************************************** //
