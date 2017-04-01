var papa = require('papaparse');
var mongo = require('mongodb').MongoClient;
var DBURL = "mongodb://localhost:27017/klipfolioDecodeDB"

module.exports = {
  schema_id_to_json: function(data) { //pass data from schema object
    return papa.parse("one, two, three");
  },

  data_to_header_array: function(data){
    var header_list = papa.parse(data);
    console.log(header_list);
    return header_list;
  },

  update_schema: function(new_schema, id) { //pass old schema as well??
    dummy_json = {                          //use built in function?
      data: [[]],
      type: "table",
      style: {},
    };
    //save it
    return dummy_json;
  },

  create_schema: function(id){
    //lookup file by id
    //parse csv into array of arrays-> Reuse some parsing logic from header gathering? only add columns for provided headers
    //create schema object string + id
    //save schema
    //return schema id
    mongo.connect(DBURL,function(err,db){
      db.collection("files").findOne({_id:id},function(err,rec){
        if (err){
          console.log(err);
        }
        var csv_data = rec.data;
      })
    });

    var schema_data = papa.parse(csv_data);
    return {
      data: schema_data,
      type: "table",
      style: {}
    };

  },

  get_schema: function(id){
    mongo.connect(DBURL,function(err,db){
      db.collection("schemas").findOne({_id:id},function(err,rec){
        if (err){
          console.log(err);
        }
        console.log(rec.schema);
        return rec.schema;
      })
    });

},

    //get schema by id, return schema json object


};
