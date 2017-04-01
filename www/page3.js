define([
  "api.js"
], function(API) {
  return {
    headers: function(id) {
      API.getColumnHeaders(id)
        .done(function(data) {
          $("#page-3").html(data.headers);
        });
    }
  };
})
