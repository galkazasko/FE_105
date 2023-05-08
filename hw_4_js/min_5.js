//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function getCombine (numOne, numTwo, numThree) {
  return Number(`${numOne}${numTwo}${numThree}`);
}
console.log(getCombine(2,3,4));
console.log(getCombine(1,2,3));