let container = document.getElementById("container");
let list = document.getElementById("list");
let table = document.getElementById("employees");
// GET Request.
// fetch('https://ghibliapi.herokuapp.com/people',{
//     method: "GET",
// })
//     // Handle success
//     .then(response => response.json())  // convert to json
//     .then(function(json){
//         console.log(json)
//         show(json)
//     })    //print data to console
//     .catch(err => console.log('Request Failed', err)); // Catch errors


fetch("https://ghibliapi.herokuapp.com/people")
    .then((res) => res.json())
    .then(function (json) {
        console.log(json)
        display(json)
    })
    .catch((err) => console.log(err))


// Function to define innerHTML for HTML table
function show(json) {
    // let tab =
    //     `<tr>
    //       <th>Name</th>
    //       <th>Gender</th>
    //       <th>Age</th>
    //       <th>Eye_color</th>
    //      </tr>`;

    // Loop to access all rows 
    for (let r of json) {
        console.log(r.name)
        // let row = document.createElement("tr")
        // let columnName = document.createElement("td")
        // columnName.innerHTML = r.name
        // table.appendChild(row)
        // row.appendChild(columnName)
        //    tab += `<tr> 
        //<td>${r.name} </td>
        //<td>${r.gender}</td>
        //<td>${r.age}</td> 
        //<td>${r.eye_color}</td>          
        //</tr>`;
    }
    // Setting innerHTML as tab variable
}

function display(json) {
    for (r of json) {
        console.log(r.name)
        console.log(r.gender)
        let row = document.createElement("tr")
        let columnName = document.createElement("td")
        columnName.innerHTML = r.name
        row.appendChild(columnName)

        let columnGender = document.createElement("td")
        columnGender.innerHTML = r.gender
        row.appendChild(columnGender)

        let columnAge = document.createElement("td")
        columnAge.innerHTML = r.age
        row.appendChild(columnAge)

        let columnEyeColor = document.createElement("td")
        columnEyeColor.innerHTML = r.eye_color
        row.appendChild(columnEyeColor)

        table.appendChild(row)
    }
}