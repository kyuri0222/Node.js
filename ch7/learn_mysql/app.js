const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nunjucks = require('nunjucks');

// import routers
// const loginRouter = require('./routes/login');
// const visitRouter = require('./routes/visit');
// const uploadRouter = require('./routes/upload');

const {sequelize} = require('./models');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine','html');
nunjucks.configure('views', {
  express : app,
  watch : true,
});

sequelize.sync({force : false})
.then(()=>{
  console.log('데이터베이스 연결 성공');
})
.catch((err)=>{
  console.error(err);
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
  const error = new Error (`${req.method} ${req.url}라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

// 서버 에러처리 미들웨어
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '빈 포트에서 대기 중');
});