const connection=require('../dbconfig');
const express = require('express');
const app = express(); //새로운 객체 만들어주는거
app.set('view engine', 'ejs');

const listCtrl={
    getlist : async(req, res, next)=>{
        connection.query('SELECT * FROM list',(error,rows)=>{
            if(error) throw error;
            console.log(rows);
            res.render('../pages/list', {rows: rows});
        });
    },
    insertlist : async(req,res)=>{
        const {name, title, content} = req.body;
        let today = new Date();   

        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        const day=year + '. ' + month + '. ' + date;
        const sql = `INSERT INTO list(name, title, content, day)VALUES('${name}','${title}','${content}','${day}');`
        connection.query(
            sql,(error,rows)=>{
                if(error) throw error;
                //res.send(rows);
                console.log(rows);
            }
        )
    },
    detaillist : async(req,res,next)=>{
        const {idx}=req.params;
        console.log("왜 이건 안됨");
        console.log(idx);
        connection.query(`SELECT * FROM (list) WHERE (idx=${idx});`,(error,rows)=>{
            if(error) throw error;
            res.render('../pages/list_read', {data: rows[0]});
        });
    }
}





// router.get('/read/:idx',function(req,res,next)
//     {
//     var idx = req.params.idx;
//         var sql = "select idx, name, title, content, day";
//         conn.query(sql,[idx], function(err,row)
//         {
//             if(err) console.error(err);
//             res.render('read', {title:"글 상세", row:row[0]});
//         });
//     });
    

module.exports=listCtrl;
