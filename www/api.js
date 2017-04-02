define([
], function() {
  var URL = 'http://localhost:8080';

  return {
    getColumnHeaders: function(fileID) {
      return $.get(URL+'/files/headers/'+fileID);
    },

    getSchemaList: function() {
        return $.get(URL+'/schema/list');
    },

    getSchema: function(id) {
      return $.get(URL+'/schema/get/'+id)
    },

    getFileList: function() {
      return $.get(URL+'/files/list');
    },

    createSchema: function(data, fileId) {
        return $.ajax({
            url: URL+'/schema/create/'+fileId,
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        });
    },

    updateSchema: function(id, data) {
      return $.ajax({
        url: URL+'/schema/update/'+id,
        type: "POST",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8"
      });
    },

    deleteSchema: function(id) {
        return $.ajax({
           url: URL + '/schema/delete/'+id,
           type: 'DELETE'
        });
    }
  }
})
