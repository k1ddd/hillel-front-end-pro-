// 1.
/*Створити функцію-конструктор Людини.
 Властивості, які будуть описувати екземпляр Людини - ім'я, вік, стать, національність, країна, список країн для подорожей.
 Створити універсальні функції - знайомство, прокидатися, засинати й список країн,
 які Людина хоче відвідати.Роботу цих функцій можна виводити через console.log.Але
 в кожній з функцій повинно використовуватись якомога більше
 характеристик конкретної Людини на якій ця функція викликається(підказка: тут треба використатии call / apply / bind) */

function CreateHumanList(
  name,
  age,
  sex,
  nationality,
  country,
  listOfCountries
) {
  this.nameOfHuman = name;
  this.ageOfHuman = age;
  this.sexOfHuman = sex;
  this.nationalityOfHuman = nationality;
  this.countryOfHuman = country;
  this.countryToTravel = listOfCountries;
}

const humanMe = new CreateHumanList(
  "Vladyslav",
  34,
  "Male",
  "Ukrainian",
  "Ukraine",
  ["Italy", "Spain", "Poland", "Portugal"]
);

const greet = function () {
  console.log(`Hello ${this.nameOfHuman} have a nice day!`);
};
greet.apply(humanMe);

const wakeUp = function () {
  console.log(`Wake up ${this.nameOfHuman} already, you're late for work!`);
};
wakeUp.apply(humanMe);

const sleep = function () {
  console.log(
    `I'm very tired today, I'm going to sleep and dream about ${this.countryToTravel[3]}.`
  );
};
sleep.apply(humanMe);

const travel = function () {
  console.log(
    `At my ${this.ageOfHuman} years old, I plan to go ${this.countryToTravel[2]}, and they will welcome me there because I am ${this.nationalityOfHuman}.`
  );
};
travel.apply(humanMe);

// // 2.
// /*  Створити власну реалізацію методу.bind */

const cardOfDog = {
  breedOfDog: "Amstaff",
  nameOfDog: "Oscar",
};

function getFullProfile() {
  console.log(`I love my ${this.breedOfDog} his named is ${this.nameOfDog}.`);
}

myOwnBind = function (fn, context) {
  return fn.apply(context);
};

myOwnBind(getFullProfile, cardOfDog);

// // 3.

// /*  Cтворити функцію, котра приймає 2 параметри - об'єкти.
// Функція повинна перевіряти чи ці 2 обʼєкти
// абсолютно ідентичні та повертає результат у зрозумілому форматі */

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  } else {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for (var propName in obj1) {
      if (!obj2.hasOwnProperty(propName)) {
        return false;
      }
      if (obj1[propName].valueOf() !== obj2[propName].valueOf()) {
        if (!deepEqual(obj1[propName], obj2[propName])) {
          return false;
        }
      }
    }
  }
  return true;
}
deepEqual();

//4.

/* Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
enterData - запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
calculateSum() повертає суму цих властивостей.
calculateNSD() повертає результат пошуку НСД
calculateNSK() повертає результат пошуку НСК */

function Calculator() {
  this.enterData = function () {
    this.firstNUM = +prompt(`Enter plese first number `);
    this.secondNUM = +prompt(`Enter plese second number `);
  };
  this.calculateSum = function () {
    return this.firstNUM + this.secondNUM;
  };
  this.calculateNSD = function () {
    if (this.firstNUM == -1 || this.secondNum == -1) {
      return;
    }
    let result = 0;
    this.secondNUM > this.firstNUM
      ? (result = this.firstNUM)
      : (result = this.secondNUM);
    while (!(this.secondNUM % result === 0 && this.firstNUM % result == 0)) {
      result -= 1;
    }
    return result;
  };
  this.calculateNSK = function () {
    return (this.firstNUM * this.secondNUM) / this.calculateNSD();
  };
}
const calc = new Calculator();
calc.enterData();
console.log(`Sum = `, calc.calculateSum());
console.log(`NSD = `, calc.calculateNSD());
console.log(`NSK = `, calc.calculateNSK());
