let date = new Date(); // creates a new date object with the current date and time
let year = date.getFullYear(); // gets the current year
let month = date.getMonth(); // gets the current month (index based, 0-11)

const day = document.querySelector(".table__cell"); // selects the element with class "calendar-dates"
const currdate = document.querySelector(".table__cell"); // selects the element with class "calendar-current-date"
const prenexIcons =document.querySelectorAll(".table__cell"); // selects all elements with class "calendar-navigation span"

const months=[
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
"December"]; // array of month names

// function to generate the calendar
const manipulate=()=> {
    // get the first day of the month
    let dayone=new Date(year, month, 1).getDay();

    // get the last date of the month
    let lastdate=new Date(year, month + 1, 0).getDate();

    // get the day of the last date of the month
    let dayend=new Date(year, month, lastdate).getDay();

    // get the last date of the previous month
    let monthlastdate=new Date(year, month, 0).getDate();

    let lit=""; // variable to store the generated calendar HTML

    // loop to add the last dates of the previous month
    for (let i=dayone; i > 0; i--) {
lit+=`<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    // loop to add the dates of the current month
    for (let i=1; i <=lastdate; i++) {
// check if the current date is today
let isToday=i===date.getDate() && month===new Date().getMonth() && year===new Date().getFullYear() ? "active": "";
lit+=`<li class="${isToday}">${i}</li>`;
    }

    // loop to add the first dates of the next month
    for (let i=dayend; i < 6; i++) {
lit+=`<li class="inactive">${i - dayend + 1}</li>`
    }

    // update the text of the current date element with the formatted current month and year
    currdate.innerText=`${months[month]} ${year}`;

    // update the HTML of the dates element with the generated calendar
    day.innerHTML=lit;
}

manipulate();