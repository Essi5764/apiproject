

document.getElementById("app").innerHTML = `
<h1>Api Challenge!</h1>
<div>
  Below is the summary of the api information
  
</div>
`;
var request = new XMLHttpRequest();
// Opening a GET request to the API
request.open("GET", "http://ergast.com/api/f1/drivers");
// Load the request
request.onload = function() {
  // Accessing the JSON data
  var data = JSON.parse(this.response).results;
  if (request.status >= 200 && request.status < 400) {
    // Looping the data
    data.forEach(results => {
        console.log(results);
    });
} else {
    // Showing error for the status
    console.log("error");
}
function show(results) {
    let tab = `<tr>
          <th>ID</th>
          <th>First_Name</th>
          <th>Last_Name</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.code} </td>
    <td>${r.givenName}</td>
    <td>${r.familyName}</td>          
    </tr>`;
    }
    // Setting innerHTML as tab variable
    
}//
};

