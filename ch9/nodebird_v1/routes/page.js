// page.js는 경로 바꿔주는 것

const express = require('express');

const router = express.Router();

router.get('/profile', (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird' });
});

router.get('/join', (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
});

router.get('/', (req, res, next) => {
  res.render('main', { title: 'NodeBird' });
});

module.exports = router;