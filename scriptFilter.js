//filter: új tömbben megcsinálja ugyanazt, amit a for + if ciklussal tudnánk

const ages = [32, 33, 16, 40];
function testFor() {
    const resultArr = [];
    for (const age of ages) {
        if (age >= 18) {
            resultArr.push(age);
        }
    }
    return resultArr;
}
console.log(testFor())


const result = ages.filter(checkAdult);
function checkAdult(age) {
    return age >= 18;
}

console.log(result);

/*
const numsList = [12,43,213,86,11];
const namesArray = ['Bob', 'Sam', 'Joe', 'Dave', 'David'];
console.log(numsList.filter((num) => num > 20));
console.log(numsList.filter((num) => num < 100));
console.log(namesArray.filter((name) => name[0] === 'D'));
*/