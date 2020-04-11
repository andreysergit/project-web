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
let addButton = document.getElementById("addButton");
document.body.appendChild(addButton);
let editButton = document.getElementById("editButton");
document.body.appendChild(editButton);
let deleteButton = document.getElementById("deleteButton");
document.body.appendChild(deleteButton);

addButton.onclick = addUser;
editButton.onclick = editUser;
deleteButton.onclick = deleteUser;

let userNew = {};

let i = 1;

data.forEach((elem) => {
  let tr = document.createElement("tr");
  tr.append(document.createElement("td"));
  tr.append(document.createElement("td"));
  tr.append(document.createElement("td"));
  table.append(tr);
  table.rows[i].cells[0].innerText = elem.firstName;
  table.rows[i].cells[1].innerText = elem.lastName;
  table.rows[i].cells[2].innerText = elem.age;
  i++;
});

function addUser() {
  let userFirstName = prompt("introduce first name");
  let userLastName = prompt("introduce last name");
  let userAge = prompt("introduce age");
  userNew.firstName = userFirstName;
  userNew.lastName = userLastName;
  userNew.age = userAge;
  data.push(userNew);

  let tr = document.createElement("tr");
  for (let key in userNew) {
    let td = document.createElement("td");
    td.innerHTML = userNew[key];
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

function editUser() {
  document.getElementById("table").contentEditable = true;
}

function deleteUser() {
  let confirmEdit = confirm("Click on the appropriate line");
  table.addEventListener("click", function (even) {
    let deleteElem = even.target;
    let ell = deleteElem.closest("tr");
    ell.parentElement.removeChild(ell);
    return confirmEdit;
  });
}
