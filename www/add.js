define([
    "api.js"
], function(API) {
    return {
        add: function() {
            console.log("add called");
            API.getColumnHeaders(1)
            .done(function(data) {
                console.log(data);
                $("#addbtn").toggle("hide");
                $("#column-headers-container").html(data.headers);
                $("#cancelbtn").html("Cancel");
                $("#confirmbtn").html("OK");
            });
        }
    };
})
