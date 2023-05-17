const hourEL = document.querySelector(".hour");
const second = document.querySelector(".sec");
const minute = document.querySelector(".min");

function updateClock(){
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const hourDeg = (hour / 12) * 360;
    hourEL.style.transform = `rotate(${hourDeg}deg)`;
    const minDeg = (min / 60) * 360;
    minute.style.transform = `rotate(${minDeg}deg)`;
    const secDeg = (sec / 60) * 360;
    second.style.transform = `rotate(${secDeg}deg)`;
}


setInterval(updateClock, 1000);