"use strict";
let data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
];

let table = document.getElementById("table");

document.body.appendChild(table);
let i = 1;

data.forEach((elem) => {
  let tr = document.createElement("tr");
  tr.appendChild(document.createElement("td"));
  tr.appendChild(document.createElement("td"));
  tr.appendChild(document.createElement("td"));
  table.appendChild(tr);
  table.rows[i].cells[0].innerText = elem.firstName;
  table.rows[i].cells[1].innerText = elem.lastName;
  table.rows[i].cells[2].innerHTML = elem.age;
  i++;
});
