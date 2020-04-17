// написать ф-цию заменяющую каждый нечетный эл-т массива на предыдущий четный (если такого эл-та нет, то не изменяем).
// Используя map

// const arr = [1, 4, 3, 8, 10];

// const arrNew = arr.map((num, index, array) => {
//   console.log("index", index);
//   console.log("array", array);
//   if (array[index] % 2 !== 0 && array[index - 1] % 2 == 0) {
//     num = array[index - 1];
//     if ((array[index] = num) && array[index + 1] % 2 == 0) {
//       num = array[index]
//     }
//   }
//   return num;
// });

// console.log("arrNew", arrNew);

// написать функцию которая перемножает все отрицательные значения в массиве. Используя reduce

// const arr = [-3, 4, -7, -10];

// const reduces = arr.reduce(function (a, b) {
//   console.log("a", a, "b", b);
//   if (b < 0) {
//     return a * b;
//   } else {
//     return a;
//   }
// }, 1);

// console.log(reduces);
