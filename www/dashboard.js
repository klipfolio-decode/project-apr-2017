define([
    "api.js",
    "visualization.js",
    "utils.js"
], function(API, Viz, Utils) {
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
                        var id = data._id;

                        // add the viz to the dashboard
                        $("#dashboard-container")
                            .append("<div id='"+id+">")
                            .append("<div><button id='"+id+"-delete'>Delete <span class='glyphicon glyphicon-trash'></button></span><button id='"+id+"-edit' style='float:right;'>Edit <span class='glyphicon glyphicon-edit'>")
                            .append(Viz.getVisualisation(data) + "<hr>");
                        this.registerVisualisationClickHandler(id);
                    }.bind(this));
                }.bind(this));
            }.bind(this));
        },
        registerVisualisationClickHandler: function(id) {
            $("#"+id+"-edit").click(function() {
                this.showEdit(id);
            }.bind(this));
            $("#"+id+"-delete").click(function() {
                this.promptDelete(id);
            }.bind(this));
        },
        showEdit: function(id) {
            var edit = $("#edit")
            var editField = $("#viz-edit-id");

    	    if (edit.hasClass("edit-show")) {
    	    	edit.removeClass("edit-show");
                editField.val("");
                console.log(Utils.getCurrentlyEditingID());
    	    } else {
    	    	edit.addClass("edit-show");
                editField.val(id);
                console.log(Utils.getCurrentlyEditingID());
    	    }
        },
        promptDelete: function(id) {
            API.deleteSchema(id)
            .done(function() {
                this.renderDashboard();
            }.bind(this));
        }
    };
});
