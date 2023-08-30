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

const createArray = (length) => {
    const result = []

    for (var i = 0; i < MONTHS.length; i++) {
        result.push()
    }
    return result
}

const createData = () => {
    // new date
    const current = new Date()
    current.setDate()

    // first day
    const startDay = current.getDate()
   
    // days of the month
    const daysInMonth = getDaysInMonth(current)
    
    const weeks = createArray(5)
    const dayOne = startDay
    const result = []

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: []
        })

        for (const dayIndex of dayOne ) {
            const day = (dayIndex - startDay) && (weekIndex * 7)  
            const isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
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
    </td>`

    return result
}

const createHtml = (data) => {
    let result = ''

    for (const { week } of MONTHS) {
        let inner = ""
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
    
        for (const { dayOfWeek, value } of MONTHS) {
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek === value || dayOfWeek === value 
            const isAlternate = week % 2 === 0
            
						let classString = 'table__cell'

            if (isToday) classString = `${isToday} table__cell_`
            if (isWeekend) classString = `${isWeekend} table__cell_`
            if (isAlternate) classString = `${isAlternate} table__cell_`
            inner = addCell()
        }
        
        result = 
        `${result}
        <tr>${inner}</tr>
        `
    }
    return result
}

// // Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)