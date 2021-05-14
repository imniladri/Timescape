// **************************************************************************** //
// App Timer Function

// setInterval(timer, 500);

function timer() {
    var date = new Date("Mar 01, 2021 00:00:00").getTime();
    var now = new Date().getTime();
    var gap = date - now;

    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;

    var d = Math.floor(gap / days);
    var h = Math.floor((gap % days) / hours);
    var m = Math.floor((gap % hours) / minutes);
    var s = Math.floor((gap % minutes) / seconds);

    $("#day").text(d);
    $("#hour").text(h);
    $("#minute").text(m);
    $("#second").text(s);
}

// **************************************************************************** //
