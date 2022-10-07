// 1.
/*Створити функцію-конструктор Людини.
 Властивості, які будуть описувати екземпляр Людини - ім'я, вік, стать, національність, країна, список країн для подорожей.
 Створити універсальні функції - знайомство, прокидатися, засинати й список країн,
 які Людина хоче відвідати.Роботу цих функцій можна виводити через console.log.Але
 в кожній з функцій повинно використовуватись якомога більше
 характеристик конкретної Людини на якій ця функція викликається(підказка: тут треба використатии call / apply / bind) */

function CreateHumanList(name, age, sex, nationality, country, []) {
  this.nameOfHuman = name;
  this.ageOfHuman = age;
  this.sexOfHuman = sex;
  this.nationalityOfHuman = nationality;
  this.countryOfHuman = country;
  this.countryToTravel = [];
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
    `I'm very tired today, I'm going to sleep and dream about ${["Portugal"]}.`
  );
};
sleep.apply(humanMe);

const travel = function () {
  console.log(
    `At my ${this.ageOfHuman} years old, I plan to go ${[
      "Poland",
    ]} and they will welcome me there because I am ${this.nationalityOfHuman}.`
  );
};
travel.apply(humanMe);

// // 2.
// /*  Створити власну реалізацію методу.bind */

function bind(fn, context, ...rest) {
  return function (...args) {
    const uuid = Date.now().toString();
    context[uuid] = fn;
    const res = context[uuid](...rest, ...args);
    delete context[uuid];
    return res;
  };
}
const cardOfDog = {
  breedOfDog: "",
  nameOfDog: "",
  fullInfo() {
    return `I love my ${this.breedOfDog} his named is ${this.nameOfDog}.`;
  },
};

function getFullProfile(breedOfDog, nameOfDog) {
  this.breedOfDog = breedOfDog;
  this.nameOfDog = nameOfDog;
  return this.fullInfo();
}

bind(getFullProfile, cardOfDog, "Amstaff", "Oscar")();

// // 3.

// /*  Cтворити функцію, котра приймає 2 параметри - об'єкти.
// Функція повинна перевіряти чи ці 2 обʼєкти
// абсолютно ідентичні та повертає результат у зрозумілому форматі */

function deepCompare() {
  let i, l, leftChain, rightChain;
  function compareTwoObjects(x, y) {
    let p;
    if (
      isNaN(x) &&
      isNaN(y) &&
      typeof x === "number" &&
      typeof y === "number"
    ) {
      return true;
    }
    if (x === y) {
      return true;
    }
    if (
      (typeof x === "function" && typeof y === "function") ||
      (x instanceof Date && y instanceof Date) ||
      (x instanceof RegExp && y instanceof RegExp) ||
      (x instanceof String && y instanceof String) ||
      (x instanceof Number && y instanceof Number)
    ) {
      return x.toString() === y.toString();
    }
    if (!(x instanceof Object && y instanceof Object)) {
      return false;
    }
    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
      return false;
    }
    if (x.constructor !== y.constructor) {
      return false;
    }
    if (x.prototype !== y.prototype) {
      return false;
    }
    if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
      return false;
    }
    for (p in y) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof y[p] !== typeof x[p]) {
        return false;
      }
    }
    for (p in x) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof y[p] !== typeof x[p]) {
        return false;
      }
      switch (typeof x[p]) {
        case "object":
        case "function":
          leftChain.push(x);
          rightChain.push(y);
          if (!compareTwoObjects(x[p], y[p])) {
            return false;
          }
          leftChain.pop();
          rightChain.pop();
          break;
        default:
          if (x[p] !== y[p]) {
            return false;
          }
          break;
      }
    }
    return true;
  }
  if (arguments.length < 1) {
    return true;
  }
  for (i = 1, l = arguments.length; i < l; i++) {
    leftChain = [];
    rightChain = [];
    if (!compareTwoObjects(arguments[0], arguments[i])) {
      return false;
    }
  }
  return true;
}

deepCompare(1, null); // false
deepCompare(NaN, NaN); // true
deepCompare("smoke", "smoke"); // true

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
