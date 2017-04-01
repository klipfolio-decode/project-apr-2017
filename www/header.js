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
      $("#addbtn").click(function() {
        console.log("Menu button clicked!");
        //parseCSVFile();
      });
      $("#page3btn").click(function() {
        console.log('clicked');
        Page3.headers(1); 
      });
    }
  };
});
