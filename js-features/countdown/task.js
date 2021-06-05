let timeLeft = 59;
setInterval (() => {
    let timer = document.getElementById("timer");
    timeLeft += -1;
    if(timeLeft >= 0) {
        timer.textContent = timeLeft;
    };
}, 1000);
