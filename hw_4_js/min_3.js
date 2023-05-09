/*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/

function compareNumbers (numOne, numTwo) {
  if (numOne < numTwo) {
    return -1;
  } else if (numOne > numTwo) {
    return 1;
  } else {
    return 0;
  }
}
console.log(compareNumbers(2,3));
console.log(compareNumbers(3,2));
console.log(compareNumbers(2,2));