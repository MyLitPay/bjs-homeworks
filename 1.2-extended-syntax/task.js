"use strict";

function getResult(a,b,c){

    const discr = b ** 2 - 4 * a * c;
    let result = [];

    if (discr === 0) {
        result.push(-b / (2 * a));
    } else if (discr > 0) {
        result.push((-b + Math.sqrt(discr)) / (2 * a));
        result.push((-b - Math.sqrt(discr)) / (2 * a));
    }

    return result;
}

function getAverageMark(marks){
    let len = marks.length;
    if (len === 0) {
        return 0;
    }

    if (len > 5) {
        console.log("Count of marks more then 5");
        marks.splice(5);
        len = 5;
    }

    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }

    return sum / len;
}

function askDrink(name,dateOfBirthday){

    const date = new Date();
    const currentYear = date.getFullYear();

    const bYear = dateOfBirthday.getFullYear();
    const bMonth = dateOfBirthday.getMonth() + 1;
    const bDay = dateOfBirthday.getDate();

    let yearDiff = currentYear - bYear;
    if (new Date(currentYear, bMonth, bDay) > date) {
        yearDiff -= 1;
    }
    
    if (yearDiff >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}