define([
  "api.js"
], function(API) {
  return {
    headers: function(fileID) {
      API.getColumnHeaders(fileID)
        .done(function(data) {
          var len = data.headers.length;
          $("#page-3").append('<div class="btn-group" data-toggle="buttons">');
          for (var i = 0; i < len; i++) {
            $("#page-3").append('<label class="btn btn-primary"> <input class="page3check" type="checkbox" autocomplete="off" value="'+data.headers[i]+'">'+data.headers[i]+'</label><br/>');
          } 
        });
        $("#page-3").append('</div>');
    }
  };
})
