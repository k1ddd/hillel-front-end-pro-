function NewAuto() {
  const info = { ...arguments[0] };
  this.fuelConsumption = info[0];
  this.engineType = info[1];
  this.modelOfCar = info[2];
  this.engineVolume = info[3];
  this.year = info[4];
  this.carOfMass = info[5];
  this.status = info[6];

  this.damageCar = 100;
}

NewAuto.prototype.startRide = function () {
  if (!this.status) {
    console.log(`${this.modelOfCar} starting to ride`);
    this.status = true;
    this.damageCar = this.damageCar - carServiceability();
  } else {
    console.log(`${this.modelOfCar} still on the trip`);
  }
};

NewAuto.prototype.endRide = function () {
  this.status = false;
  console.log(`${this.modelOfCar} is shutting  now. Bye-Bye.`);
};

function carServiceability() {
  return (Math.random() * (2.5 - 0.1) + 0.1).toFixed(2);
}
function Hatchback() {
  NewAuto.call(this, arguments);
}
function Sedan() {
  NewAuto.call(this, arguments);
}
function WagonCar() {
  NewAuto.call(this, arguments);
}

Hatchback.prototype = Object.create(NewAuto.prototype);
Sedan.prototype = Object.create(NewAuto.prototype);
WagonCar.prototype = Object.create(NewAuto.prototype);

const ford = new Hatchback(5, "diesel", "Ford Fiesta", 1.4, 2006, 1100, "true");
const toyota = new Sedan(15, "petrol", "Toyota Camry", 3.5, 2008, 1600, "true");
const vw = new WagonCar(10, "petrol", "Vw Golf", 2, 2000, 1300, "true");

vw.startRide();
vw.endRide();

function dealer(car) {
  const prices = {};
  let priceOfCoast = (100 - car.damageCar).toFixed(2);

  if (car instanceof Hatchback) {
    prices.typeHatchback = 110;

    if (car.engineType === "diesel") {
      prices.engineKoef = 2.2;
    } else car.engineType === "petrol";
    prices.engineKoef = 1.8;
    if (car.year > 2019) {
      prices.yearKoef = 1.2;
    } else car.year < 2018 && car.year > 2010;
    prices.yearKoef = 1.4;
    if (car.year < 2009 && car.year > 2000) {
      prices.yearKoef = 1.7;
    } else car.year < 1999 && car.year > 1990;
    prices.yearKoef = 2;
    if (car.year < 1990) {
      console.log(`Sorry , we don't repair cars until 1990  `);
    }
    if (car.carOfMass > 800 && car.carOfMass < 1100) {
      prices.massKoef = 1.5;
    } else if (car.carOfMass > 1101 && car.carOfMass < 1400) {
      prices.massKoef = 1.7;
    } else if (car.carOfMass > 1401) {
      prices.massKoef = 2;
    }

    const amountYearHatchback = prices.yearKoef * prices.typeHatchback;
    const amountEngineHatchback = prices.engineKoef * prices.typeHatchback;
    const amountMassHatchback = prices.massKoef * prices.typeHatchback;
    const totalAmount =
      prices.typeHatchback * priceOfCoast +
      amountYearHatchback +
      amountEngineHatchback +
      amountMassHatchback.toFixed(2);
    return `Repairing for your ${car.modelOfCar} will cost ${totalAmount}`;
  }
  if (car instanceof Sedan) {
    prices.typeSedan = 125;

    if (car.engineType === "diesel") {
      prices.engineKoef = 2.5;
    } else car.engineType === "petrol";
    prices.engineKoef = 2;
    if (car.year > 2019) {
      prices.yearKoef = 1.5;
    } else car.year < 2018 && car.year > 2010;
    prices.yearKoef = 1.8;
    if (car.year < 2009 && car.year > 2000) {
      prices.yearKoef = 2;
    } else car.year < 1999 && car.year > 1990;
    prices.yearKoef = 2.6;
    if (car.year < 1990) {
      console.log(`Sorry , we don't repair cars until 1990  `);
    }
    if (car.carOfMass > 800 && car.carOfMass < 1100) {
      prices.massKoef = 1.6;
    } else if (car.carOfMass > 1101 && car.carOfMass < 1400) {
      prices.massKoef = 1.8;
    } else if (car.carOfMass > 1401) {
      prices.massKoef = 2.1;
    }

    const amountYearSedan = prices.yearKoef * prices.typeSedan;
    const amountEngineSedan = prices.engineKoef * prices.typeSedan;
    const amountMassSedan = prices.massKoef * prices.typeSedan;
    const totalAmount =
      prices.typeSedan * priceOfCoast +
      amountYearSedan +
      amountEngineSedan +
      amountMassSedan.toFixed(2);
    return `Repairing for your ${car.modelOfCar} will cost ${totalAmount}`;
  }
  if (car instanceof WagonCar) {
    prices.typeWagonCar = 130;

    if (car.engineType === "diesel") {
      prices.engineKoef = 2.9;
    } else car.engineType === "petrol";
    prices.engineKoef = 2.4;
    if (car.year > 2019) {
      prices.yearKoef = 2;
    } else car.year < 2018 && car.year > 2010;
    prices.yearKoef = 2.2;
    if (car.year < 2009 && car.year > 2000) {
      prices.yearKoef = 2.5;
    } else car.year < 1999 && car.year > 1990;
    prices.yearKoef = 3;
    if (car.year < 1990) {
      console.log(`Sorry , we don't repair cars until 1990  `);
    }
    if (car.carOfMass > 800 && car.carOfMass < 1100) {
      prices.massKoef = 1.7;
    } else if (car.carOfMass > 1101 && car.carOfMass < 1400) {
      prices.massKoef = 1.9;
    } else if (car.carOfMass > 1401) {
      prices.massKoef = 2.2;
    }

    const amountYearWagonCar = prices.yearKoef * prices.typeWagonCar;
    const amountEngineWagonCar = prices.engineKoef * prices.typeWagonCar;
    const amountMassWagonCar = prices.massKoef * prices.typeWagonCar;
    const totalAmount =
      prices.typeWagonCar * priceOfCoast +
      amountYearWagonCar +
      amountEngineWagonCar +
      amountMassWagonCar.toFixed(2);
    return `Repairing for your ${car.modelOfCar} will cost ${totalAmount}`;
  }
  this.damageCar = 100;
}

dealer(vw);
