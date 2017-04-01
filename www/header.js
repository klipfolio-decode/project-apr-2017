define([
  "page3.js",
  "api.js",
  "dashboard.js",
  "utils.js"
], function(Page3, API, Dashboard, Utils) {
  return {
    init: function() {         
      $("#dropbtn").click(function() {
        //alert("handler for .click() called.");
        console.log("Menu button clicked!");
        $(".dropdown-content").toggle("show");
        // $("#dropbtn").toggle("change");
      });

      // page 3 overlay 
      function openAdd() {
        document.getElementById("add").style.height = "100%";
      }
      function closeAdd() {
        document.getElementById("add").style.height = "0%";
      }

      $("#addbtn").click(function() {
        console.log("Add button clicked!"); 
        openAdd();
        Page3.headers(1); 
        //parseCSVFile();
      });

      $(".closebtn").click(function() {
        $("#page-3").html(""); 
        closeAdd();
      });

      $(".check").click(function() { 
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
          API.createSchema(checked) 
            .done(function(data) {
              Dashboard.renderDashboard();
              $("#page-3").html("");
              closeAdd();
            });
        }
      });


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
              });
          });
      });
    }
  };
});
