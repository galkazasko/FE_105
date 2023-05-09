// easy 1
let a = 0.1;
let b = 0.2;
let sum = a + b;

alert( sum.toFixed(1) );
// easy 2
let number = 1;
let string = '2';

console.log (+string + number);
//easy 3
let drive = prompt('Specify amount of memory of the flesh drive. For example 5 Gb, 10 Gb...');

const FILE = 0.801;
let result = drive / FILE;
alert(result.toFixed(0)+ ' files')

//normal 1
let money = prompt("Enter the amount of money do you have:");
let price = prompt("Enter the price of one chocolate bar:");
let numChocolates = Math.floor(money / price);
let moneyLeft = money % price;

alert(`You can buy ${numChocolates} chocolate(s) and you will have ${moneyLeft} money left.`);

//normal 2
var num = prompt('Enter a three-digit number');

function getReversedNum(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  return result;
}

alert(getReversedNum(num));
