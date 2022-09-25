// 1 //

const validity = function (value) {
  if (value === undefined || value === null) {
    return;
  }
  return String(value);
};

const autoTeam = function (
  teamName,
  driverName,
  yearBirth,
  brandCar,
  sponsor,
  driverAcess
) {
  const newAutoTeam = {
    teamName: validity(teamName),
    driverName: validity(driverName),
    yearBirth: validity(yearBirth),
    brandCar: validity(brandCar),
    sponsor: validity(sponsor),
    driverAcess: driverAcess,
  };
  return newAutoTeam;
};

autoTeam("Valhalla", "Ulrih", 1980, "Volvo", "Norway Ragnarok", "yes");

// 2 //

const empty = "empty__field";

const newUser = function () {
  const user = {
    login: ``,
    password: ``,
    city: ``,
    country: ``,
    maleOrFemale: ``,
    age: ``,
  };

  for (const [key] of Object.entries(user)) {
    const answer = prompt([key]);
    if (answer === null || answer === ``) user[key] = empty;
    else {
      user[key] = answer;
    }
  }
  return user;
};
const userCreated = newUser();
console.log(userCreated);

// 3 //

const changeDATA = function (Object, key, value) {
  return (Object[key] = value);
};
changeDATA(userCreated, "city", "Kherson");
console.log(userCreated);

// 4 //

const hiEveryone = function () {
  return console.log("Hi. everyone!");
};

const sendMyHomeWork = function () {
  return console.log("Sending my howework... Please, wait");
};

const newStudent = {
  name: "Victor",
  surname: "Romaniv",
  age: 29,
  course: 3,
  city: "Kyiv",
  greeting: hiEveryone(),
  addHomework: sendMyHomeWork(),
};

newStudent.greeting;
newStudent.addHomework;

// 5 //

function isEmpty(obj) {
  const counter = 0;
  for (let key in obj) {
    counter++;
  }
  if (counter === 0) {
    return true;
  } else {
    return false;
  }
}

isEmpty();

// 6 //

const revenue = {
  Taras: 2000,
  Marta: 10,
  Ivan: 1200,
  Petro: 400,
  Roma: 366,
  Alina: 829,
};

// 7 //

const sumRevenue = (revenue) => {
  let sum = 0;
  for (let salary of Object.values(revenue)) {
    sum += salary;
  }
  return sum;
};

console.log(sumRevenue(revenue));

// 8 //

const minRevenue = (teamSalesmen) => {
  const resultWithSalesmen = Object.entries(teamSalesmen);
  const sortResult = resultWithSalesmen.sort((salesmanOne, salesmanTwo) => {
    return salesmanOne[1] - salesmanTwo[1];
  })[0];
  return `Продавець ${sortResult[0]} має найменьшу виручку, яка складає ${sortResult[1]}.`;
};
console.log(minRevenue(revenue));

// 9 //

const maxRevenue = (teamSalesmen) => {
  const resultWithSalesmen = Object.entries(teamSalesmen);
  const sortResult = resultWithSalesmen.sort((salesmanOne, salesmanTwo) => {
    return salesmanTwo[1] - salesmanOne[1];
  })[0];
  return `Продавець ${sortResult[0]} має найбільшу виручку, яка складає ${sortResult[1]}.`;
};
console.log(maxRevenue(revenue));

// 10 //

const randomSalesmenOnTheMonth = (revenue) => {
  const resultСalculate = Object.keys(revenue);
  let randomSalesmen = Math.floor(Math.random() * resultСalculate.length);
  return `Поздравляем ${resultСalculate[randomSalesmen]} вы продавец месяца, получите Ваш бонус.`;
};

console.log(randomSalesmenOnTheMonth(revenue));
