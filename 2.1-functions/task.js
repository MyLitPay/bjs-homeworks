function getSolutions(a, b, c) {
    const d = b**2 - (4 * a * c);

    if (d < 0) {
        return {
            D: d,
            roots: []
        }
    } else if (d === 0) {
        let x1 = -b / (2 * a);
        return {
            D: d,
            roots: [x1]
        }
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / 2 * a;
        let x2 = (-b - Math.sqrt(d)) / 2 * a;
        return {
            D: d,
            roots: [x1, x2]
        }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    
    if (result.roots.length === 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.roots.length === 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

// ------------------------------------------------------------------------------

// let data = {
//     algebra: [1, 2, 3],
//     geometry: [2, 3, 4],
//     russian: [3, 4, 5]
// }

let marks = [];

function getAverageScore(data) {
    let score = {};
    let sum = 0;
    let count = 0;

    for (let prop in data) {
        marks = data[prop];
        let avM =  getAverageMark(marks);
        score[prop] = avM;
        sum += avM;
        count++;
    }

    let average = sum / count;
    if (count === 0) {
        average = 0;
    }
    score.average = average;

    return score;
}

// console.log(getAverageScore(data));


function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    let sum = marks.reduce((a, b) => a + b);
    return sum / marks.length;
}

// -----------------------------------------------------------------------------

function getPersonData(secretData) {

    let name = {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };

    console.log(name);

}

function getDecodedValue(secret) {
    if (secret === 0) {
        return "Родриго";
    } else {
        return "Эмильо";
    } 
}
