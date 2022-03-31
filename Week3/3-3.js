//callback hell이 있는 코드

function loginUser(id,password,callback){
        setTimeout(()=> {
            console.log('사용자 정보 얻음');
            callback({userId:id });
        }, 3000);
}

function getUserVideos(id,callback){
    setTimeout(()=>{
        callback(['video1','video2','video3']);
    }, 2000);
}

function videoDetails(video,callback){
    setTimeout(()=>{
        callback('비디오 제목은...');
    }, 2000);
}

loginUser('krkim',123456,(user)=>{
    console.log('${user.userId}님 환영합니다.');
    getUserVideos(user.userID,(vedios)=> {
        console.log(vedios);
        videoDetails(vedios[0], (title)=> {
            console.log(title);
        });
    });
});