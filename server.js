var express = require('express');
// const { DATE } = require('mysql/lib/protocol/constants/types');
// var portlink = require('./routes/router')
var app = express(); //순수실행 express모듈 인스턴스 app / 동사자체를 받음
var time = new Date(); //Date를 new를 통해서 생성(copy개념)/시스템자체-스케일이 훨씬큼 /앞자리대문자 C언어 운영체제에서옴!

var postsend = require('./api/postsend')
var getsend = require('./api/getsend');
const { post } = require('./routes/router');

app.set('port',8080)
app.get('/',(req,res) => {
    res.send(' /루트요청 있었음')
})
//리액트에서 비동기로 정보요청할 주소세팅
app.use('/postsend', postsend); //localhost:8080/postsend
app.use('/getsend', getsend);

app.listen(app.get('port'), () => {
    console.log(time + '콘솔에서 시간으로 확인해보면 알게 됨')
})
// app.get('/',function(req,res){
//     res.send('글자노출')
// })

// app.get('/me',function(req,res){
//     res.send('나의소개')
// })
// app.get('/portfolio',function(req,res){
//     res.send('나의작품')
// })
// app.get('/preinterview',function(req,res){
//     res.send('사전면접')
// })
// app.get('/contact',function(req,res){
//     res.send('면접제안')
// })
// app.get('/react',function(req,res){
//     res.send('리액트')
// })

// app.use('/mylink',portlink);

// app.listen(8080,function(){
//     console.log('서버구동')
// })