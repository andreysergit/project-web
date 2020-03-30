"use strict";

// -----------------learnjs-----------------------
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// ------------------------------------

// function minNumber(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// let result1 = minNumber(2, 5);
// let result2 = minNumber(3, -1);
// let result3 = minNumber(1, 1);
// console.log(result1, result2, result3);

// function minNumber(a, b) {
//   return a < b ? a : b;
// }
// let result1 = minNumber(2, 5);
// let result2 = minNumber(3, -1);
// let result3 = minNumber(1, 1);
// console.log(result1, result2, result3);

// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// --------------------------------------------

// function pow(a, b) {
//   return a ** b;
// }
// let result1 = pow(3, 2);
// let result2 = pow(3, 3);
// let result3 = pow(1, 100);
// console.log(result1, result2, result3);

// function pow(a, b) {
//   return Math.pow(a, b);
// }
// let result1 = pow(3, 2);
// let result2 = pow(3, 3);
// let result3 = pow(1, 100);
// console.log(result1, result2, result3);

// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

// let x = +prompt("Введите число");
// let n = +prompt("Введите степень");
// function pow(x, n) {
//   let result = Math.pow(x, n);
//   return result;
// }
// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное значения`);
// } else {
//   alert(pow(x, n));
// }

// Слова палиндромы. Узнать является ли строка палиндромом.
// Слово палиндром - может читаться справа-налево и слева-направо одинаково. Прим “шалаш”.

// let str = prompt("Введите слово");
// function showPalindrom(str) {
// return str === str.split('').reverse().join('');
// }
// alert(showPalindrom(str));//Является ли строка полиндромом (true,false)

// Менее ресурсно------------

// let str = prompt("Введите слово");
// function palindrome(str) {
//   let cleanStr = str.toLowerCase();
//   let charArr = [...cleanStr];
//   for (let char of charArr) {
//     if (char !== charArr.pop()) return false;
//   }
//   return true;
// }
// alert(palindrome(str));//Является ли строка полиндромом (true,false)

// -------------------------------------------------------
// Массив уникальных случайных цифр. Создадим массив для семи элементов;
// Заполним его случайными цифрами от 0 до 10;
// Цифры в массиве не должны повторяться;
// Вывести этот массив в консоль;
// Упорядочить массив;
// Еще раз вывести его в консоль.

// let arr = [];
// for (let i = 0; i < 7; i++) {
//   let random = Math.round(Math.random() * 10);
//   while (arr.includes(random)) {
//     random = Math.round(Math.random() * 10);
//   }
//   arr.push(random);
// }
// console.log(arr); //Цифры в массиве не должны повторяться
// arr.sort((a, b) => a - b);
// console.log(arr); //Упорядочить массив

// -----------------------------------------------
// Замена элементов массива. Создадим массив с десятью случайными элементами от 0 до 100;
// Напишем инструкцию, которая будет заменять все “0” на строку “zero”;
// Выводим полученный массив в консоль.
// прим. [12, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];

// let arr = [];
// for (let i = 0; i < 10; i++) {
//   let random = Math.round(Math.random() * 100);
//   if (random % 100 === 0) {
//     random = random / 100 + "zerozero";
//   } else if (random % 10 === 0) {
//     random = random / 10 + "zero";
//   }
//   arr.push(random);
// }
// console.log(arr);

let arr = [''];
for (let i = 0; i < 10; i++) {
  let random = Math.round(Math.random() * 100);
  // for (let i = 0; i < 10; i++ ) {
    if (i === 0) {
      let boom = arr.splice(1, 2, "zero");
      arr.push(boom);
    } else arr.push(random)
  // }
}
console.log(arr);
