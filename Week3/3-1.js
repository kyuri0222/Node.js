//1. Promise 생성
const promise = new Promise ((resolve, reject) => {
    console.log('파일 읽기 시작...');
    setTimeout(()=> {
        let read = true;
        if(read) resolve('파일 읽기 성공');
        else reject(new Error('파일 읽기 실패'));
    }, 2000);
});

//2. then,catch,finally
promise
    .then(value=> {
        console.log(value);
    })
    .catch(error=> {
        console.log(error);
    })
    .finally(()=> {
        console.log('finally');
    });

