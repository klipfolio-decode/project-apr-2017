define([
    "page3.js" 
], function(Page3) {
    return {
        init: function() {
            $("#page3btn").click(function() {
              console.log('clicked');
              Page3.headers(1); 
            });
        }
    };
});
