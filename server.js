var express = require('express');
var schema = require('./schema');
var data = require('./data');

var app = express();

var port = 8080;

var router = express.Router();

app.get('/hello', function(req, res) {
    //res.json(schema.schema_id_to_json());
    res.json(schema.schema_id_to_header_list());
});

app.get('/files/list', function(req, res) { //getFileList
    res.json({ files:["file1","file2"] });
});

app.get('/files/headers', function(req, res){ //getColumnHeaders
    res.json({  headers:["header1, header2"] }); //potentially return data[[]]
});

app.get('/schema/create', function(req, res){ //createSchema
    res.json({  id: 1 });
});

app.get('/schema/list', function(req, res){
    res.json({ [1,2,3] });
});

app.get('/schema/update', function(req, res){
    res.json(schema.update_schema(null, null));
})

app.get('/schema/get', function(req, res){
    res.json({
        data: [["Header",2,3],["Header2",5,6]],
        type: "table",
        style: {},
    });
});

app.listen(port, function() {
  console.log("server started at port " + port);
});
