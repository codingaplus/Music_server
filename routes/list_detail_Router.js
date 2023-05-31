const listCtrl = require("../controllers/listCtrl.js");
const router = require("express").Router();


router.route('/')
    .get(listCtrl.getlist)
module.exports=router;

