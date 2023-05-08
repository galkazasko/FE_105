//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calcArea (side1, side2) {
  if(side2 === undefined){
    return side1 * side1;
  } else {
    return side1 * side2
  }
}
console.log(calcArea(5, 10));
console.log(calcArea(4));