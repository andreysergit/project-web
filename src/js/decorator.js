"use strict";
// function Sayhi() {
//     console.log(this.name)
//     // console.log(this.age)
// }
// let user = {
//     name: "Piter" ,
// };
// let age = {
//     name: "23",
// };
// Sayhi.call(user)
// Sayhi.call(age)

// Создайте декоратор spy(func), который должен возвращать обёртку,
// которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

// Например:
// function work(a, b) {
//   console.log(a + b); // произвольная функция или метод
// }
// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9
// for (let args of work.calls) {
//   console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// function spy(func) {
//   function num(...args) {
//     num.call.push(args);
//     return func.apply(this, arguments);
//   }
//   num.call[[1, 2]];
//   return num;
// }

// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

// function f(x) {
//   alert(x);
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс
// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.

// function delay(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }
// let value = delay(console.log, 2000);
// value("Hello");
//===========================
// function debounce(f, ms) {
//   let stop = false;
//   return function () {
//     if (!stop) return;
//     f.apple(this, arguments);
//     stop = true;
//     setTimeout(() => (stop = false), ms);
//   };
// }
