
define([

], function() {
    return {
        create: function(schema) {
            var num_rows = schema.data[0].length;
            var num_cols = schema.data.length;
            var style = schema.style;
            var theader = "<table id='table1' onclick='showEdit()' style='margin: auto;' width = 80%><tr>";
            var tbody = " ";

            for(var j = 0; j < num_cols; j++)
            {
            	theader += '<th style="background-color: ';
            	theader += schema.style.headerColor;
            	theader += '; color: '
            	theader += schema.style.htextColor;
            	theader += ' ;">'
            	theader += schema.data[j][0];
            	theader += "</th>";
            }
            theader += '</tr></thead>';

            for(var i = 1; i < num_rows; i++)
            {
            	tbody += "<tr>";
            	for(var j = 0; j < num_cols; j++)
            	{
            		tbody += '<td style="background-color: ';
            		tbody += schema.style.fillColor;
            		tbody += '; color: '
            		tbody += schema.style.textColor;
            		tbody += ' ;">'
            		tbody += schema.data[j][i];
            		tbody += "</td>"
            	}
            	tbody += "</tr><br />";
            }
            var tfooter = "</table>";

            return theader + tbody + tfooter;
        },
        showEdit: function() {
            var edit = document.getElementById("edit");
            //edit.style.height = window.innerHeight - 60+"px";
            if (edit.style.bottom == "0px") {
                edit.style.bottom="-1000px"
            } else {
                edit.style.bottom = "0px";
            }
        }
    };
});
