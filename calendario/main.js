const monthEl = document.querySelector(".date h1");
const FullDate = document.querySelector(".date p");
const daysEl = document.querySelector(".days");
const clicked = document.querySelector(".days div")

let monthIndex = new Date().getMonth();
let yearIndex = new Date().getFullYear();

function clickedDay(){}

function monthUp() {
    monthIndex += 1;
    if (monthIndex > 11) {
        monthIndex = 0;
        yearIndex += 1;    
    }
    calender();
}

function monthDown() {
    monthIndex -= 1;
    if(monthIndex < 0){
        monthIndex = 11;
        yearIndex -= 1;
    }
    calender();
}

console.log(clicked)

function calender(){
    const lastDay = new Date(yearIndex, monthIndex + 1, 0).getDate();
    let firstDay = new Date(yearIndex, monthIndex, 1).getDay() - 1;
    let today = new Date(yearIndex, monthIndex, new Date().getDate());

    if (firstDay < 0){
        firstDay = 6
    }
    
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    
    monthEl.innerText = months[monthIndex];
    FullDate.innerText = today.toDateString();
    
    let days = "";
    
    for (let i = firstDay; i > 0; i--) {
      days += `<div class="empty"></div>`;
    }
    
    for (let i = 1; i <= lastDay; i++) {
      if (i == new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
      } else {
        days += `<div>${i}</div>`;
      }
    }
    
    daysEl.innerHTML = days;
}

calender();
