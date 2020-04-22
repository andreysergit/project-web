"use strict";
window.onload = function () {
let arrTodo = [];
if (localStorage.getItem("todo") != undefined){
    arrTodo = JSON.parse(localStorage.getItem("todo"));//boolean
    out();
}

  document.getElementById("addlist").onclick = function () {
    let value = document.getElementById("in").value;
    let temp = {};
    temp.todo = value;
    temp.check = false;
    let i = arrTodo.length;
    arrTodo[i] = temp;
    console.log(arrTodo);
    out();
    localStorage.setItem("todo", JSON.stringify(arrTodo));
  };

function out() {
  let out = "";
  for (let key in arrTodo) {
    if (arrTodo[key].check == true) {
      out += '<input type="checkbox" checked>';
    } else {
      out += '<input type="checkbox">';
    }
    out += arrTodo[key].todo + "<br>";
  }
  document.getElementById("out").innerHTML = out;
}
};
