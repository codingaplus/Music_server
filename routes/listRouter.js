const listCtrl = require("../controllers/listCtrl.js");
const router = require("express").Router();


router.route('/')
    .get(listCtrl.getlist)
    .post(listCtrl.insertlist) //정보가 넘어 올거임, req라는 변수에 저장되어서

router.route('/read/:idx')
    .get(listCtrl.detaillist)
module.exports=router;

