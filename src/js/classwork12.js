// try {
//     lalalal;
// } catch (err){
//     console.log(error)
// }

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("value1"), 2000);
  setTimeout(() => reject(new Error('error')), 3000);
});

promise.then(function (num1) {
  console.log(num1);
  console.log(num2);
});
promise.catch(console.log(num2))
