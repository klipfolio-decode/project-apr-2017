var papa = require('papaparse');
var mongo = require('mongodb').MongoClient;
var DBURL = "mongodb://localhost:27017/klipfolioDecodeDB"

module.exports = {
  schema_id_to_json: function() {
    console.log("test");
    var parse = papa.parse("one, two, three");
    return parse;
    //console.log(parse);
  },

  schema_id_to_header_array: function(id){
    var header_list = papa.parse("one, two, three").data;
    console.log(header_list);
    return header_list;
  },

  update_schema: function(new_schema, id) {
    dummy_json = {
      data: [[]],
      type: "table",
      style: {},
    };
    //save it
    return dummy_json;
  },

  create_schema: function(){
    //lookup file by id
    //parse csv into array of arrays-> Reuse some parsing logic from header gathering? only add columns for provided headers
    //create schema object string + id
    //save schema
    //return schema id
    return 1;
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
