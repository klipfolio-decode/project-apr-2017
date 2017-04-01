define([
    "add.js"
], function(Add) {
    return {
        init: function() {
            $("#dropbtn").click(function(){
                //alert( "Handler for .click() called." );
                console.log("Menu button clicked!");
                $(".dropdown-content").toggle("show");
            });
            $("#addbtn").click(function(){
                console.log("Add button clicked!");
                Add.add();
            });
        }
    };
});
