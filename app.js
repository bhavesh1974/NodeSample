var express = require('express') ;
var route = require('./route')

var app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use("/route", route );

app.get("/me/:id", (req, res) => {
    res.send(`This is bhavesh. ${req.query.name} - ${req.params.id}`)
})
  
app.get("/", (req, res) => {
    res.send('working fine');
})

//exports.helloWorld = app;
app.listen(8080, function() {
    console.log('server started on 8080') ;
})