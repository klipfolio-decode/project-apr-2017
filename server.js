var express = require('express');
var schema = require('./schema');
var data = require('./data');
var mongo = require('mongodb').MongoClient;

var app = express();

var DBURL = "mongodb://localhost:27017/klipfolioDecodeDB"

//Serving templates
app.set('www','./www');
app.set('view engine','html');

var port = 8080;

var router = express.Router();

app.get('/hello', function(req, res) {
    //res.json(schema.schema_id_to_json());
    res.json(schema.schema_id_to_header_list());
});

app.get('/files/list', function(req, res) { //getFileList

    res.json({ files:["file1","file2"]});  //format shown
});

app.get('/files/headers', function(req, res){ //getColumnHeaders
    res.json({  headers:["header1, header2"] }); //potentially return data[[]]
});

app.get('/schema/create', function(req, res){ //createSchema
    res.json(schema.get_schema(1));
});

app.get('/schema/list', function(req, res){
    res.json({ ids: [1,2,3] });
});

app.get('/schema/update', function(req, res){
    res.json(schema.update_schema(null, null));
});

app.get('/schema/get', function(req, res){
    res.json({
        data: [["Header",2,3],["Header2",5,6]],
        type: "table",
        style: {},
    });
});


app.use(express.static("./www"));

//When you make a request to the home page, render HTML
app.get("/",function(req,res){
  res.render('index');
});



app.listen(port, function() {
  console.log("server started at port " + port);
});
