// Function Declaration
function calcSum (numOne, numTwo) {
  console.log (`Variable numOne: ${numOne}`);
  console.log (`Variable numTwo: ${numTwo}`);

  let numSum = numOne + numTwo;

  console.log(`Sum:${numSum}`);
}
calcSum (4,5);

//Function Expression (impossible to call before)

let showMessage = function () {
  console.log(`Hello World!`);
};
showMessage();

// Arrow function (one-line)

let getSum = (a, b) => a + b;
console.log (getSum(1,2));

// Arrow function (several lines)

let getMessage = (name, age) => {
  let message = `${name}, ${age} years old.`;
  return message;
}
console.log(getMessage(`Donald Trump`, 76));