// function Calculator() {
//   this.read = function () {
//     this.a = +prompt('Введите число a');
//     this.b = +prompt('Введите число b');
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// ------------------------------------------------------

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt("Введите число");
//   };
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// const Shapes = {
//   circle: "Circle",
//   square: "Square",
// };

// function Shape() {
//   this.name = name;
//   this.type = type;
//   this.sq = function () {
//     return this.calcSq();
//   };
// }
// function Circle(name, r) {
//   const circle = new Shape(Shapes.circle, name);
//   this.r = r;
//   Shape.sq = function () {
//     return Math.PI * r ** 2;
//   };
//   Object.defineProperty(circle, "square", {
//     get: function () {
//       return this.calcSq();
//     },
//     enumerable: true,
//   });
//   return circle;
// }

// function Square(name, side) {
//   const square = new Shape(Shapes.square, name);
//   this.side = side;
//   Shape.sq = function () {
//     return side * 2;
//   };
//   Object.defineProperty(this, "square", {
//     get: () => {
//       return this.calcSq();
//     },
//     enumerable: true,
//   });
// }
// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };
// rabbit.eats === true;
// console.log (rabbit.eats )

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };

  console.log(pockets.pen);
  console.log(bed.pillow )
  console.log(table.money)
