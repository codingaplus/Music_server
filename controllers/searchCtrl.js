const connection=require('../dbconfig');
const express = require('express');
const app = express(); //새로운 객체 만들어주는거
app.set('view engine', 'ejs');
var url=require('url');
const searchCtrl={
    getsearch : async(req, res, next)=>{
        var query = (url.parse(req.url, true).query.query);
        connection.query(`SELECT * FROM music WHERE title LIKE '%${query}%' OR singer LIKE '%${query}%'OR genre LIKE '%${query}%'`,(error,rows)=>{
            if(error) throw error;
            console.log(query);
            res.render('../pages/search_music', {rows: rows});
        });
    }
}

module.exports=searchCtrl;

//SELECT * FROM music WHERE age = 19 OR age = 20 OR age = 21;
//ELECT * FROM music WHERE [필드명] LIKE '%특정 문자열%' OR [필드명] LIKE '%특정 문자열2%';