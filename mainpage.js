/* Inputs */
let budget = document.getElementById('budget')
let expenses_title = document.getElementById('expenses_title')
let expenses_amount = document.getElementById('expenses_amount')
/* Display */
let budget_amount = document.getElementById('budget_amount')
let balance = document.getElementById("final_balance")
let expenses_total = document.getElementById('expenses_total')
let title = document.getElementById('title')

function calc(){
    budget_amount.innerHTML = "$ " + budget.value
    expenses_total.innerHTML = "$ " + expenses_amount.value
    title.innerHTML = expenses_title.value
    let final_balance = budget.value - expenses_amount.value
    balance.innerHTML = "$ " + final_balance
}

