define([
], function() {
  var URL = 'http://localhost:8080';

  return {
    getColumnHeaders: function(id) {
      return $.get(URL+'/files/headers');
    },

    getSchemaList: function() {
        return $.get(URL+'/schema/list');
    },

    getSchema: function(id) {
      return $.get(URL+'/schema/get')
    },

    getFileList: function() {
      return $.get(URL+'/files/list');
    },

    createSchema: function(data) {
      return $.get(URL+'/schema/create');
    },

    updateSchema: function(data) {
      return $.get(URL+'/schema/update');
    },

    /*
    createSchema: function(data) {
      return $.post(URL+'/schema/create', data);
    },

    updateSchema: function(schema) {
      return $.ajax({
        type: "PUT",
        url: URL+'/schema/update',
        contentType: 'application/json',
        data: schema
      });
    }
    */
  }
})
