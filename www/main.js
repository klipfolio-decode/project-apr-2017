define([
    "header.js",
    "api.js"
], function(Header, API){
    Header.init();
    API.getColumnHeaders()
      .done(function(data) {
        console.log(data);
      });
    API.getSchema()
      .done(function(data) {
        console.log(data);
      });
    API.getFileList()
      .done(function(data) {
        console.log(data);
      }); 
    API.createSchema()
      .done(function(data) {
        console.log(data);
      });
    API.updateSchema()
      .done(function(data) {
        console.log(data);
      });
})
