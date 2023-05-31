const searchCtrl = require("../controllers/searchCtrl");
const router = require("express").Router();


router.route('/')
    .get(searchCtrl.getsearch)
module.exports=router;

