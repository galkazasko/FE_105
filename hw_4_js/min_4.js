//Напиши функцію, яка обчислює факторіал переданого їй числа.

function getFactorial(number) {
  if (number >= 1) {
    let result = 1;
    for (let i = 1; i<=number; i++) {
      result *= i;
    }
    return result;
  }
}
console.log(getFactorial(5));
console.log(getFactorial(12));
console.log(getFactorial(1));