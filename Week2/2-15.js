let array1 = ['one', 'two'];
let array2 = ['three', 'four']

let combined5 = [...array1, ...array2]; // ['one', 'two', 'three', 'four']
let combined6 = ['zero', ...array2, 'plus', ...array1];

console.log(combined5);
console.log(combined6);