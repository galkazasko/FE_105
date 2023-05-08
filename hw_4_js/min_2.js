//Створи функцію, яка буде виводити кількість переданих їй аргументів.

function countArguments () {
  let count = 0;

  for (let i=0; i <arguments.length; i++) {
    count++;
  }
  return count;
}
console.log(countArguments('name', 'age', 'adress'));
console.log(countArguments(2, 'hi', false));

//other alternativ

function getAllArguments () {
  console.log(arguments.length);
}
getAllArguments(1, 2, 3, 4, 5, 6, 7, 8, 9);
getAllArguments('Bill', 'Julia', 'John', 'Samanta', 'Kevin');