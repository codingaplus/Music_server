const connection=require('../dbconfig');

const userCtrl={
    getUsers : async(req,res)=>{
        connection.query('SELECT * FROM user',(error,rows)=>{
            if(error) throw error;
            console.log(rows);
            res.send(rows);//프로트로 rows들을 보내겠다.
        });
    },
    insertUser : async(req,res)=>{
        const {id,password,nickname} = req.body;
        const sql = `INSERT INTO user(user_id,password,nickname)VALUES('${id}','${password}','${nickname}');`
        connection.query(
            sql,(error,rows)=>{
                if(error) throw error;
                res.send(rows);
            }
        )
    }
}

module.exports=userCtrl;
