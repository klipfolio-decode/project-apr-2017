define([
  "page3.js",
  "api.js",
  "dashboard.js",
  "utils.js"
], function(Page3, API, Dashboard, Utils) {
    var selectedFile;
    // page 3 overlay
    function openAdd() {
      document.getElementById("add").style.height = "100%";
      Page3.headers(this.file);
    }
    function closeAdd() {
      document.getElementById("add").style.height = "0%";
    }

    function openFileSelect() {
      document.getElementById("select-file").style.height = "100%";
      $("#file-list-target").html("");
      API.getFileList()
          .done(function(data) {
              data.files.forEach(function(file){
                  $("#file-list-target").append("<div class='border-south'><button class='file-select btn btn-primary' value='"+file.id+"'>" + file.name);
              });
              setupFileSelectClickHandlers();
          }.bind(this));
      };

      function closeFileSelect() {
          document.getElementById("select-file").style.height = "0%";
      };

    function setupFileSelectClickHandlers() {
      $(".file-select").click(function(event) {
          this.file = event.currentTarget.getAttribute("value");
          selectedFile = event.currentTarget.getAttribute("value");
          openAdd();
          closeFileSelect();
      }.bind(this));
    };
  return {
    init: function() {
      $("#dropbtn").click(function() {
        //alert("handler for .click() called.");
        console.log("Menu button clicked!");
        $(".dropdown-content").toggle("show");
        // $("#dropbtn").toggle("change");
      });

      $("#edit-cancel").click(function() {
        Dashboard.hideEdit();
      });

      $("#addbtn").click(function() {
        console.log("Add button clicked!");
        openFileSelect();
      });

      $(".closebtn").click(function() {
        $("#page-3").html("");
        closeAdd();
      });

      $(".check").click(function() {
          console.log(this.file);
            var checked = [];
            var elem = document.getElementsByClassName("page3check");
            for(var i=0; elem[i]; i++){
              if(elem[i].checked) {
                checked.push(elem[i].value);
              }
            }
            console.log(checked);
            if (checked.length === 0) {
              alert("No headers");
            } else {
                console.log("Selected: ", selectedFile)
              API.createSchema(checked, selectedFile)
                .done(function(data) {
                  Dashboard.renderDashboard();
                  $("#page-3").html("");
                  closeAdd();
              }.bind(this));
            }
        }.bind(this));


      // colors
      $(".color-check").click(function() {
        var headerSelected = document.querySelector('input[name = "hcolors"]:checked').value;
        var cellSelected = document.querySelector('input[name = "ccolors"]:checked').value;
        var id = Utils.getCurrentlyEditingID();
        API.getSchema(id)
          .done(function(data) {
            var schema = data;
            var new_schema = {
              "data": schema.data,
              "type": schema.type,
              "style": {
                "headerColor": headerSelected,
                "fillColor": cellSelected
              }
            }
            API.updateSchema(id, new_schema)
              .done(function(data) {
                console.log(new_schema);
                Dashboard.renderDashboard();
                Dashboard.hideEdit();
              });
          });
      });
    }
  };
});
