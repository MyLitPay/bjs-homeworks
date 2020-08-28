"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(percent)) {
        return `Параметр 'persent' содержит неправильное значение ${percent}`
    }
    if (isNaN(contribution)) {
        return `Параметр 'contribution' содержит неправильное значение ${contribution}`
    }
    if (isNaN(amount)) {
        return `Параметр 'amount' содержит неправильное значение ${amount}`
    }

    let sumOfCredit = amount - contribution;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const creditYear = date.getFullYear();
    const creditMonth = date.getMonth();
    const year = creditYear - currentYear;
    
    let countOfMonth = year * 12;
    if (creditMonth > currentMonth) {
        countOfMonth += (creditMonth - currentMonth);
    } else if (creditMonth < currentMonth) {
        countOfMonth -= (currentMonth - creditMonth);
    }

    let p = (1 / 12) * (percent / 100);
    let monthPayment = sumOfCredit * (p + p / (((1 + p)**countOfMonth) - 1));
    let fullSum = (monthPayment * countOfMonth).toFixed(2);

    let totalAmount = Number.parseFloat(fullSum);
    console.log(totalAmount);
    return totalAmount;
    
}

function getGreeting(name) {

    if (name === "" || name === null || name === undefined) {
        return "Привет, мир! Меня зовут Аноним"
    }

    const greeting = `Привет, мир! Меня зовут ${name}`;

    console.log(greeting);
    return greeting;
}