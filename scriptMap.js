const array1 = [2, 4, 8, 18];
const map1 = array1.map(x => x * 3);
console.log(map1);


const array2 = [2, 4, 8, 14];
const map2 = array.map(myFunction);

function myFunction(num) {
    return num * 5;
}
console.log(map2);


const array3 = [2, 4, 8, 14];
const map3 = array3.map((x, i) => x * i);
console.log(map3);


let array4 = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
]

let reformattedArray = array4.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj
})
console.log(reformattedArray);

var myObject = { 'a': 1, 'b': 2, 'c': 3 };

Object.keys(myObject).map(function (key, index) {
    myObject[key] *= 2;
});

console.log(myObject);