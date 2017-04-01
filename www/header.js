define([
  'jquery'
], function() {
  return {
    init: function() {
      $("#dropbtn").click(function() {
        //alert( "Handler for .click() called." );
        console.log("Menu button clicked!");
        $(".dropdown-content").toggle("show");
        // $("#dropbtn").toggle("change");

      });
      $("#addbtn").click(function() {
        console.log("Menu button clicked!");
      //parseCSVFile()
      });
    }
  };
});
