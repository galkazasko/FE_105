//easy 1

let age = prompt('How old are you?');
if (age >=0 && age <= 11){
  alert('You are a child');
} else if (age >=12 && age <=17){
  alert('You are a teenager');
} else if (age >=18 && age <=59) {
  alert ('You are an adult');
} else if (age >= 60 && age <=150){
  alert('You are a senior' );
} else {
  alert('You have entered an incorrect value');
};

//easy 2 

let singleDigitsNumber = prompt('Please enter the number from 0 to 9');
let symbol;
switch (parseInt(singleDigitsNumber)){
  case 0:
    symbol = ")";
    break;
  case 1:
    symbol = "!";
    break;
  case 2:
    symbol = "@";
    break;
  case 3:
    symbol = "#";
    break;
  case 4:
    symbol = "$";
    break;
  case 5:
    symbol = "%";
    break;
  case 6:
    symbol = "^";
    break;
  case 7:
    symbol = "&";
    break;
  case 8:
    symbol = "*";
    break;
  case 9:
    symbol = "(";
    break; 
  default:
    symbol = "You have entered an incorrect number";
};

alert("The symbol is " + symbol + "!");

//easy 3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let start = parseInt(prompt("Enter the first number of yur numberic range:"));
let end = parseInt(prompt("Enter the last number of your numberic range:"));
let sum = 0;

let e = start;
while (e <= end){
  sum += e;
  e++;
};

alert(`The summ of numbers in the range from ${start} to ${end} is ${sum}`);

//easy 4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let a = parseInt(prompt("If you want to know the greatest common division of 2 numbers, please, enter the first number:"));
let b = parseInt(prompt("Enter the second number:"));
let greatestDivision = 1;

let f = 1;
while (f<= a && f <= b) {
  if (a % f === 0 && b % f === 0) {
    greatestDivision = f;
  }
  f++;
};

alert(`The greatest common division of numbers ${a} and ${b} is ${greatestDivision}.`);

// easy 5 Запитай у користувача число і виведи всі дільники цього числа.

let number = parseInt(prompt('Enter a number to calculate all divisors:'));
let divisors = "";
let i = 1;

while (i <= number) {
  if (number % i === 0) {
    divisors += i + "\n";
  }
  i++;
};

alert(`Divisors of number ${number} are: \n${divisors}`);


// normal 1 Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
let fiveDigitsNumber = prompt('Enter a five-digits number:');
if (fiveDigitsNumber === fiveDigitsNumber.split("").reverse().join("")) {
  alert('This number is palindrom number.')
} else {
  alert('This is not palindrom number.')
};

// normal 2 Запитай у користувача суму покупки і виведи суму до оплати зі знижкою: від 200 до 300 - знижка буде 3%; від 300 до 500 - 5%; від 500 і вище - 7%.

let price = parseInt(prompt('Enter the price of the product:'))
let discount;

if (price >= 200 && price <= 300) {
  discount = price * 0.97;
} else if (price >=300 && price <= 500) {
  discount = price * 0.95;
} else if (price >= 500) {
  discount = price * 0.93;
} else {
  discount = price;
};

alert(`Amount to be paid: ${discount}`);


//normal 3 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let positN = 0;
let negatN = 0;
let zeroN = 0;
let evenN = 0;
let oddN = 0;

for (let i = 1; i <= 10; i++) {
  let n = parseInt(prompt(`Enter number ${i}:`));
  if (n > 0) {
    positN++;
  } else if (n < 0) {
    negatN++;
  } else {
    zeroN++;
  }
  if (n % 2 === 0) {
    evenN++;
  } else {
    oddN++;
  }
};

alert(`Positive numbers: ${positN}\nNegative numbers: ${negatN}\nZero numbers: ${zeroN}\nEven numbers: ${evenN}\nOdd numbers: ${oddN}`);

// normal 4

let day = "Monday";
let answer = true;

while(answer) {
  alert(`A day of the week: ${day}`);
  answer = confirm("Do you want to see the next day of the week?");
  switch(day) {
    case "Monday":
      day = "Tuesday";
      break;
    case "Tuesday":
      day = "Wednesday";
      break;
    case "Wednesday":
      day = "Thursday";
      break;
    case "Thursday":
      day = "Friday";
      break;
    case "Friday":
      day = "Saturday";
      break;
    case "Saturday":
      day = "Sunday";
      break;
    default:
      day = "Monday";
      break;
  }
};
