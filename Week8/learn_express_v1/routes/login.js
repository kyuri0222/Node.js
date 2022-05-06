// 8주차강의-(1) 18:24

const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req,res)=> {
    res.redirect('/login');
  });
  
router.get('/login', (req,res)=> {
    res.sendFile(path.join(__dirname,'./public/login.html'));
  });

  module.exports = router;
