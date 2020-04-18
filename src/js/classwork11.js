// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isAdmin = false } = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

const arr = [0, 1, 5];
arr.forEach((el) => console.log(el));
const addOne = (el, index, array) => {
  console.log("addOne -> array", array);
  console.log("addOne -> index", index);
  if (index !== arr.length - 1) { //поменять местами
    return el + arr[index + 1];
  } else {
    return arr[index];
  }
};

const newArr = arr.map(addOne);
console.log("newArr", newArr);