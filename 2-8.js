let name = "Park";
let age = 20;
let place = { city: "Seoul", country: "Korea" };

// ES2015 이전
let person = {
  name: name,
  age: age,
  place: place,
};
console.log(person);

// ES2015
let person2 = {
  name,
  age,
  place,
};
console.log(person2);
