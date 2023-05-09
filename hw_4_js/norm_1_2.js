//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
function getPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
console.log(getPerfectNumber(6));
console.log(getPerfectNumber(28));
console.log(getPerfectNumber(496));
console.log(getPerfectNumber(30));
console.log(getPerfectNumber(24));

//Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function range(start, end) {
  for (let e = start; e <= end; e++) {
    if (getPerfectNumber(e)) {
      console.log(e);
    }
  }
}
range(1,1000000);