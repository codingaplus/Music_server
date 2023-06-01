const chartCtrl = require("../controllers/chartCtrl");
const router = require("express").Router();


router.route('/')
    .get(chartCtrl.getindex)
module.exports=router;

