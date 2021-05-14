// **************************************************************************** //
// App Clock Function

setInterval(clock, 500);

function clock() {
    let time = new Date();

    let hh = time.getHours() * 30;
    let mm = time.getMinutes() * 6;
    let ss = time.getSeconds() * 6;

    $("#hr").css({
        transform: `rotateZ(${hh + mm / 12}deg)`,
    });
    $("#min").css({
        transform: `rotateZ(${mm}deg)`,
    });
    $("#sec").css({
        transform: `rotateZ(${ss}deg)`,
    });
}

// **************************************************************************** //
