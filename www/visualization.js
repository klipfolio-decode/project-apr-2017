define([
    "table.js"
], function(Table) {
    return {
        getVisualisation: function(schema) {
            if (schema.type === "table") {
                return Table.create(schema);
            } else if (schema.type === "line") {
                return Table.create(schema);
            }
        }
    };
});
