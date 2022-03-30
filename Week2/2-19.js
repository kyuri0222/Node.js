// ES2015
let objs = {
  key1: "one",
  key2: "two",
};
let { key1: newKey1, key2, key3 = "default_key3_value" } = objs;

console.log(objs)
console.log(key3)