"use strict";

String.prototype.isPalindrome = function() {
    let str = this.replace(/ /g, "").toLowerCase();
    let newStr = str.split("").reverse().join("");
    if (newStr === str) {
        return true;
    } else {
        return false;
    }
}

// ------------------------------------------------------------------

function getAverageMark(marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    let avg = sum / marks.length;
    let roundedAverage = Math.round(avg);

    if (marks.length === 0) {
        return 0;
    }
    return roundedAverage;
}

// --------------------------------------------------------------------


function checkBirthday(birthday) {
    const msInOrdinaryYear = 31536000000;
    const msInVisYear = 31622400000;
    const msInYear = ((3 * msInOrdinaryYear) + msInVisYear) / 4;

    let now = Date.now();
    let array = birthday.split("-");
    let bday = new Date(array[0], array[1] - 1, array[2]);
    let diff = now - (+bday);
    let age = diff / msInYear;
    return Math.floor(age) >= 18 ? true : false;
}