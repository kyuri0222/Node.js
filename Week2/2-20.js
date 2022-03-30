// ES2015
let { a, b } = { a: 10, b: 20 };
console.log(a); // 10
console.log(b); // 20

let { c, d, ...rest } = { c: 30, d: 40, e: 50, f: 60 };
console.log(c); // 30
console.log(d); // 40
console.log(rest); // {e: 50, f: 60}
