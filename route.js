var express = require('express') ;

var router = express.Router();

router.get("/", (req, res) => {
    res.send('get root path');
}) ;

router.get("/:id", (req, res) => {
    res.send('get ID path ' + req.params.id);
})

router.post("/", (req, res) => {
    res.send('post root path') 
})

module.exports = router ;