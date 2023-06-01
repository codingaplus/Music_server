const { error } = require('console');
const connection=require('../dbconfig');
const express = require('express');
const app = express(); //새로운 객체 만들어주는거
app.set('view engine', 'ejs');
var url=require('url');
const playCtrl={
    getplay : async(req, res, next)=>{
        var query = (url.parse(req.url, true).query.query);
        connection.query(`UPDATE music SET hit = hit +1 WHERE title='${query}'`);
        connection.query(`SELECT *FROM music ORDER BY hit DESC`,(error,ROW)=>{
            connection.query(`SELECT * FROM music WHERE title = '${query}'`,(error,rows)=>{
                if(error) throw error;
                console.log("여기서 말할거임");
                console.log(ROW[0]);
                console.log("여기까지 말할거임");
                res.render('../pages/play.ejs', {data: rows[0],ROWS:ROW});
            });
        });
        // connection.query(`SELECT * FROM music WHERE title = '${query}'`,(error,rows)=>{

        //     res.render('../pages/play.ejs', {data: rows[0],ROWS:rows});
        // });
    }
}

module.exports=playCtrl;