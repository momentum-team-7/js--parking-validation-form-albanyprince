// console.log('Add validation!');
const form = document.querySelector('.container')
// const carYear= document.querySelector('#car-year')
// const carMake= document.querySelector('#car-make') 
// const carModel = document.querySelector('#car-model')
// const startDate = document.querySelector('#start-date')
// const days = document.querySelector('#days')
// const creditCard = document.querySelector('#credit-card')
// const cvv = document.querySelector('#CVV')
// const expiration = document.querySelector('#expiration')
let formIsValid

window.addEventListener('submit', event => {
    event.preventDefault()
})    

// form.addEventListener('click', e => {
    // console.log(e.target)
// })
// number 4

form.addEventListener('submit', validate)

// showTotalCost()
function validate (event) {
    formIsValid = true
   
    confirmValidForm()
}
function confirmValidForm () {
    if (true) {
        const validMsgEl = document.querySelector('#total')
        
        const fullPrice = getParkingDates()
        validMsgEl.innerText = `Your total cost is $ ${fullPrice}`
    }
}
// function totalExpense() {
//     // let totalDays = document.querySelector('#days').value 
//     // let startDate = document.querySelector('#start-date').value
//     // console.log("day of the week", startDate)
//     // console.log("start date", typeof startDate, startDate)
//     // getParkingDates (startDate, totalDays)
//     // let fullPrice = totalDays * fullPrice
//     return 'Your total cost is $ ${fullPrice}'
    
// }
function getParkingDates() {
    let startDate = document.querySelector('#start-date').value
    // let copyEndDate = startDate.value
    // console.log("number of days", numOfDays)
    let numDays = parseInt(document.querySelector ('#days').value, 10)
    let dayArray = []
    let day = new Date(startDate)
    console.log("day array", dayArray)
    for (let i = 1; i <= numDays; i++) {
           day = new Date(day.setDate(day.getDate() + 1) )
           console.log('day ', day)
           dayArray.push(day.getDay())
    }  return dayArray
        .map(day => (day > 0 && day < 6 ? 5:7))
        .reduce((fullPrice, cost) => {
            return fullPrice += cost
        },0)
//   console.log("day array", dayArray)  
}
// function getParkingDates OG:
// endDate = copyEndDate.setDate(startDate.getDate() + i)
        // endDay = new Date(endDate).getDay()
        // dayArray.push(copyEndDate.getDay())
        // dayArray.push(endDay)
        // console.log("the end day's number code value is: ", endDay, i)
// function totalCost (){
//     var start = new Date()
//     var end = new Date()
//     var diff = 0
//     var days = 1000 * 60 *60 * 24
//     diff  = end - start
//     console.log(Math.floor(diff / days) + 'days passed since start')

//     when('days passed since start' * 5)
//     return totalCost

// }
    // 