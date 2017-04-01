define([
    "api.js",
    "visualization.js"
], function(API, Viz) {
    return {
        init: function() {
            this.renderDashboard();
        },
        renderDashboard: function() {
            // get the ids of all visualizations to render
            $("#dashboard-container").html("");
            API.getSchemaList()
            .done(function(data) {
                // get the schema for each viz
                data.ids.forEach(function(id) {
                    API.getSchema(id)
                    .done(function(data) {
                        // add the viz to the dashboard 
                        $("#dashboard-container").append("<div>" + Viz.getVisualisation(data) + "<hr>");
                    });
                });
            });
        }
    };
});
