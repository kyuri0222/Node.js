// ES2015 객체 전개연산자
let obj1 = { one: 1, two: 2, other: 0 };
let obj2 = { three: 3, four: 4, other: -1 };

let combined = {
  ...obj1,
  ...obj2,
}; // combined = { one: 1, two: 2, other: -1, three: 3, four: 4 }
console.log(combined);

combined = {
  ...obj2,
  ...obj1,
}; // combined = { three: 3, four: 4, other: 0, one: 1, two: 2 }
console.log(combined);


let { other, ...others } = combined;
// other = 0, others = { three: 3, four: 4, one: 1, two: 2 }
console.log(other,others);
