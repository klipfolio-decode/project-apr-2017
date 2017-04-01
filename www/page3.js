define([
  "api.js"
], function(API) {
  return {
    headers: function(fileID) {
      API.getColumnHeaders(fileID)
        .done(function(data) {
          var len = data.headers.length;
          $("#page-3").append('<div class="btn-group" style="width:80%" data-toggle="buttons">');
          for (var i = 0; i < len; i++) {
            $("#page-3").append('<div class="border-south" style="width:80%;margin-left:10%;"><label style="width:100%;" class="btn btn-primary"><input class="page3check" type="checkbox" autocomplete="off" value="'+data.headers[i]+'"> '+data.headers[i]+'</label><br/>');
          }
        });
        $("#page-3").append('</div>');
    }
  };
})
