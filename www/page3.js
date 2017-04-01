define([
  "api.js"
], function(API) {
  return {
    headers: function(id) {
      API.getColumnHeaders(id)
        .done(function(data) {
          $("#page-3").html(data.headers);
          console.log(data.headers);
          console.log(data.headers.length);
        });
    }
  };
})
