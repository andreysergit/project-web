// function delay(ms) {
//   new Promise(function (resolve) {
//     setTimeout(() => resolve("выполнилось через 3 секунды"), ms);
//   });
// }
// delay(3000).then((result) => console.log(result));

//рабочий код 

// function delay(ms) {
//   return new Promise (resolve => setTimeout(resolve, ms))
// }
// delay(3000).then(() => console.log("выполнилось через 3 секунды"));
