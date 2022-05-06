const express = require('express');
const path = require('path');

const router = express.Router();

// 아래 코드에서 upload 삭제
router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname,'./public/upload.html'));
  });

module.exports = router;
