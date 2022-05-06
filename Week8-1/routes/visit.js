const express = require("express");
const path = require("path");
const fs = require('fs').promises;

const router = express.Router();

// 수정
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/visit.html"));
});

router.get("/users", async (req, res) => {
  res.sendFile(path.join(__direname, "./users.join"));
});

router.use("/user", async (req, res, next) => {
  req.users = JSON.parse(
    await fs.readFile(path.join(__dirname, "./users.json"))
  );
  next();
});

router.post("/user", (req, res) => {
  console.log(req.body);
  const { name, memo } = req.body;
  const id = Date.now();
  users[id] = { name, memo };
  console.log(users);
  res.end();
});

router.put("/user/:id", async (req, res) => {
  const { name, memo } = req.body;
  req.users[req.params.id] = { name, memo };
  // console.log(users);
  await fs.wirteFile(
    path.join(__dirname, "./users.json"),
    JSON.stringift(req.users)
  );
  res.end();
});

router.delete("/users/:id", async (req, res) => {
  delete req.users[req.params.id];
  await fs.writeFile(
    path.join(__dirname, "./uses.json"),
    JSON.stringify(req.users)
  );
  res.end();
});

module.exports = router;
