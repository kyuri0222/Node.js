// 8주차강의-(1) 18:24

const express = require('express');
const path = require('path');

const router = express.Router();

//req.cookies의 admit==true면 로그인 성공 메시지 전송
//false이면 /login 사이트로 redirect

// router.get('/', (req,res)=> {
//   console.log(req.signedCookies);
//   if(req.signedCookies.admit) res.send('<h1>Login Stuccess</h1>');
//   else res.redirect('/login');
// });

router.get('/', (req,res)=> {
    res.redirect('/login');
  });
  
router.get('/login', (req,res)=> {
    res.sendFile(path.join(__dirname,'./public/login.html'));
  });

router
.route('/admit')
  .get((req,res)=>{
    console.log(req.query);
    console.log(req.body);
    res.send(`username:${req.query.login}<br>  
    password:${req.query.password}`);
  })
  .post((req,res)=>{
    console.log(req.query);
    console.log(req.body);
    res.send(`username:${req.query.login}<br>
    password:${req.query.password}`);
  })

// router.post('/admit', (req,res)=>{
//   const {login,password} = req.body;
//   console.log(req.query);
//   console.log(login.password);

//   if(login=='guest'&& password=='7777'){
//     res.cookie('admit',true, {
//       // expires: new Date(Date.now()+ 3000),
//       maxAge: 600000,
//       httpOnly: true,
//       secure: false,f
//       path: '/',
//       signed : true, // 서명 쿠키 설정
//     });
//     // res.clearCookie('admit', true, {
//     //   httpOnly: true,
//     //   path: '/',
//     // });
//     res.redirect('/');
//   } else {
//     res.redirect('/login');
//   }
// });
 
  // router.post('/admit', (req,res)=>{
  //      console.log(req.query);
  //      console.log(req.body);
  //      res.send(`username:${req.query.login}<br>
  //      password:${req.query.password}`);
  //   })

  module.exports = router;