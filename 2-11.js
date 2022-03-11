// ES2015
let i = 0;
let a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
};

console.log(a.foo1);
console.log(a.foo2);
console.log(a.foo3);

let param = "size";
let config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config);
