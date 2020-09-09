"use strict";

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };
    fix() {
        this.state *= 1.5;
    };
    set state(num) {
        if (num < 0) {
            this._state = 0;
        } else if (num > 100) {
            this._state = 100;
        } else {
            this._state = num;
        }
    };
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
    }
}

// ---------------------------------------------------------------------

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    };
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    };
    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    };
    giveBookByName(bookName) {
        for (let book of this.books) {
            if (book.name === bookName) {
                let pos = this.books.indexOf(book);
                let array = this.books.splice(pos, 1);
                for (let item of array) {
                    return item;
                }
            }
        }
        return null;
    }
}

// --------------------------------------------------------------------

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = [];
    };
    getName() {
        return this.name;
    };
    getSubject(subject) {
        for (let sub of this.subjects) {
            if (sub.name === subject) {
                return sub;
            }
        }
        return null;
    }
    addSubject(name) {
        this.subjects.push(new Subject(name));
    };
    getCountOfGrades(subject) {
        let sub = this.getSubject(subject);
        if (sub != null) {
            return sub.grades.length;
        }
        return 0;
    };
    addGrade(grade, subject) {
        let sub = this.getSubject(subject);
        if (grade >= 1 && grade <= 5) {
            if (sub != null) {
                sub.grades.push(grade);
            } else {
                this.addSubject(subject);
                this.getSubject(subject).grades.push(grade);
            }
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по \n
            предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }
        return this.getCountOfGrades(subject);
    };
    getAverageBySubject(subject) {
        let sub = this.getSubject(subject);
        if (sub === null) {
            return 0;
        }
        let count = this.getCountOfGrades(subject);
        let sum = 0;
        for (let grade of sub.grades) {
            sum += grade;
        }
        try {
            return sum / count;
        } catch(e) {
            return 0;
        }
    };
    getTotalAverage() {
        let sumOfAvg = 0;
        let countOfSub = 0;
        for (let sub of this.subjects) {
            let avg = this.getAverageBySubject(sub.name);
            sumOfAvg += avg;
            countOfSub++;
        }
        if (sumOfAvg === 0) {
            return 0;
        }
        return sumOfAvg / countOfSub;
    }
}

class Subject {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }
}