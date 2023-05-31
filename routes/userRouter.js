const userCtrl = require("../controllers/userCtrl.js");
const router = require("express").Router();


router.route('/')
    .get(userCtrl.getUsers)
    .post(userCtrl.insertUser) //정보가 넘어 올거임, req라는 변수에 저장되어서
module.exports=router;