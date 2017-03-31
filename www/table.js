
define([

], function() {
    return {
        create: function(sample) {
            //console.log(sample.style);
            //console.log(sample.data[0].length);
            var num_rows = sample.data[0].length;
            var num_cols = sample.data.length;
            var style = sample.style;
            var theader = "<table id='table1' width = 60% ><tr>";
            var tbody = " ";

            for(var j = 0; j < num_cols; j++)
            {
            	theader += '<th style="background-color: ';
            	theader += sample.style.headerColor;
            	theader += '; color: '
            	theader += sample.style.htextColor;
            	theader += ' ;">'
            	theader += sample.data[j][0];
            	theader += "</th>";
            }
            theader += '</tr></thead>';

            for(var i = 1; i < num_rows; i++)
            {
            	tbody += "<tr>";
            	for(var j = 0; j < num_cols; j++)
            	{
            		tbody += '<td style="background-color: ';
            		tbody += sample.style.fillColor;
            		tbody += '; color: '
            		tbody += sample.style.textColor;
            		tbody += ' ;">'
            		tbody += sample.data[j][i];
            		tbody += "</td>"
            	}
            	tbody += "</tr><br />";
            }
            var tfooter = "</table>";
            document.getElementById('table').innerHTML = theader + tbody + tfooter;
        }
    };
});
