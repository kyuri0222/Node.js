const express = require('express');
const path = require('path');
const multer = require('multer');

const router = express.Router();

const upload = multer ({dest : 'uploads/'});

router.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'../public/upload.html'));
  });

 router.post('/', upload.single('image'),(req,res)=> {
   console.log(req.file,req.body);
   res.send('Uploaded!');
 });

module.exports = router;