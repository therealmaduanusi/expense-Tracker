'use strict'

let expensesContainer = document.querySelector('.expenses')

async function trackers(url) {
    let response = await fetch(url);
    let data = await response.json()
    data.forEach(expense => {
        expensesContainer.innerHTML = `
        <div class="day1 numberOfDays">
            <div class="amounts">$${expense.amount ? 17.45 : null}</div>
            <div class="mon days"></div>
            <p>${expense.day ? 'mon' : null}</p>
        </div>
        
        <div class="day2 numberOfDays">
            <div class="amounts">$${expense.amount ? 34.91 : null}</div>
            <div class="tue days"></div>
            <p>${expense.day ? 'tue' : null}</p>
        </div>

        <div class="day3 numberOfDays">
            <div class="amounts">$${expense.amount ? 52.36 : null}</div>
            <div class="wed days-blue"></div>
            <p>${expense.day ? 'wed' : null}</p>
        </div>

        <div class="day4 numberOfDays">
            <div class="amounts">$${expense.amount ? 31.07 : null}</div>
            <div class="thus days"></div>
            <p>${expense.day ? 'thus' : null}</p>
        </div>
        
        <div class="day5 numberOfDays">
            <div class="amounts">$${expense.amount ? 23.39 : null}</div>
            <div class="fri days"></div>
            <p>${expense.day ? 'fri' : null}</p>
        </div>

        <div class="day6 numberOfDays">
            <div class="amounts">$${expense.amount ? 43.28 : null}</div>
            <div class="sat days"></div>
            <p>${expense.day ? 'sat' : null}</p>
        </div>

        <div class="day7 numberOfDays">
            <div class="amounts">$${expense.amount ? 25.48 : null}</div>
            <div class="sun days"></div>
            <p>${expense.day ? 'sun' : null}</p>
        </div>

        `
    });
}

trackers('data.json');