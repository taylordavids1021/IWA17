

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

    for (let i =0; i <length; i++) {
        result.push(i)
    }

    return result
}
// create day and weeks function
  const createData = () => {
    // new date
     const current = new Date()
     current.setDate(1)
    // current date
    const startDay = current.getDay()
    // current date in the month
    const daysInMonth = getDaysInMonth(current)
    // weeks array
    const weeks = createArray(5)
    // days array
    const days = createArray(7)
    const result = []

   for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: []
        })

         for (const dayIndex  of days ) {
            
           const day = (dayIndex - startDay) + (weekIndex * 7 ) +1
           
            const isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
            })
        }
    }

    return result
}
// arrow function to add new date in cell
 const addCell = (existing, classString, value) => {
   const result = /* html */ `
        ${existing}
        <td class="${classString}">
             &nbsp;${value}&nbsp;
        </td>
        `
 
    return result
}
// arrow function to add data in html
const createHtml = (data) => {
    // days and weeks in a for loop
      let result = ''
     for (const {week, days} of data ) {
        let inner = ""
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
        // day of the week , value of days in a loop = truthly
        for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
            const isAlternate = week % 2 === 0
            
			let classString = 'table__cell'
            // replace outcome in <tr></tr>
            if (isToday){classString = `${classString} table__cell_today`}
            if (isWeekend){ classString = `${classString} table__cell_weekend`}
            if (isAlternate){classString = `${classString} table__cell_alternate`}
            inner = addCell(inner,classString, value)
        }
        // add inner results 
        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    // return results
    return result;
}

//  Only edit above


const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)