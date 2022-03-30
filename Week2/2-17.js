// ES2015
let lists = ["apple", "mango"];
[item1, item2, item3 = "grape"] = lists;
console.log(item1, item2, item3);

// 두 변수 값 교환
let x = 1,
  y = 3;
[x, y] = [y, x];
console.log(x, y);