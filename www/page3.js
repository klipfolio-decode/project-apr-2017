define([
  "api.js"
], function(API) {
  return {
    headers: function(id) {
      API.getColumnHeaders(id)
        .done(function(data) {
          var len = data.headers.length;
          for (var i = 0; i < len; i++) {
            $("#page-3").append("<div>");
            $("#page-3").append(data.headers[i]);
            $("#page-3").append("</div>")
          } 
        });
    }
  };
})
