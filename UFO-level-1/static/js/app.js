// from data.js
//binding the data in data.js to the table Data variable
var tableData = data;


//getting reference of table's body
//Reference index,html - <tbody id="ufo-table-body"></tbody> - (line 64)
var ufoTable = document.getElementById("ufo-table-body");
var rows = "";

//creating the table rows with the data
tableData.map((element) => {
  rows += "<tr>" +
    "<td>" + element.datetime + "</td>" +
    "<td>" + element.city + "</td>" +
    "<td>" + element.state + "</td>" +
    "<td>" + element.country + "</td>" +
    "<td>" + element.shape + "</td>" +
    "<td>" + element.durationMinutes + "</td>" +
    "<td>" + element.comments + "</td>" +
  "</tr>";
});

//filling the table
  //getting table input reference
ufoTable.innerHTML = rows;

function onChangeDateFilter(event) {

  var dateInput = document.getElementById("datetime");
  rows = "";
  
  //filter table rows by the date input value
  tableData.filter((row) => (row.datetime === dateInput.value)).map((element) => {
    rows += "<tr>" +
      "<td>" + element.datetime + "</td>" +
      "<td>" + element.city + "</td>" +
      "<td>" + element.state + "</td>" +
      "<td>" + element.country + "</td>" +
      "<td>" + element.shape + "</td>" +
      "<td>" + element.durationMinutes + "</td>" +
      "<td>" + element.comments + "</td>" +
      "</tr>";
  });
  
  //fill the table again
  ufoTable.innerHTML = rows;
}