// ES2015 이전
let robot = {
  name: "smarty",
  say: function (word) {
    console.log(word);
    console.log(` ${this.name} .`);
  },
};

// ES2015
let robot2 = {
  name: "smarty2",
  say(word) {
    console.log(word);
    console.log(` ${this.name} .`);
  },
};
robot.say(" ?");
robot2.say(" ?");
