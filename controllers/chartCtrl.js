const connection=require('../dbconfig');
const express = require('express');
const app = express(); //새로운 객체 만들어주는거

const chartCtrl={
    getindex : async(req, res, next)=>{
        connection.query(`SELECT *FROM music ORDER BY hit DESC`,(error,rows)=>{
            if(error) throw error;
            console.log(rows);
            res.render('../pages/index.ejs', {rows: rows});
        });
    }
}

module.exports=chartCtrl;