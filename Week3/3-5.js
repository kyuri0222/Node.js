//3-5.js를 async와 await로 바꾼 코드
function loginUser(id,password){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log('사용자 정보 얻음');
            resolve({userId:id });
        }, 3000);
    });
}

function getUserVideos(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['video1','video2','video3']);
        }, 2000);
    });
}

function videoDetails(video){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('비디오 제목은...');
        }, 2000);
    });
}
//위에까지는 동일

const loginGetVideos = async(id,password)=>{
    let user = await loginUser(id,password);
    console.log(`${user.userId}님 환영합니다.`);
    let videos = await getUserVideos(user.id);
    console.log(videos);
    let details = await loginUser(id,password);
    console.log(details);
} 

loginGetVideos('krkim',123456); 