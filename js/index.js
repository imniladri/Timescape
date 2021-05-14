// **************************************************************************** //
// Apk Build:

// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {}

/*
document.addEventListener(
    "backbutton",
    function (e) {
        e.preventDefault();
        navigator.app.exitApp();
    },
    false
);
*/

// **************************************************************************** //
// App Loader Event

$(window).on("load", function () {
    $("#preloader").css({
        transform: "translateY(-100%)",
        "transition-delay": "5s",
    });
    $(".loader img, .loader object").css({
        transform: "translateY(0)",
        opacity: "1",
        "transition-delay": "0.6s",
    });
    $(".loader h2").css({
        transform: "translateY(0)",
        opacity: "1",
        "transition-delay": "0.3s",
    });
});

// **************************************************************************** //
// Appbar Battery Percent

setInterval(batteryRefresh, 500);

function batteryRefresh() {
    let batteryPercent = document.querySelector("p.percent");
    let batteryLevel = document.querySelector("span.level");
    let batteryCharging = document.querySelector("i.charge");

    navigator.getBattery().then(function (battery) {
        // Battery Percent Value
        // batteryPercent.innerText = `${(battery.level * 100).toFixed(0)}`;

        // Width: Battery Level
        batteryLevel.style.width = `${battery.level * 100}%`;

        // Show Charge Icon: If Charging
        if (battery.charging == true) {
            batteryCharging.style.opacity = "1";
        } else {
            batteryCharging.style.opacity = "0";
        }

        // Battery Level Color: [Black, Green, Orange, Red]
        if (battery.level == 1.0) {
            batteryLevel.style.background = `var(--lightgrey)`;
        } else if (battery.level < 1.0 && battery.level >= 0.7) {
            batteryLevel.style.background = `var(--lightgreen)`;
        } else if (battery.level < 0.7 && battery.level >= 0.2) {
            batteryLevel.style.background = `var(--lightorange)`;
        } else {
            batteryLevel.style.background = `var(--lightred)`;
        }
    });
}

// **************************************************************************** //
// Get Time Data Greetings

let getTime = new Date().getHours();
let getMessage = document.querySelector("p.message");

// Times
// Morning: 5 - 12
// Afternoon: 12 - 16
// Evening: 16 - 22
// Night: 22 - 4

if (getTime >= 5 && getTime < 12) {
    getMessage.textContent = "Good Morning";
} else if (getTime >= 12 && getTime < 16) {
    getMessage.textContent = "Good Afternoon";
} else if (getTime >= 16 && getTime < 22) {
    getMessage.textContent = "Good Evening";
} else {
    getMessage.textContent = "Good Night";
}

// **************************************************************************** //
