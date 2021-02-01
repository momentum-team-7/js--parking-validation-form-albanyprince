// console.log('Add validation!');
const form = document.querySelector('.container')
const  carYear= document.querySelector('#car-year')
const carMake= document.querySelector('#car-make') 
const carModel = document.querySelector('#car-model')
const startDate = document.querySelector('#start-date')
const days = document.querySelector('#days')
const creditCard = document.querySelector('#credit-card')
const cvv = document.querySelector('#CVV')
const expiration = document.querySelector('#expiration')

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
        validMsgEl.innerText = totalExpense()
    }
}
function totalExpense() {
    const totalDays = document.querySelector('#days').value 
    let starDate = document.querySelector('#days').valueAsDate
    let startDay = startDate.getDay()
    console.log("day of the week", startDay)
    console.log("start date", typeof startDate, startDate)
    getParkingDates (startDate, totalDays)
    let fullPrice = totalDays * fullPrice
    return 'Your total cost is $ ${fullPrice}'
    )
}
function getParkingDates(startDate, numOfDays) {
    let copyEndDate = new Date(Number(startDate))
    console.log("number of days", numOfDays)
    let dayArray = []
    dayArray.push(startDate.getDay())
    console.log("day array", dayArray)
    for (let i = 1; i <= numOfDays; i++) {
        endDate = copyEndDate.setDate(startDate.getDate() + i)
        endDay = new Date(endDate).getDay()
        dayArray.push(endDay)
        console.log("the end day's number code value is: ", endDay, i)   
    }

  console.log("day array", dayArray)  
}
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