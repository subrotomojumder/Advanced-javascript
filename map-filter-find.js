const numbers = [4, 6, 5, 10, 3];

// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output)

// const result = numbers.map(function(element) {
//     return element*element;
// });

// const result = numbers.map(element => element*element)

// console.log(result)

const bigger = numbers.filter(x => x < 5)
const isThere = numbers.find(x => x > 5);
console.log(isThere)