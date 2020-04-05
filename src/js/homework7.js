"use strict";

// Создать функцию которая принимает числа N,M.
// Возвращает матрицу А(N,M) заполненную случайными числами от -100 до 100.

// let n = 3;
// let m = 3;
// let mas = [];
// function matrix (n,m){
//   for (let i = 0; i < m; i++) {
//     mas[i] = [];
//     for (let j = 0; j < n; j++) {
//       let random = Math.round(Math.random() * (100 - (-100)) + (-100));
//       mas[i].push(random);
//     }
//   }
// }
// matrix (n,m)
// console.log(mas);

// Сгенерировать матрицу А(N,M).
// Составить программу нахождения максимального элемента матрицы и выделения его местоположения.

// let n = 3;
// let m = 3;
// let mas = [];
// let firstRandom = Math.round(Math.random() * (100 - -100) + -100);
// let max = firstRandom;
// function matrix(n, m) {
//   for (let i = 0; i < m; i++) {
//     mas[i] = [];
//     for (let j = 0; j < n; j++) {
//       let random;
//       if (firstRandom !== null) {
//         random = firstRandom;
//         firstRandom = null;
//       } else random = Math.round(Math.random() * (100 - -100) + -100);
//       mas[i].push(random);
//       if (random > max) max = random;
//     }
//   }
// }
// matrix(n, m);
// console.log(mas, max);

//-----------------------------------------------------------------------------

// Сгенерировать матрицу А(N,M).
// Составить программу замены всех отрицательных элементов матрицы на элемент, имеющий максимальное эначение.

// let n = 3;
// let m = 3;
// let mas = [];
// let firstRandom = Math.round(Math.random() * (100 - -100) + -100);
// let max = firstRandom;
// function matrix(n, m) {
//   for (let i = 0; i < m; i++) {
//     mas[i] = [];
//     for (let j = 0; j < n; j++) {
//       let random;
//       if (firstRandom !== null) {
//         random = firstRandom;
//         firstRandom = null;
//       } else random = Math.round(Math.random() * (100 - -100) + -100);
//       mas[i].push(random);
//       if (random > max) max = random;
//       if (random <0) mas[i] = mas[i].toString().replace(/0/g, max);
//     }
//   }
// }
// matrix(n, m);
// console.log(mas, max);

//------------------------------------------------------------------------------

// Написать функцию которая принимает функцию и два числа.
// Возвращает результат выполнения переданной функции для этих чисел.
// Пример для уже написанной ф-ции calc:

// const min = (x,y) => x<y ? x : y;
// const res = calc(min, 3, 11) // res должно быть равно 3


// const min = (x,y) => x<y ? x : y;
// const res = calc(min, 2, 11)
// function calc(func, x, y) {
//   return func(x, y);
// }
// console.log (res)

