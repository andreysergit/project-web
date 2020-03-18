let age;
age = prompt ('your age?');

const grovCondition = age>=18;

if (grovCondition) {
  const message = "access.permited";
  console.log(message);
} else {
  const message = "access.denied";
  console.log(message);
}
