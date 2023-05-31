const connection=require('../dbconfig');
const express = require('express');
const app = express(); //새로운 객체 만들어주는거
app.set('view engine', 'ejs');
var url=require('url');
const playCtrl={
    getplay : async(req, res, next)=>{
        var query = (url.parse(req.url, true).query.query);
        connection.query(`UPDATE music SET hit = hit +1 WHERE title='${query}'`);
        connection.query(`SELECT * FROM music WHERE title = '${query}'`,(error,rows)=>{
            if(error) throw error;
            console.log(rows);
            res.render('../pages/play.ejs', {data: rows[0]});
        });
    }
}

module.exports=playCtrl;