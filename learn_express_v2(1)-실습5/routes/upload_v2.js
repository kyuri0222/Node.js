const express = require('express');
const path = require('path');
const multer = require('multer');

const router = express.Router();

const storgae = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'uploads/');
    },
    filename: function(req,file,cb){
        const ext = path.extname(file.originalname);
        cb(null,path.basename(file.originalname, ext) + Date.now()+ext);
    },
});

const upload = multer ({
    storage : storage,
    limits: {fileSize: 5 * 1024 * 1024},
});

router.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'../public/upload.html'));
  });

 router.post('/', upload.single('image'),(req,res)=> {
   console.log(req.file,req.body);
   res.send('Uploaded!');
 });

module.exports = router;