
// GET Request.
fetch('https://ghibliapi.herokuapp.com/people',{
    method: "GET",
})
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors


// Function to define innerHTML for HTML table
function show(json) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Eye_color</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of json.list) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.gender}</td>
    <td>${r.age}</td> 
    <td>${r.eye_color}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}