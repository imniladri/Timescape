// **************************************************************************** //
// App Time/Date Function

setInterval(timedate, 500);

function timedate() {
    // Automatic
    let getTime = new Date().toLocaleTimeString([], {
        hour: "2-digit", // {numeric,2-digit}
        minute: "2-digit", // {numeric,2-digit}
        // second: "2-digit", // {numeric,2-digit}
        // timeStyle: "medium", // {full,long,medium,short}
        hour12: true, // {true,false}
    });

    let getDate = new Date().toLocaleDateString(["en-US"], {
        weekday: "short", // {long,short,narrow}
        year: "numeric", // {numeric,2-digit}
        month: "long", // {long,short,narrow,numeric,2-digit}
        day: "numeric", // {numeric,2-digit}
        // dateStyle: "full", // {full,long,medium,short}
    });

    // Manual
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    hours = hours > 12 ? (hours + 24) % 12 : hours == 0 ? "12" : hours; // Covert 24Hr - 12Hr
    hours = hours < 10 ? "0" + hours : hours; // Add '0' : Hours [1-digit]
    minutes = minutes < 10 ? "0" + minutes : minutes; // Add '0' : Minutes [1-digit]
    seconds = seconds < 10 ? "0" + seconds : seconds; // Add '0' : Seconds [1-digit]

    // Get Values of Time & Date
    let time = document.getElementById("time");
    let date = document.getElementById("date");

    // Set Values of Time & Date
    time.innerText = `${hours}:${minutes}`;
    date.innerText = getDate;
    // document.getElementById("time").innerText = getTime;
    // document.getElementById("ampm").innerText = getAMPM;

    // Get AM/PM Data [Day/Night]
    let getAMPM = new Date().getHours();
    let night = document.querySelector("i.night");
    let day = document.querySelector("i.day");

    // Set Values of Data [AM/PM]
    if (getAMPM >= 12) {
        night.style.opacity = "1";
        night.style.color = `var(--offblue)`;
    } else if (getAMPM < 12) {
        day.style.opacity = "1";
        day.style.color = `var(--lightorange)`;
    }
}

// **************************************************************************** //
