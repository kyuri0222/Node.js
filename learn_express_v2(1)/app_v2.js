const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs').promises;

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

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
 res.sendFile(path.join(__dirname,'./users.json'));
});

app.use('/user', async(req,res,next)=> {
  req.users = JSON.parse(
    await fs.readFile(path.join(__dirname,'./users.json'))
  );
  next();
});

app.post('/user',async(req,res)=> {
  const{name,memo}=req.body;
  const id = Date.now();
  req.users[id]={name,memo};
  //console.log(users);
  await fs.writeFile(
    path.join(__dirname,'./users.json'),
    JSON.stringify(req.users)
  );
  res.end();
});

app.put('/user/:id', async(req,res)=> {
  const{name,memo}=req.body;
  req.users[req.params.id]={name,memo};
  //console.log(users);
  await fs.writeFile(
    path.join(__dirname,'./users.json'),
    JSON.stringify(req.users)
  );
  res.end();
});

app.delete('/user/:id',async(req,res)=> {
  delete req.users[req.params.id];
  await fs.writeFile(
    path.join(__dirname,'./users.json'),
    JSON.stringify(req.users)
  );
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
