const nums = [40, 55, 128, 905, 77];

nums.forEach(function (value, index, array) {
  console.log(`${index}번째 요소 : ${value}`);
});

nums.forEach((value, index) => {
  console.log(`${index}번째 요소: ${value}`);
});

nums.forEach((value) => console.log(value));
