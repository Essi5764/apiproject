let container = document.getElementById("container");
let list = document.getElementById("list");
let table = document.getElementById("employees");


//fetching and getting results from the api
fetch("https://ghibliapi.herokuapp.com/people")
    .then((res) => res.json())
    .then(function (json) {
        console.log(json)
        display(json)
    })
    .catch((err) => console.log(err))


// Function to define innerHTML for HTML table
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