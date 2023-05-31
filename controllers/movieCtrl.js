const connection=require('../dbconfig');

const movieCtrl={
    getMovies : async(req,res)=>{
        connection.query('SELECT * FROM movie',(error,rows)=>{
            if(error) throw error;
            console.log(rows);
            res.send(rows);//프로트로 rows들을 보내겠다.
        });
    },
    insertMovie : async(req,res)=>{
        const {id,title,person,genre,runningtime} = req.body;
        const sql = `INSERT INTO movie(movie_id,title,person,genre,runningtime)VALUES(${id},'${title}','${person}','${genre}',${runningtime});`
        connection.query(
            sql,(error,rows)=>{
                if(error) throw error;
                res.send(rows);
            }
        )
    }
}

module.exports=movieCtrl;