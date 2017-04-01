define([
    "table.js",
    "line.js"
], function(Table, Line) {
    return {
        getVisualisation: function(schema) {
            if (schema.type === "table") {
                return Table.create(schema);
            } else if (schema.type === "line") {
                return Line.create(schema);
            }
        }
    };
});
