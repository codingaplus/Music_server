const express = require('express');//설치한 라이브 러리 첨부 해달라는거
const app = express(); //새로운 객체 만들어주는거
const fs=require('fs');
const cors=require('cors');
const path=require('path');
const {hostname} = require('os');
const bodyParser = require('body-parser');
const sanitize=require('sanitize');
var url=require('url');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());    
app.use(cors());
app.use('/', express.static('pages'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set("views", path.join(__dirname, "/pages")); //ejs파일 불러오는 경로를 ./pages/파일에서 그냥 '파일'이렇게 해도 되게끔 설정.


const port=4000;
app.listen(port, function(){
    console.log(`listen on ${port}`);
});

app.get('/',(req,res)=>{
    res.render('index');
});

// app.use('/play',require('./routes/playRouter'));
// app.get('/type/:name',(req,res)=>{
//     const {name}=req.params;
//     res.render(`${name}`);
// })

// app.get('/genre/:name',(req,res)=>{
//     const {name}=req.params;
//     res.render(`${name}`);
// })

// app.use('/search',require('./routes/search_Router'));


// //여기부터 게시판 부분
// app.use('/api/list',require('./routes/listRouter')); //게시판 메인

// app.get('/api/list/write',(req,res)=>{ //글 작성
//     res.render('write');
// });

// app.use('/api/list/read/:idx',require('./routes/list_detail_Router'));
// //여기까지 게시판 부분



// app.use('/api/movie',require('./routes/movieRouter'));

// app.use('/api/user',require('./routes/userRouter'));












//여기까지 사용하는거


// app.get('/board/list',(req,res)=>{
//     res.render('board_list.html')
// })
// app.get('/board/write',(req,res)=>{
//     res.render('board_write.html',{
//         content:list,
//         num:1,
//     })
// })

// app.use(express.urlencoded({extended:true,}))

// app.post('/board/write',(req,res)=>{
//     let board={...req.body};
//     console.log(list,board);
//     list.push(board);
//     console.log(list);
//     res.redirect('/board/list');
// })

// app.get('/board/view',(req,res)=>{
//     console.log(list);
//     res.render('board_view.html');
// })

// app.get('/pet',(req,res)=>{
//     res.send('hiw');
// })

// app.get('/type/:name',(req,res)=>{ //parms는 name : 뭐시기로 들어오는데 name에서 바로 받을 수 있음.
//     const {name} = req.params;
//     res.sendFile(__dirname+`/${name}.html`);
// })

// app.post('/pet',(req,res)=>{
//     const p = req.params;
//     console.log(p);
//     const b = req.body;
//     console.log(b);
// })



// app.get('/cat',(req, res)=>{
//       res.send('고양이');
// });














// app.get('/sound/:name',(req,res)=>{
//     const {name}=req.params; //name=dog로 들어오는데 dog가 바로 name으로 들어감
//     console.log(name)
    
//     if(name=="dog"){
//         res.json({'sound':'멍멍'})
//     }
//     else if(name=="cat"){
//         res.json({'sound':'야옹'})
//     }
//     else if(name=="pig"){
//         res.json({'sound':'꿀꿀'})
//     }
//     else{
//         res.json({'sound':'알 수 없음'})
//     }
// });
// app.get('/dog',(req, res)=>{
//     res.json({'sound':'멍멍'});
//     //json은 key:value로 되어있음
// });

// app.get('/cat',(req, res)=>{
//     res.send('고양이');
// });

// app.get('/user/:id',(req,res)=>{
//     // const q = req.params; //:id가 params로 들어가는거임
//     // console.log(q.id);
//     // res.send({'sound':q.id});
//     const q=req.query;
//     console.log(q);
// });


