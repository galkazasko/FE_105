"use strict";
/*let userName;
let userSurname;
let userAge;
let userGender;

/*name = 1stUser;
surname = users-surname;
gender = a;
**/     

let name = prompt('What is your name?');

let result = confirm('Are you sure your name is' + ' ' + name);

alert('Welcome' + ' ' + name);

let age = prompt('Which year were you born? (Please enter the year in yyyy format, for example: 1990)');

const YEAR = '2023'; 

let userAge = (YEAR - age);

alert(`Your are ${userAge}!`); 

let squareSide = prompt('Please enter the length of the side of a square. Write only number');

let perimeter = (squareSide * 4);

alert(`Perimeter of your square is ${perimeter}`);



