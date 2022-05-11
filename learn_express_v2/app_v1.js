const express = require('express');
const { readFileSync } = require('fs');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

const users = {}; // 데이터 저장용

// 라우터 미들웨어들
app.get('/',(req,res)=>{
  res.redirect('/login');
});

app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname,'./public/login.html'));
});

app.get('/visit',(req,res)=> {
  res.sendFile(path.join(__dirname,'./public/visit.html'));
});

app.get('/upload',(req,res)=> {
  res.sendFile(path.join(__dirname,'./public/upload.html'));
});

app.get('/users', async(req,res)=> {
  res.json(users);
  console.log(users);
});

app.post('/user',(req,res)=> {
  console.log(req.body);
  const{name,memo}=req.body;
  const id = Date.now();
  users[id]={name,memo};
  console.log(users);
  res.end();
});

app.put('/user/:id', (req,res)=> {
  console.log(req.body);
  const{name,memo}=req.body;
  users[req.params.id]={name,memo};
  console.log(users);
  res.end();
});

app.delete('/user/:id',(req,res)=> {
  delete users[req.params.id];
  res.end();
}); 

// 404 에러처리 미들웨어
app.use((req, res, next) => {
  res.status(404).send(`${req.method} ${req.path} is NOT FOUND`);
  // res.status(404).end();
  // res.sendStatus(404);
});

// 서버 에러처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}에서 대기중`);
});
