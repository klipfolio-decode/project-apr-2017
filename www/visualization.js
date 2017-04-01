define([
    "table.js"
], function(Table) {
    return {
        getVisualisation: function(schema) {
            if (schema.type === "table") {
                return Table.create(schema);
            }
        }
    };
});
