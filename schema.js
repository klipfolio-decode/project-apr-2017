var papa = require('papaparse');
var mongo = require('mongodb').MongoClient;
var DBURL = "mongodb://localhost:27017/klipfolioDecodeDB"

module.exports = {
  schema_id_to_json: function(data) { //pass data from schema object
    return papa.parse("one, two, three \n left, middle, right");
  },

  data_to_header_array: function(data){
    var parsed_data = papa.parse(data);
    console.log(parsed_data.data);
    var header_list = parsed_data.data[0];
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

  data_to_columns: function(data_csv) {
    var json_data = papa.parse(data_csv);
    column_array = json_data.data;
    column_array.shift();
    return column_array; //2D Array with columns and no headers
  },

  get_requested_columns: function(headers, csv_unparsed){
    var csv_data = papa.parse(csv_unparsed).data;

    // Need to pivot the data.
     var full = [], row, column, values, result = [];
     for (row = 0; row < csv_data.length; row++) {
         values = csv_data[row];
         for (column = 0; column < values.length; column++) {
           if (row == 0) {
             full.push([values[column]]);
           } else {
             full[column].push(values[column]);
           }
         }
     }
     // filter the list of selected headers.
     for (var i = 0; i < full.length; i++) {
       if (headers.indexOf(full[i][0]) >=0) {
         result.push(full[i]);
       }
     }
     console.log("result: " + result);
     return result;
  },

  create_schema: function(column_data){ //column data created from get_requested_columns
    return {
      data: column_data,
      type: "table",
      style: {}
    }
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
