var express = require('express');
const { render } = require('express/lib/response');
var router = express.Router();

router.get('/',(req,res,next) => {
    res.send("그냥가벼운데이터/타입은 텍스트")
})


module.exports = router;