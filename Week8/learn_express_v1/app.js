//import modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//import routers
const loginRouter = require('./routes_실행/login');
const visitRouter = require('./routes_실행/visit');
const uploadRouter = require('./routes_실행/upload');

const app = express();
app.set('port', process.env.PORT || 3000);

// express 내부 & 외부 middlewares
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

// 요청 경로에 따라 router 실행
app.use('/', loginRouter);
app.use('/visit', visitRouter);
app.use('/upload', uploadRouter);

// 404 에러처리 미들웨어
app.use((req, res, next) => {
    res.status(404).send(`${req.method} ${req.path} is NOT FOUND`);
  });
  
// 서버 에러처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something broke!');
  });

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}에서 대기중`);
  });