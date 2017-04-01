define([
  "page3.js" 
], function(Page3) {
  return {
    init: function() {         
      $("#dropbtn").click(function() {
        //alert("handler for .click() called.");
        console.log("Menu button clicked!");
        $(".dropdown-content").toggle("show");
        // $("#dropbtn").toggle("change");
      });
 
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
    }
  };
});
