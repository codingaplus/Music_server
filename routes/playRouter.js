const playCtrl = require("../controllers/playCtrl");
const router = require("express").Router();


router.route('/')
    .get(playCtrl.getplay)
module.exports=router;

