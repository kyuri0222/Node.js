
const express = require('express');
const path = require('path');

const router = express.Router();

// 아래 코드에서 upload 삭제
router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname,'./public/upload.html'));
  });

module.exports = router;





// 10주차 수정 내용

// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const router = express.Router();

// // 수정
// const storage = multer.diskStorage({
//   destination: funtrion(req,file,cb){
//     cb(null,'uploads/');
//   },
//   filename : function(req,file,cb){
//     const ext = path.extname(file.originalname);
//     cb(null, path.basename(file.originalname,ext)+Date.now()+ext);
//   },
// });

// // const upload = multer({dest:'uploads/'});

// // 아래 코드에서 upload 삭제
// router.get('/', (req,res)=> {
//     res.sendFile(path.join(__dirname,'./public/upload.html'));
//   });

// // 추가
// router.post('/',upload.single('image'),(req,res)=>{
//   console.log(req.file,req.body);
//   res.send('Uploaded!');
// });

// module.exports = router;
