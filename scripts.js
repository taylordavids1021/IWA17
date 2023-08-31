// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = () => {
    const result = []

    for (let i = 0; i < getDaysInMonth.length ; i++) {
        result.push()
    }
    return result
}
let date = new Date();
date.setDate(1) // creates a new date object with the current date and time
let year = date.getFullYear(); // gets the current year
let month = date.getMonth(); // gets the current month (index based, 0-11)

const createData = () => {
    
    let day = document.querySelector(".table__cell"); // selects the element with class "calendar-dates"
    let currentDate = document.querySelector(".table__cell"); // selects the element with class "calendar-current-date"
    let prenexIcons = document.querySelectorAll(".table__cell");

    // first day
    let startDay = new Date(year, month, 1).getDay();

    // days of the month
    const daysInMonth = getDaysInMonth(date)
    
    // create array for the weeks
    const weeks = createArray(5)
    const dayOne = startDay
    const result = []
    const days = ''

    // loop to add the dates of the current month
    for (let i = 1; i <= dayOne; i++) {
    // check if the current date is today
    let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active": "";
        days = `<tr class="table__cell_" ${isToday}>${i}</tr>`;
    }
    for (const { weekIndex } of weeks) {
        result.push({
            weeks: weekIndex + 1,
            day: [30]
        })

        for (const { dayIndex } of dayOne ) {
            const days = (dayIndex - startDay) && (weekIndex * 7)  
            const isValid = days > 0 && days <= daysInMonth

            result[weekIndex].weeks.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? days : '',
            })
        }
    }
    return result
}

const addCell = (existing, classString, value) => {
   
    const result = /* html */ 
    `${existing}
    <td class="${classString}">
    &nbsp;${value}&nbsp;
    </td>
    <tr${existing}/tr>
    <td class="${classString}">
    &nbsp;${value}&nbsp;
    </td>
    <tr${existing}/tr>
    ${existing}
    <td class="${classString}">
    &nbsp;${value}&nbsp;
    </td>
    <tr${existing}/tr>
    ${existing}
    <td class="${classString}">
    &nbsp;${value}&nbsp;
    </td>
    <tr${existing}/tr>
    ${existing}
    <td class="${classString}">
    &nbsp;${value}&nbsp;
    </td>
    <tr${existing}/tr>
    ${existing}
    <td class="${classString}">
    &nbsp;${value}&nbsp;
    </td>
    <tr${existing}/tr>
    ${existing}
    <td class="${classString}">
    &nbsp;${value}&nbsp;
    </td>
    <tr${existing}/tr>
    ${existing}
    <td class="${classString}">
    &nbsp;${value}&nbsp;
    </td>`

    return result
}

const createHtml = (data) => {
    let result = ''

    for (const { weeks = '' } of MONTHS) {
        let inner = ''
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${weeks}`)
        
        for (const { dayOfWeek, value } of MONTHS) {
            const isToday = new Date(year, month, 1).getDay()
            const isWeekend = dayOfWeek === weeks || dayOfWeek === 1 
            const isAlternate = weeks % 2 === 0
        // for (let day = 1; day < 31; day++){
        //     const weekend = isWeekend
        //     return weekend
        // }
        let existing = isToday
        let classString = 'table__cell'

        if (classString) {classString = `${isToday} table__cell_`}
        if (classString) {classString = `${isWeekend} table__cell_`}
        if (classString) {classString = `${isAlternate} table__cell_`
        }
        inner = addCell()
             
        }
        result = 
        `${result}
        <tr>${inner}</tr>
        <tr>${inner}</tr>
        <tr>${inner}</tr>
        <tr>${inner}</tr>
        `
    }
    return result
}
// createHtml()
// createHtml()
// console.log(createHtml())
// // Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)