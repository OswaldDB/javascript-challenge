// Using the UFO dataset provided in the form of an array of
// JavaScript objects, write code that appends a table to your
// web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state,
// country, shape, and comment at the very least.

// Use a date form in your HTML document and write JavaScript
// code that will listen for events and search through the
// date/time column to find rows that match user input.

// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var datetime = inputElement.property("value");

    // Filter table by datetime
    var filteredData = []
    for (var i = 0; i < data.length; i++) {
        if (data[i].datetime == datetime) {
            filteredData.push(data[i])
        }
    }

    // Clear the existing table
    var tbody = d3.select("tbody");
    tbody.html("");
        
    // Print filtered table
    for (var j = 0; j < filteredData.length; j++) {
        dataRow = filteredData[j]
        var row = tbody.append("tr");
        row.append("td").text(dataRow.datetime)
        row.append("td").text(dataRow.city)
        row.append("td").text(dataRow.state)
        row.append("td").text(dataRow.country)
        row.append("td").text(dataRow.shape)
        row.append("td").text(dataRow.durationMinutes)
        row.append("td").text(dataRow.comments)
    }

}