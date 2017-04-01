
define([
"node_modules/chart.js/dist/Chart.js"
], function(Chart) {
    return {
        create: function(schema) {
            var ctx = document.getElementById("line-chart").getContext("2d");
            var lineChart = new Chart(ctx, {
                type:'line',
                data:{
                    labels:schema.data[0],
                    datasets:[
                        {data:schema.data[1]
                        }
                    ]
                }
            })
        },
    };
});
