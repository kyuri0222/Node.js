const express = require('express');
const path = require('path');

const app = express();

// 미들웨어의 순서는 중요해!

app.set('port', process.env.PORT || 3000); // 서버 종료되기 전까지 값 유지돼

app.use((req,res,next) => {
    console.log(req.path);
    next();
});

app.get('/',(req,res) => {
    // res.send('Hello Express!'); //res.send 다음에는 문구도 넣을 수 있고 <h1> 같은 것도 넣을 수 있다. 객체나 배열도 가능
    // res.send({ name:'Happy', age:6 }); 
    // res.json({ name:'Happy', age:6 });
    // res.sendFile(__dirname+'/index.html');
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/users',(req,res) => {
    res.json({ name:'Happy', age:6 });
});


app.get('/user/:id', (req,res)=> { 
    // res.json(req.params); 
    res.send(`${req.params.id}님 반갑습니다!`); 
});

app.get('*',(req,res) => {
    // res.status(404).send(`${req.path} is NOT FOUND`);
    // res.status(404).end();
    // res.sendStatus(404);
    // res.redirect('/');
    if (req.query) {
        console.log(req.query);
        console.log(`${req.query.title},${req.query.year}인 책을 검색 중... `);
        res.send('query test');
    } else res.redirect('/');
});

app.listen(app.get('port'),()=> {
    console.log('https://localhost:3000에서 대기중');
});