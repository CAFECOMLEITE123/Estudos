const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secundsEl = document.getElementById("secunds");

const readyIN = "30 Nov 2025";

function contador(){

    const readyINDate = new Date(readyIN);
    const currentDate = new Date();

    const totalSecunds = (readyINDate - currentDate) / 1000;

    const days = Math.floor(totalSecunds / 3600 / 24);
    const hours = Math.floor(totalSecunds / 3600) % 24;
    const mins = Math.floor(totalSecunds / 60) % 60;
    const secunds = Math.floor(totalSecunds) %60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secundsEl.innerHTML = formatTime(secunds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
};


contador()

setInterval(contador, 1000);

