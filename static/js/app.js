// from data.js
var tableData = data;

// add data into table

var tbody = d3.select("tbody");

function tableAppend(UFOdata) {
    tbody.html(""); 
    UFOdata.forEach((dataObj) => {
        var row = tbody.append("tr");
        Object.entries(dataObj).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
        });
}; 

tableAppend(tableData);


// create date form search

var button = d3.select("#filter-btn");

button.on("click", function () { 
    d3.event.preventDefault(); //prevents form from trying to refresh page
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(row => row.datetime === inputValue);

    console.log(filteredData);

   tableAppend(filteredData); 
});

