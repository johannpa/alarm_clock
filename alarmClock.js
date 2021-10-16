let timer = document.getElementById("timer");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let startstop = document.getElementById("startstop");

let currentTime;
let alarmElement;
let activeAlarm = false;
let sound = new Audio("alarm.mp3");
sound.loop= true;

showTime = () => {
    let now = new Date();
    currentTime = now.toLocaleTimeString();
    

    if(currentTime === alarmElement){
        sound.play();
    }

    timer.textContent = currentTime;

    setTimeout(showTime,1000);
}

showTime();

addMinSec = id => {
    let select = id;
    let min = 59;

    for(i = 0; i<=min; i++){
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
    }
}

addHour = id => {
    let select = id;
    let hour = 23;

    for(i = 0; i<=hour; i++){
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
    }
}

addHour(hours);
addMinSec(seconds);
addMinSec(minutes);

startstop.onclick = function() {
    if(activeAlarm === false){
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;

        alarmElement = hours.value + ":" + minutes.value + ":" + seconds.value;
        this.textContent = "Clear alarm";
        activeAlarm = true;
    }
    else{
        hours.disabled = false;
        minutes.disabled = false;
        seconds.disabled = false;

        sound.pause();
        this.textContent = "Set Alarm";
        activeAlarm = false;
    }
}
