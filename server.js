var express = require('express');
var schema = require('./schema');
var data = require('./data');
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId
var bodyParser = require("body-parser");

var app = express();

var DBURL = "mongodb://root:root@ds147520.mlab.com:47520/klip-decode"

//Serving templates
app.set('www','./www');
app.set('view engine','html');

var port = 8080;

var router = express.Router();

// Log incoming requests
app.use(function(req,res,next){
    console.log(req.method + " request for " + req.url);
    next();
});

app.get('/hello', function(req, res) {
    //res.json(schema.schema_id_to_json());

    //res.json(schema.schema_id_to_header_list());
});

app.get('/files/list', function(req, res) { //getFileList

    res.json({ files:["file1","file2"]});  //format shown
});

app.get('/files/headers', function(req, res){ //getColumnHeaders
    //gets data from file given id
    mongo.connect(DBURL,function(err,db){
      if (err){
        console.log("Failed to connect to the database.");
        res.sendStatus(500);
        db.close();
      }else{
        //var id = req.query.id;
        var id = "58df016664569de96ec7469b";
        db.collection("files").findOne({"_id": ObjectId(id)}, function(err, rec){
          if (err) {
            console.log("Failed to connect to database. ERROR: ", err);
            res.sendStatus(500);
            db.close();
          } else {
            var data = rec.data;
            //var someArray = data_to_header_array (data);
            //res.json({  headers: someArray }); //potentially return data[[]]
            console.log(data);
            res.json({  headers:["header1", "header2"] });
          }
        });
      }
    });
});

app.get('/schema/create', function(req, res){ //createSchema
  //gets data from file given id
  mongo.connect(DBURL,function(err,db){
    if (err){
      console.log("Failed to connect to the database.");
      res.sendStatus(500);
      db.close();
    }else{
      //var id = req.query.id;
      var id = "58df016664569de96ec7469b";
      db.collection("files").findOne({"_id": ObjectId(id)}, function(err, rec){
        if (err) {
          console.log("Failed to connect to database. ERROR: ", err);
          res.sendStatus(500);
          db.close();
        } else {
          var data = rec.data;
          //data_2_columns(data);
          //console.log(data);
          //get columns from data
          //create_schema
        }
      });
    }


    //insert mongo schema. This is just a test schema for now.
    var schema = {"data":[[123,34],[56,09]],
                   "type":"line",
                   "style":{
                       "border-style":"dotted"
                    }
                 }

    insertSchema(db,schema,req,res);  //inserts schema and sends schema id

  });
});

app.get('/schema/list', function(req, res){
  //mongo get schemas ids
  mongo.connect(DBURL,function(err,db){
    if (err){
      console.log("Failed to connect to the database.");
      res.sendStatus(500);
      db.close();
    }else{
      db.collection("schemas").find({},{type:0, data:0, style:0},function(err,cursor){
        if(err){
          res.sendStatus(500);
        }else{
          var schemaList = [];
          cursor.each(function(err,doc){
            if(err){
              console.log("ERR: ",err);
              //res.sendStatus(500);
            }else if (doc === null){
              console.log(schemaList);
              res.json({ids:schemaList});  //sending an object with the form {files: [name1, name2, ...]}
              db.close();
            }else{
              schemaList.push(doc._id);
            }
          })
        }
      });
    }
  });
});

app.get('/schema/update/:id', function(req, res){
   //update mongo schema
   mongo.connect(DBURL,function(err,db){
     if (err){
       console.log("Failed to connect to the database.");
       res.sendStatus(500);
       db.close();
     }else{
       var id = req.params.id;
       //console.log(id);
       //var id = "58dfd37764569de96ec7469c";
       db.collection("schemas").findOne({"_id": ObjectId(id)}, function(err, rec){
         if (err) {
           console.log("Failed to connect to database. ERROR: ", err);
           res.sendStatus(500);
           db.close();
         } else {
           console.log(rec);

           //res.json(rec);
         }
       });
     }
   });

});

app.get('/schema/get/:id', function(req, res){
  //mongo schemas data
  mongo.connect(DBURL,function(err,db){
    if (err){
      console.log("Failed to connect to the database.");
      res.sendStatus(500);
      db.close();
    }else{
      var id = req.params.id;
      console.log(id);
      //var id = "58dfd37764569de96ec7469c";
      db.collection("schemas").findOne({"_id": ObjectId(id)}, function(err, rec){
        if (err) {
          console.log("Failed to connect to database. ERROR: ", err);
          res.sendStatus(500);
          db.close();
        } else {
          res.json(rec);
        }
      });
    }
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


function insertSchema(db,schema,req,res){

  db.collection("schemas").insert(schema, function(err,result){
    if(err){
      console.log("Error inserting schema: ", err);
      res.sendStatus(500);
      db.close();
    }else{
      console.log("Schema inserted with _id: ", result.insertedIds[0]);
      res.json({id:result.insertedIds[0]});   //format({id:schema id})
      db.close();
    }
  });
}

/*
function updateSchema(db,schema,req,res){

  db.collection("schemas").update({name:req.body.name},req.body,{upsert:true},function(err,result){
      if(err){
          res.sendStatus(500);
          db.close();
      } else {
          console.log("Result: "+result);
          res.sendStatus(200);
      }
  });

}
*/
