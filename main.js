let yourName = prompt("Яке Ваше імʼя?");

let lastName = prompt("Яке Ваше прізвище?");

let favoritNumber = prompt("Яке Ваше улюблене число?");

console.log(
  `Вітаю, ${yourName} ${lastName}! Ваше улюблене число ${favoritNumber}`
);

alert(`Вітаю, ${yourName} ${lastName}! Ваше улюблене число ${favoritNumber}`);

let firstNumber = prompt("Введіть перше число");

let secondNumber = prompt("Введіть друге число");

let addition = +firstNumber + +secondNumber;
let subtraction = +firstNumber - +secondNumber;
let multiplication = +firstNumber * +secondNumber;
let division = +firstNumber / +secondNumber;

console.log("сума =", addition);
console.log("різниця =", subtraction);
console.log("добуток =", multiplication);
console.log("ділення =", division);

let bornYear = +prompt("В якому році Ви народились?");

let thisYear = 2022;

let yourAge = thisYear - bornYear;

console.log("Ваш вік", yourAge);

let num1 = 10;
let num2 = 3;
let num3 = 5;
let num4 = 8;

let remOfDivision1 = num1 % num2;
let remOfDivision2 = num3 % num4;

let resultRemOfDivision = remOfDivision1 % remOfDivision2;

console.log(
  `Остача від ділення числа ${remOfDivision1} на число ${remOfDivision2} рівна ${resultRemOfDivision}`
);

let number = prompt("Введіть будь яке число");

const evenNumber = number % 2 == 0;
const oddNumeber = number % 2 !== 0;
if (evenNumber) {
  console.log(`Ваше число парне`);
}
if (oddNumeber) {
  console.log(`Ваше число непарне`);
}
