//összehasonlítja a tömb elemeit, az eredmény egy single value

const numbers = [99, 25, 33, 46];
let minimum = numbers[0];

/*for (let i = 0; i< numbers.length; i++) {
    (minimum > numbers[i]) {
        minimum = numbers[i];
    }
}
console.log(minimum);*/

const reducer = (prev, curr) => Math.min(prev, curr);
minimum = numbers.reduce(reducer);

console.log(minimum)

// ----------------

const names = ['Alice', 'Bob', 'Alice', 'Tiff', 'Ubul'];

const countNames = {};

for (let i = 0; i < names.length; i++) {
    if (countNames[names[i]]) {
        countNames[names[i]]++; // vagy =+ 1
    } else {
        countNames[names[i]] = 1;
    }
}

console.log(countNames);

let countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {}); // ,{} --> {}-be fog returnolni
console.log(countedNames)