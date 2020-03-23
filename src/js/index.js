// Условия if----------

// let message;
// let age = prompt('Сколько вам лет?');
// if (age < 18) {
//   message = 'Привет';
// } else if (age === 18) {
//   message = 'Здравствуй';
// } else {
//   message = 'Здравствуйте';
// }
// console.log(message)

// switch--------

// let a = 10;
// switch (a) {
//   case a > 10:
//     console.log('Попробуйте еще раз');
//     break;
//   case a === 10:
//     console.log('Правильно')
//   default:
//     console.log(a)
// }

// Task 'for'--------

// for (i = -9; i <= -5; ++i) {
//   console.log(i + 9);
//   console.log(i);
//   if (!i) break;
// }

// for (i=2; i<=10; i++){
//   if (i%2 === 1) continue;
//   console.log (i);
// }

// let num = prompt("Введите число больше 100 : ");
// for (; num > 100; ) {
//   if (num) {
//     num = "Добро пожаловать";
//     alert(num);
//   } else  {
//     let input = prompt("Введите число больше 100 : ");
//   }
// }

// Напишите цикл, который предлагает prompt ввести число, большее 100. ---------------------
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа.
// Предусматривать обработку нечисловых строк в этой задаче необязательно.
// let num;

// do {
//   num = prompt("Введите число больше 100 : ");
// } while (num <= 100 && num);
// }

// while(true){
//   let a = prompt('Введите число больше 100', '');
//   if(a > 100 == null) break;
// }

// ---------------------------------

// let i=0;
// while (i<3){
//   alert(`Number ${i}!`);
//   i++;
// }

// -------------------------------------

// let i = 10;

// for (let n = 2; n <= i; n++) {
//   let ins = true;
//   for (let m = 2; m < n; m++) {
//     if (n % m === 0) {
//       ins = false;
//       continue;
//     }
//   }
//   if (ins) console.log(n);
// }

// ----------------------------------------

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// let age = 20;
// if (age > 14 && age <= 90) {
//   console.log(true);
// } else console.log(false);

// ----------------------------------------

// -----------------------------------------------

// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// let what = prompt("Кто ты?", "");

// if (what == "Админ") {
//   let pass = prompt("Введите пароль : ", "");
//   if (pass == "Я здесь главный") {
//     alert("Здравствуйте");
//   } else if (pass) {
//     alert("Неверный пароль");
//   } else {
//     pass = null;
//     alert("Отменено");
//   }
// }

// --------------------------------------------------

// Task
// Implement function, that for given two numbers, presented as strings will return their product ----------

// const str1 = '2', str2 = '2';
// num1 = Number.parseInt(str1);
// num2 = Number.parseInt(str2);
// console.log(num1 * num2);

// Задаем 2 числа, начало и конец диапазона. Программа выдаёт сумму всех нечетных чисел в этом диапазоне.-------------

// first way---
// function sumNumber(x) {
//   let sum = 0;
//   for (let num = 10; num <= x; ++num) {
//     if (num % 2 === 0) continue;
//     sum += num;
//   }
//   return sum;
// }
// console.log(sumNumber(30)); // Выводим сумму всех нечетных числе в диапазоне

// second way---

// let num = 10;
// while (num < 30) {
//   ++num;
//   if (num % 2 == 0) continue;
//   console.log(num);
// }

// -----------------------------------------------------------------

// Найти факториал числа. Для числа 5 результат должен быть равен 120, потому что факториал 5 это 5*4*3*2*1

// function factorialNumber(n) {
//   return (n != 1) ? n * factorialNumber(n - 1) : 1;
// }
// console.log(factorialNumber(5));

// --------------------------------------------------------------------

// Найти последовательность Хэеса, для числа должно быть выдано сообщение,
//  с самой последовательностью, количеством шагов, которое понадобилось для нахождения этой последовательности,
//  и вершиной последовательности, это максимальное число из этой последовательности.
// Последовательность Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, делим на 2,
//  если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не будет равно 1.

// function getArray(number) {
//   let count = -1;
//   let arr = [];
//   let maxNumber = number;
//   getMax(number);
//   function getMax(number) {
//     count++;
//     arr.push(number);
//     if (number > maxNumber) maxNumber = number;
//     if (number === 1) return 1;
//     return number % 2 === 0 ? getMax(number / 2) : getMax(number * 3 + 1);
//   }
//   console.log(count, arr, maxNumber);
// }
// getArray(9);

function zeros(expression){
  let number = '';
  let symbol;
  for (let i = 0 ; i<expression.lenght; i++){
    switch (symbol){
      case '*'
      number = '';
      break;
      case = '!'
      if (expression [i+1===!){
        
      }
    }
  }
}

