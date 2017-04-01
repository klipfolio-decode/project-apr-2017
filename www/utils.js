define([

], function() {
    return {
        getCurrentlyEditingID: function() {
            var id = $("#viz-edit-id").val();

            if (id === null || id === undefined || id === "") {
                return "";
            } else {
                return id;
            }
        }
    };
});
